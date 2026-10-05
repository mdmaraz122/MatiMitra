import { getStatusBadge } from '../../utils/status.js';

export default function FieldCard({ field, onSelect }) {
  return (
    <div
      onClick={() => onSelect(field)}
      className="p-3 rounded-xl bg-olive-900 border border-olive-700/80 hover:border-olive-500 transition-all cursor-pointer space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="font-bold text-white text-xs">{field.name}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded border ${getStatusBadge(field.status)}`}>
          {field.status}
        </span>
      </div>
      <div className="flex items-center justify-between text-[11px] text-olive-400">
        <span>
          Crop: <strong className="text-olive-300">{field.crop}</strong>
        </span>
        <span>
          Moisture: <strong className="text-emerald-400">{field.moisture}%</strong>
        </span>
      </div>
      <div className="flex items-center justify-between pt-1 border-t border-olive-800 text-[10px] text-olive-400">
        <span>{field.node}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(field);
          }}
          className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
        >
          <i className="fa-solid fa-crosshairs"></i> Center
        </button>
      </div>
    </div>
  );
}
