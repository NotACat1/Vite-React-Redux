import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/index';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home';
import CounterPage from '@pages/CounterPage/CounterPage';
import UserPage from '@pages/UserPage/UserPage';
import NotFound from '@pages/NotFound/NotFound';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'counter', element: <CounterPage /> },
      { path: 'user', element: <UserPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const App: React.FC = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

createRoot(document.getElementById('root')!).render(<App />);

export default App;
