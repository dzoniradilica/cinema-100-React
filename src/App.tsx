import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';

import './App.css';
import HomePage, { loader as moviesLoader } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: moviesLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
