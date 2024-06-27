import { useLoaderData, json } from 'react-router';

import { MoviesContextProvider } from '../store/moviesStore';

import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';

import { ConfigMovie } from '../configs/movie';

export default function HomePage() {
  const movies = useLoaderData() as ConfigMovie[];
  const genres = [...new Set(movies.flatMap(movie => movie.genre))];

  return (
    <MoviesContextProvider movies={movies}>
      <div className="home-wrapper">
        <Searchbar genres={genres} />
        <Movies movies={movies} />
      </div>
    </MoviesContextProvider>
  );
}

export async function loader() {
  const res = await fetch('https://65fb1a4614650eb210095a6f.mockapi.io/movies');

  if (!res.ok) {
    if (!res.ok) {
      throw json({ message: 'Movies data is not fetched!' }, { status: 500 });
    }
  }

  return res;
}
