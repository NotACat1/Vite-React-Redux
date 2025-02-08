import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/store';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home/Home';
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

export default App;
