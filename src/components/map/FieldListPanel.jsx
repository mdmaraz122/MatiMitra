import FieldCard from './FieldCard.jsx';
import { STATUS_FILTERS } from '../../data/fields.js';

const DRONE_ON =
  'px-3 py-1.5 rounded-lg bg-emerald-600 text-white border border-emerald-400 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-900/50 animate-pulse';
const DRONE_OFF =
  'px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/50 text-xs font-semibold transition-all flex items-center gap-1.5';

export default function FieldListPanel({
  fields,
  query,
  onQueryChange,
  status,
  onStatusChange,
  droneActive,
  onToggleDrone,
  onSelectField,
}) {
  return (
    <div className="w-full lg:w-96 bg-olive-800 border-r border-olive-700 flex flex-col shrink-0 z-20 h-1/2 lg:h-full">
      <div className="p-4 border-b border-olive-700 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-white text-sm flex items-center gap-2">
            <i className="fa-solid fa-satellite-dish text-emerald-400"></i> Active Fields & Telemetry
          </h2>
          <p className="text-[11px] text-olive-400">Real-time GPS & IoT node monitoring</p>
        </div>
        <button type="button" onClick={onToggleDrone} className={droneActive ? DRONE_ON : DRONE_OFF}>
          <i className={`fa-solid ${droneActive ? 'fa-plane-circle-check' : 'fa-plane'}`}></i>
          <span>{droneActive ? 'Stop Drone' : 'Start Drone'}</span>
        </button>
      </div>

      <div className="p-3 border-b border-olive-700 bg-olive-800/60 space-y-2.5">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-olive-400">
            <i className="fa-solid fa-search text-xs"></i>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Filter by name or crop..."
            className="bg-olive-900 text-xs text-olive-300 pl-9 pr-4 py-2 rounded-lg border border-olive-700 focus:outline-none focus:border-olive-500 w-full"
          />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {STATUS_FILTERS.map(({ value, label, textClass }) => {
            const active = status === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => onStatusChange(value)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium border shrink-0 ${
                  active
                    ? 'bg-olive-700 text-white border-olive-600'
                    : `bg-olive-900 ${textClass} border-olive-700`
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
        {fields.length === 0 ? (
          <div className="text-center py-8 text-olive-400 text-xs">No fields matched your filter.</div>
        ) : (
          fields.map((field) => <FieldCard key={field.id} field={field} onSelect={onSelectField} />)
        )}
      </div>
    </div>
  );
}
