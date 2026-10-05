import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNotification } from '../../context/NotificationContext.jsx';

const TAB_ACTIVE = 'py-2 text-xs font-semibold rounded-lg bg-olive-700 text-white transition-all shadow';
const TAB_IDLE = 'py-2 text-xs font-semibold rounded-lg text-olive-400 hover:text-white transition-all';
const INPUT =
  'w-full bg-olive-900 text-xs text-olive-300 px-3.5 py-2.5 rounded-xl border border-olive-700 focus:outline-none focus:border-olive-500';

const INITIAL_FORM = { name: '', role: 'Farmer', email: '', password: '' };

export default function AuthModal() {
  const { modal, closeAuthModal, setAuthMode, login } = useAuth();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL_FORM);

  if (!modal.isOpen) return null;

  const isSignup = modal.mode === 'signup';
  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    let name = 'Agri User';
    let role = 'Farmer';

    if (isSignup) {
      name = form.name || 'Registered Farmer';
      role = form.role || 'Farmer';
    } else {
      const localPart = form.email.split('@')[0];
      name = localPart.charAt(0).toUpperCase() + localPart.slice(1);
    }

    login({ name, email: form.email, role });
    setForm(INITIAL_FORM);
    closeAuthModal();
    showNotification(`Welcome back, ${name}! (${role}) session active.`);
    navigate('/live-map');
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div className="bg-olive-800 border border-olive-600 rounded-2xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden">
        <button
          type="button"
          onClick={closeAuthModal}
          className="absolute top-4 right-4 text-olive-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
            <i className="fa-solid fa-seedling text-lg"></i>
          </div>
          <div>
            <h3 id="auth-modal-title" className="text-base font-bold text-white">
              {isSignup ? 'Create MatiMitra Account' : 'Sign In to MatiMitra'}
            </h3>
            <p className="text-xs text-olive-400">Access your agricultural telemetry & fields</p>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-olive-900 p-1 rounded-xl mb-6 border border-olive-700">
          <button type="button" onClick={() => setAuthMode('signin')} className={isSignup ? TAB_IDLE : TAB_ACTIVE}>
            Sign In
          </button>
          <button type="button" onClick={() => setAuthMode('signup')} className={isSignup ? TAB_ACTIVE : TAB_IDLE}>
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div className="space-y-4">
              <div>
                <label htmlFor="authName" className="block text-[11px] font-semibold text-olive-300 mb-1">
                  Full Name
                </label>
                <input
                  id="authName"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="e.g. Rahul Sharma"
                  className={INPUT}
                />
              </div>
              <div>
                <label htmlFor="authRole" className="block text-[11px] font-semibold text-olive-300 mb-1">
                  Select User Role
                </label>
                <select id="authRole" value={form.role} onChange={update('role')} className={INPUT}>
                  <option value="Farmer">Farmer / Landowner</option>
                  <option value="Expert">Agricultural Agronomist / Expert</option>
                  <option value="Admin">System Administrator</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="authEmail" className="block text-[11px] font-semibold text-olive-300 mb-1">
              Email Address
            </label>
            <input
              id="authEmail"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              placeholder="farmer@matimitra.agri"
              className={INPUT}
            />
          </div>

          <div>
            <label htmlFor="authPassword" className="block text-[11px] font-semibold text-olive-300 mb-1">
              Password
            </label>
            <input
              id="authPassword"
              type="password"
              required
              value={form.password}
              onChange={update('password')}
              placeholder="••••••••"
              className={INPUT}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-950/50 mt-2"
          >
            {isSignup ? 'Complete Sign Up' : 'Sign In to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
