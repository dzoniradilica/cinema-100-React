import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage, { loader as moviesLoader } from './pages/Home';
import MovieDetail from './pages/MovieDetail';

import './App.css';

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
      {
        path: '/:movieId',
        element: <MovieDetail />,
        loader: ({ params }: { params: string }) => {
          console.log(params);
        },
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
