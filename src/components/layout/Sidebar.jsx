import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', label: 'Overview & Summary', icon: 'fa-house-chimney', end: true },
  { to: '/dashboard', label: 'Farm Dashboard', icon: 'fa-chart-pie' },
  { to: '/fields', label: 'Fields & Boundaries', icon: 'fa-map-location-dot' },
  { to: '/live-map', label: 'Live Field Location', icon: 'fa-satellite', live: true },
  { to: '/analytics', label: 'Telemetry Analytics', icon: 'fa-chart-line' },
  { to: '/settings', label: 'System Settings', icon: 'fa-sliders' },
];

const BASE = 'w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all';
const ACTIVE = 'bg-olive-700 text-white shadow-md shadow-olive-900/40';
const IDLE = 'text-olive-300 hover:bg-olive-700/60';

export default function Sidebar() {
  return (
    <aside className="w-20 lg:w-64 bg-olive-800/90 border-r border-olive-700 flex flex-col justify-between shrink-0 transition-all duration-300">
      <nav className="p-3 space-y-1.5 overflow-y-auto">
        <p className="text-[10px] font-semibold text-olive-400 uppercase tracking-wider px-3 hidden lg:block mb-2">
          Workspace
        </p>

        {NAV_ITEMS.map(({ to, label, icon, end, live }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `${BASE} ${isActive ? ACTIVE : IDLE}`}
          >
            <i className={`fa-solid ${icon} text-base w-6 text-center ${live ? 'text-emerald-400' : ''}`}></i>
            <span className={`hidden lg:inline ${live ? 'font-semibold' : ''}`}>{label}</span>
            {live && (
              <span className="ml-auto hidden lg:inline px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                LIVE
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-olive-700/60">
        <div className="p-3 rounded-xl bg-olive-900/80 border border-olive-700/60 hidden lg:block">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Gateway Active
            </span>
            <span className="text-[10px] text-olive-400">99.8%</span>
          </div>
          <p className="text-[10px] text-olive-400 mb-2">LoRaWAN Mesh nodes online: 24/24</p>
          <div className="w-full bg-olive-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '98%' }}></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
