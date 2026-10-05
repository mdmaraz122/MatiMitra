export default function StatCard({ label, value, icon, iconColor, noteIcon, note, noteColor }) {
  return (
    <div className="p-5 rounded-xl bg-olive-800 border border-olive-700 shadow-md">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-olive-400 font-medium">{label}</span>
        <div className={`w-8 h-8 rounded-lg bg-olive-700 flex items-center justify-center ${iconColor}`}>
          <i className={`fa-solid ${icon} text-sm`}></i>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white">{value}</h3>
      <p className={`text-[10px] ${noteColor} mt-1`}>
        <i className={`fa-solid ${noteIcon}`}></i> {note}
      </p>
    </div>
  );
}
