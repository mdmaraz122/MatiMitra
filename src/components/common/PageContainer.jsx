/** Scrollable page wrapper used by every non-map view. */
export default function PageContainer({ children, maxWidth = 'max-w-6xl' }) {
  return (
    <div className="absolute inset-0 p-6 overflow-y-auto">
      <div className={`${maxWidth} mx-auto space-y-6`}>{children}</div>
    </div>
  );
}
