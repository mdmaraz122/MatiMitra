export default function NotificationModal({ message, onClose }) {
  if (message === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notification-title"
    >
      <div className="bg-olive-800 border border-olive-600 rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-xl">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div>
          <h3 id="notification-title" className="text-sm font-bold text-white mb-1">
            Notification
          </h3>
          <p className="text-xs text-olive-300">{message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
