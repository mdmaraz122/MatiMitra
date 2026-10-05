import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNotification } from '../../context/NotificationContext.jsx';

export default function Header({ query, onQueryChange }) {
  const { user, logout, openAuthModal } = useAuth();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const [syncing, setSyncing] = useState(false);
  const syncTimer = useRef(null);

  useEffect(() => () => clearTimeout(syncTimer.current), []);

  const handleSync = () => {
    setSyncing(true);
    syncTimer.current = setTimeout(() => {
      setSyncing(false);
      showNotification('LoRaWAN gateway sync completed. All 24 nodes reporting optimal latency.');
    }, 1000);
  };

  const handleSignOut = () => {
    logout();
    navigate('/');
    showNotification('Successfully signed out of MatiMitra session.');
  };

  return (
    <header className="bg-olive-800 border-b border-olive-700 h-16 flex items-center justify-between px-4 lg:px-6 shrink-0 z-30">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-olive-600 to-olive-500 flex items-center justify-center text-white shadow-lg shadow-olive-900/50">
          <i className="fa-solid fa-seedling text-lg"></i>
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-wide text-white flex items-center gap-2">
            MatiMitra
            <span className="text-xs px-2 py-0.5 rounded-full bg-olive-700 text-olive-300 border border-olive-600">
              AgriTech v2.4
            </span>
          </h1>
          <p className="text-xs text-olive-400 hidden sm:block">
            Smart Precision Agriculture & IoT Telemetry
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="relative hidden md:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-olive-400">
            <i className="fa-solid fa-search text-xs"></i>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search fields, sensors, drone..."
            className="bg-olive-900 text-xs text-olive-300 pl-9 pr-4 py-2 rounded-lg border border-olive-700 focus:outline-none focus:border-olive-500 w-64 transition-all"
          />
        </div>

        <button
          type="button"
          onClick={handleSync}
          className="p-2.5 rounded-lg bg-olive-700 hover:bg-olive-600 text-olive-300 transition-colors relative"
          title="Sync IoT Nodes"
        >
          <i className={`fa-solid fa-rotate text-sm ${syncing ? 'fa-spin' : ''}`}></i>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </button>

        <div className="h-6 w-px bg-olive-700"></div>

        <div className="flex items-center space-x-3">
          {user ? (
            <div className="flex items-center space-x-3 bg-olive-900 px-3 py-1.5 rounded-xl border border-olive-700">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/40">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold text-white leading-tight">
                  {user.name || 'Agri User'}
                </p>
                <p className="text-[9px] text-emerald-400 font-medium">{user.role || 'Farmer'}</p>
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                className="ml-2 text-olive-400 hover:text-red-400 transition-colors p-1"
                title="Sign Out"
              >
                <i className="fa-solid fa-power-off text-xs"></i>
              </button>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => openAuthModal('signin')}
                className="px-3.5 py-2 rounded-xl bg-olive-700 hover:bg-olive-600 text-olive-200 text-xs font-semibold transition-all"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => openAuthModal('signup')}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950/40 transition-all"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
