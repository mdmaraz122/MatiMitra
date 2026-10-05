import { Link } from 'react-router-dom';
import { DASHBOARD_ALERTS } from '../../data/overview.js';

const TONES = {
  warning: {
    box: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    icon: 'fa-triangle-exclamation text-amber-400',
    message: 'text-amber-300/80',
  },
  success: {
    box: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    icon: 'fa-circle-check text-emerald-400',
    message: 'text-emerald-300/80',
  },
};

export default function AlertsPanel() {
  return (
    <div className="p-6 rounded-2xl bg-olive-800 border border-olive-700 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">Active Alerts & Warnings</h3>
        <div className="space-y-3">
          {DASHBOARD_ALERTS.map(({ id, tone, title, message }) => (
            <div
              key={id}
              className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${TONES[tone].box}`}
            >
              <i className={`fa-solid mt-0.5 ${TONES[tone].icon}`}></i>
              <div>
                <p className="font-semibold">{title}</p>
                <p className={`text-[11px] ${TONES[tone].message}`}>{message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/live-map"
        className="block text-center w-full mt-4 py-2.5 rounded-xl bg-olive-700 hover:bg-olive-600 text-white font-medium text-xs transition-colors"
      >
        View Fields on Live Map &rarr;
      </Link>
    </div>
  );
}
