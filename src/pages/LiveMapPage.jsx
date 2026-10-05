import { useCallback, useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import FieldListPanel from '../components/map/FieldListPanel.jsx';
import FieldMap from '../components/map/FieldMap.jsx';
import MapLayerSwitcher from '../components/map/MapLayerSwitcher.jsx';
import TelemetryHud from '../components/map/TelemetryHud.jsx';
import { useNotification } from '../context/NotificationContext.jsx';
import { useFilteredFields } from '../hooks/useFilteredFields.js';
import { DRONE_PATH, DRONE_STEP_MS, FIELDS } from '../data/fields.js';

export default function LiveMapPage() {
  const { fieldQuery, setFieldQuery } = useOutletContext();
  const { showNotification } = useNotification();

  const [status, setStatus] = useState('ALL');
  const [layer, setLayer] = useState('standard');
  const [selectedId, setSelectedId] = useState(FIELDS[0].id);
  const [droneActive, setDroneActive] = useState(false);
  const [droneIndex, setDroneIndex] = useState(0);

  const mapRef = useRef(null);
  const markerRefs = useRef({});

  const fields = useFilteredFields(status, fieldQuery);
  const selectedField = FIELDS.find((f) => f.id === selectedId) ?? FIELDS[0];

  // Advance the simulated drone along its patrol path while active.
  useEffect(() => {
    if (!droneActive) return undefined;
    const timer = setInterval(() => {
      setDroneIndex((i) => (i + 1) % DRONE_PATH.length);
    }, DRONE_STEP_MS);
    return () => clearInterval(timer);
  }, [droneActive]);

  const handleMapReady = useCallback((map) => {
    mapRef.current = map;
    // Mirrors the original post-layout size refresh.
    if (map) setTimeout(() => map.invalidateSize(), 150);
  }, []);

  const handleSelectField = useCallback((field) => setSelectedId(field.id), []);

  // Sidebar "Center" action: fly to the field, open its popup and update the HUD.
  const handleCenterOnField = useCallback((field) => {
    setSelectedId(field.id);
    const map = mapRef.current;
    if (!map) return;
    map.flyTo([field.lat, field.lng], 16, { duration: 1.2 });
    markerRefs.current[field.id]?.openPopup();
  }, []);

  const handleToggleDrone = () => {
    if (droneActive) {
      setDroneActive(false);
      showNotification('Drone returned to docking station successfully.');
    } else {
      setDroneIndex(0);
      setDroneActive(true);
      showNotification('Autonomous IoT Drone patrol launched along farm perimeter path.');
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col lg:flex-row overflow-hidden">
      <FieldListPanel
        fields={fields}
        query={fieldQuery}
        onQueryChange={setFieldQuery}
        status={status}
        onStatusChange={setStatus}
        droneActive={droneActive}
        onToggleDrone={handleToggleDrone}
        onSelectField={handleCenterOnField}
      />

      <div className="flex-1 relative flex flex-col h-1/2 lg:h-full">
        <MapLayerSwitcher layer={layer} onChange={setLayer} />
        <FieldMap
          fields={fields}
          layer={layer}
          droneActive={droneActive}
          droneIndex={droneIndex}
          markerRefs={markerRefs}
          onSelectField={handleSelectField}
          onMapReady={handleMapReady}
        />
        <TelemetryHud field={selectedField} />
      </div>
    </div>
  );
}
