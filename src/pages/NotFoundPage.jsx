import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
      <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-xl">
        <i className="fa-solid fa-triangle-exclamation"></i>
      </div>
      <h2 className="text-xl font-bold text-white">Page not found</h2>
      <p className="text-xs text-olive-400">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
      >
        Back to Overview
      </Link>
    </div>
  );
}
