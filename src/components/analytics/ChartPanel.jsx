export default function ChartPanel({ title, children }) {
  return (
    <div className="p-6 rounded-2xl bg-olive-800 border border-olive-700">
      <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
      <div className="h-64 relative">{children}</div>
    </div>
  );
}
