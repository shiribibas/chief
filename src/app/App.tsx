import { useState, useEffect } from 'react';
import { DesignPage } from './pages/DesignPage';
import { PersonalPage } from './pages/PersonalPage';
import { Catalog } from './pages/Catalog';
import { Edit } from './pages/Edit';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

function getRoute() {
  const path = window.location.pathname;
  return BASE ? path.replace(BASE, '') || '/' : path;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(getRoute);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(getRoute());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', BASE + path);
    setCurrentPath(path);
  };

  if (currentPath === '/personal') {
    return <PersonalPage navigate={navigate} />;
  }

  if (currentPath === '/catalog') {
    return <Catalog navigate={navigate} />;
  }

  if (currentPath === '/edit') {
    return <Edit navigate={navigate} />;
  }

  return <DesignPage navigate={navigate} />;
}