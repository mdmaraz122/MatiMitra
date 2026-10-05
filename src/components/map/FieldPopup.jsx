import { getStatusColor } from '../../utils/status.js';

const cell = { background: '#141f12', padding: '4px 6px', borderRadius: 6 };
const cellLabel = { color: '#9cb598', display: 'block', fontSize: 9 };

function Cell({ label, value, color }) {
  return (
    <div style={cell}>
      <span style={cellLabel}>{label}</span>
      <strong style={{ color }}>{value}</strong>
    </div>
  );
}

export default function FieldPopup({ field }) {
  const statusColor = getStatusColor(field.status);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", padding: 4, minWidth: 200 }}>
      <h3 style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, color: '#fff' }}>{field.name}</h3>
      <p style={{ fontSize: 11, color: '#9cb598', marginBottom: 8 }}>
        Crop: <strong>{field.crop}</strong> ({field.area})
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 6,
          marginBottom: 8,
          fontSize: 11,
        }}
      >
        <Cell label="Soil Moisture" value={`${field.moisture}%`} color="#10B981" />
        <Cell label="Temperature" value={`${field.temp}°C`} color="#F59E0B" />
        <Cell label="pH Level" value={`${field.ph} pH`} color="#60A5FA" />
        <Cell label="Status" value={field.status} color={statusColor} />
      </div>
      <div
        style={{
          fontSize: 9,
          color: '#9cb598',
          textAlign: 'right',
          borderTop: '1px solid #384d35',
          paddingTop: 4,
        }}
      >
        Node: {field.node} • Updated {field.lastUpdate}
      </div>
    </div>
  );
}
