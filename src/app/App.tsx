import { useState, useEffect } from 'react';
import { DesignPage } from './pages/DesignPage';
import { PersonalPage } from './pages/PersonalPage';
import { Catalog } from './pages/Catalog';
import { Edit } from './pages/Edit';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
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