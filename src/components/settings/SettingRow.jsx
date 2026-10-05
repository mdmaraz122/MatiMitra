export default function SettingRow({ title, description, divider = true, children }) {
  return (
    <div
      className={`flex items-center justify-between ${divider ? 'pb-4 border-b border-olive-700' : ''}`}
    >
      <div>
        <h4 className="text-xs font-bold text-white">{title}</h4>
        <p className="text-[11px] text-olive-400">{description}</p>
      </div>
      {children}
    </div>
  );
}
