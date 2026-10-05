import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { AuthProvider, useAuth } from '../context/AuthContext.jsx';
import { NotificationProvider } from '../context/NotificationContext.jsx';
import Header from '../components/layout/Header.jsx';
import Sidebar from '../components/layout/Sidebar.jsx';
import AuthModal from '../components/auth/AuthModal.jsx';

function Shell() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [fieldQuery, setFieldQuery] = useState('');

  // Original behaviour: a returning signed-in user lands on the Live Map on first load.
  useEffect(() => {
    if (user && pathname === '/') navigate('/live-map', { replace: true });
  }, []);

  return (
    <>
      <Header query={fieldQuery} onQueryChange={setFieldQuery} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden relative bg-olive-900 flex flex-col">
          <Outlet context={{ fieldQuery, setFieldQuery }} />
        </main>
      </div>
      <AuthModal />
    </>
  );
}

export default function AppLayout() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <Shell />
      </AuthProvider>
    </NotificationProvider>
  );
}
