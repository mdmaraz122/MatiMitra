import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import NotificationModal from '../components/common/NotificationModal.jsx';

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const [message, setMessage] = useState(null);

  const showNotification = useCallback((text) => setMessage(text), []);
  const closeNotification = useCallback(() => setMessage(null), []);

  const value = useMemo(() => ({ showNotification }), [showNotification]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationModal message={message} onClose={closeNotification} />
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error('useNotification must be used within NotificationProvider');
  return ctx;
}
