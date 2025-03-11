import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import { Layout, Home, ErrorPage, Contact } from './pages';
import { About } from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about-us', element: <About /> },
      { path: '/error', element: <ErrorPage /> },
      { path: '/*', element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
