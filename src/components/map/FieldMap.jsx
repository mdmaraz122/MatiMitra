import { useEffect, useRef } from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';

import FieldPopup from './FieldPopup.jsx';
import { droneIcon, getFieldPinIcon } from './mapIcons.js';
import { DRONE_PATH, MAP_CENTER, MAP_DEFAULT_ZOOM } from '../../data/fields.js';
import { getStatusColor } from '../../utils/status.js';

const STANDARD_TILES = {
  url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
};
const SATELLITE_TILES = {
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  attribution: '&copy; Esri',
};

function DroneMarker({ position }) {
  const markerRef = useRef(null);

  // Original behaviour: the drone popup opens when the patrol is launched.
  useEffect(() => {
    markerRef.current?.openPopup();
  }, []);

  return (
    <Marker ref={markerRef} position={position} icon={droneIcon}>
      <Popup>
        <b>Autonomous IoT Drone #1</b>
        <br />
        Altitude: 120m
        <br />
        Speed: 45 km/h
      </Popup>
    </Marker>
  );
}

export default function FieldMap({
  fields,
  layer,
  droneActive,
  droneIndex,
  markerRefs,
  onSelectField,
  onMapReady,
}) {
  const tiles = layer === 'satellite' ? SATELLITE_TILES : STANDARD_TILES;

  return (
    // `isolate` keeps Leaflet's high z-index panes beneath the floating HUD / layer switcher.
    <MapContainer
      ref={onMapReady}
      center={MAP_CENTER}
      zoom={MAP_DEFAULT_ZOOM}
      zoomControl={false}
      className="w-full flex-1 bg-olive-900 isolate"
    >
      <ZoomControl position="bottomright" />
      <TileLayer key={layer === 'satellite' ? 'satellite' : 'standard'} {...tiles} maxZoom={19} />

      {layer === 'heatmap' &&
        fields.map((field) => {
          const color = getStatusColor(field.status);
          return (
            <Circle
              key={`heat-${field.id}`}
              center={[field.lat, field.lng]}
              radius={250}
              pathOptions={{ color, fillColor: color, fillOpacity: 0.35 }}
            />
          );
        })}

      {fields.map((field) => (
        <Marker
          key={field.id}
          ref={(marker) => {
            if (marker) markerRefs.current[field.id] = marker;
            else delete markerRefs.current[field.id];
          }}
          position={[field.lat, field.lng]}
          icon={getFieldPinIcon(getStatusColor(field.status))}
          eventHandlers={{ click: () => onSelectField(field) }}
        >
          <Popup>
            <FieldPopup field={field} />
          </Popup>
        </Marker>
      ))}

      {droneActive && <DroneMarker position={DRONE_PATH[droneIndex]} />}
    </MapContainer>
  );
}
