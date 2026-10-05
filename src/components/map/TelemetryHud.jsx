
const STATUS_TEXT = {
  Optimal: 'text-emerald-400',
  Warning: 'text-amber-400',
  Critical: 'text-red-400',
};

function Metric({ label, value, valueClass }) {
  return (
    <div className="bg-olive-900 px-3 py-1.5 rounded-xl border border-olive-700">
      <span className="text-olive-400 block text-[10px]">{label}</span>
      <span className={`font-bold ${valueClass}`}>{value}</span>
    </div>
  );
}

export default function TelemetryHud({ field }) {
  return (
    <div className="absolute bottom-4 left-4 right-4 z-10 bg-olive-800/95 backdrop-blur-md p-3.5 rounded-2xl border border-olive-700 shadow-2xl flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
          <i className="fa-solid fa-tower-broadcast text-sm animate-pulse"></i>
        </div>
        <div>
          <h4 className="text-xs font-bold text-white">{field.name}</h4>
          <p className="text-[10px] text-olive-400">
            Selected Node ID: <span className="text-olive-300 font-mono">{field.node}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <Metric label="Moisture" value={`${field.moisture}%`} valueClass="text-emerald-400" />
        <Metric label="Temperature" value={`${field.temp}°C`} valueClass="text-amber-400" />
        <Metric label="pH Level" value={`${field.ph} pH`} valueClass="text-blue-400" />
        <Metric
          label="Status"
          value={field.status}
          valueClass={STATUS_TEXT[field.status] ?? STATUS_TEXT.Optimal}
        />
      </div>
    </div>
  );
}
