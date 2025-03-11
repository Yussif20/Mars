import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout, Home, ErrorPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/error', element: <ErrorPage /> },
      { path: '/*', element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
