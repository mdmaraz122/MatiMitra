import { useAuth } from '../../context/AuthContext.jsx';
import agriPattern from '../../assets/agri-pattern.svg';

export default function HeroBanner() {
  const { openAuthModal } = useAuth();

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-r from-olive-800 to-olive-700 border border-olive-600 shadow-xl relative overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${agriPattern})` }}
      ></div>
      <div className="relative z-10 max-w-2xl">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 inline-block mb-3">
          Welcome to MatiMitra
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
          Precision Agriculture & Field Telemetry Hub
        </h2>
        <p className="text-xs lg:text-sm text-olive-300 mb-6 leading-relaxed">
          Monitor real-time soil health, drone IoT navigation, automated irrigation, and crop yield
          forecasts with military-grade precision across all your agricultural sectors.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => openAuthModal('signup')}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-900/40 transition-all flex items-center gap-2"
          >
            <i className="fa-solid fa-user-plus"></i> Get Started (Sign Up)
          </button>
          <button
            type="button"
            onClick={() => openAuthModal('signin')}
            className="px-5 py-2.5 rounded-xl bg-olive-600 hover:bg-olive-500 text-white font-semibold text-xs transition-all flex items-center gap-2"
          >
            <i className="fa-solid fa-right-to-bracket"></i> Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
