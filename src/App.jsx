import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import {
  Layout,
  Home,
  ErrorPage,
  Contact,
  Plans,
  CountryPage,
  CompatibleDevices,
} from './pages';
import { About } from './pages/About';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about-us', element: <About /> },
      { path: 'data-plans', element: <Plans /> },
      { path: 'compatible-devices', element: <CompatibleDevices /> },
      { path: 'country/:country', element: <CountryPage /> },
      { path: 'error', element: <ErrorPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };
    const unsubscribe = router.subscribe(() => {
      handleScrollToTop();
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
