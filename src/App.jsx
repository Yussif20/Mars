import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';

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

  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language; // تحديث لغة الصفحة
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'; // تغيير الاتجاه
  }, [i18n.language]);

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}

export default App;
