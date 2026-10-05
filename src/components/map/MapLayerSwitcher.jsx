const LAYERS = [
  { id: 'standard', label: 'Standard' },
  { id: 'satellite', label: 'Satellite' },
  { id: 'heatmap', label: 'Soil Heatmap', icon: 'fa-fire' },
];

const ACTIVE = 'bg-olive-700 text-white shadow';
const IDLE = 'text-olive-400 hover:text-white';

export default function MapLayerSwitcher({ layer, onChange }) {
  return (
    <div className="absolute top-4 right-4 z-10 bg-olive-800/90 backdrop-blur-md p-1.5 rounded-xl border border-olive-700 shadow-xl flex items-center gap-1.5">
      <span className="text-[11px] font-semibold text-olive-300 px-2 hidden sm:inline">Layer:</span>
      {LAYERS.map(({ id, label, icon }) => {
        const active = layer === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${active ? ACTIVE : IDLE} ${
              icon ? 'flex items-center gap-1' : ''
            }`}
          >
            {icon && <i className={`fa-solid ${icon} text-amber-400 text-xs`}></i>}
            {label}
            {icon && active ? ' (Active)' : ''}
          </button>
        );
      })}
    </div>
  );
}
