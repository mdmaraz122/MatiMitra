import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const STORAGE_KEY = 'matimitra_user';

const AuthContext = createContext(null);

function readStoredUser() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

/**
 * Client-side demo session only: no backend, no real credential check.
 * Only { name, email, role } is persisted - the password is never stored.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);
  const [modal, setModal] = useState({ isOpen: false, mode: 'signin' });

  const login = useCallback((nextUser) => {
    setUser(nextUser);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    } catch {
      /* storage unavailable - session lasts until reload */
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const openAuthModal = useCallback((mode) => setModal({ isOpen: true, mode }), []);
  const closeAuthModal = useCallback(() => setModal((m) => ({ ...m, isOpen: false })), []);
  const setAuthMode = useCallback((mode) => setModal((m) => ({ ...m, mode })), []);

  const value = useMemo(
    () => ({ user, login, logout, modal, openAuthModal, closeAuthModal, setAuthMode }),
    [user, login, logout, modal, openAuthModal, closeAuthModal, setAuthMode],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
