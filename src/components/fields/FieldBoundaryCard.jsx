import { Link } from 'react-router-dom';
import { getStatusBadge } from '../../utils/status.js';

export default function FieldBoundaryCard({ field }) {
  return (
    <div className="p-4 rounded-xl bg-olive-800 border border-olive-700 hover:border-olive-500 transition-all space-y-3 shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-white text-sm">{field.name}</h3>
        <span className={`text-[10px] px-2 py-0.5 rounded border ${getStatusBadge(field.status)}`}>
          {field.status}
        </span>
      </div>

      <div className="flex items-center justify-between text-[11px] text-olive-400">
        <span>
          Crop: <strong className="text-olive-300">{field.crop}</strong>
        </span>
        <span>
          Area: <strong className="text-olive-300">{field.area}</strong>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div className="bg-olive-900 px-2.5 py-1.5 rounded-lg border border-olive-700">
          <span className="text-olive-400 block text-[10px]">Latitude</span>
          <span className="font-mono text-olive-300">{field.lat.toFixed(4)}</span>
        </div>
        <div className="bg-olive-900 px-2.5 py-1.5 rounded-lg border border-olive-700">
          <span className="text-olive-400 block text-[10px]">Longitude</span>
          <span className="font-mono text-olive-300">{field.lng.toFixed(4)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-olive-700 text-[10px] text-olive-400">
        <span>{field.node}</span>
        <Link to="/live-map" className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold">
          <i className="fa-solid fa-location-dot"></i> View on map
        </Link>
      </div>
    </div>
  );
}
