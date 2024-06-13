import { useLoaderData } from 'react-router';

import MovieCard from './MovieCard';

import { ConfigMovie } from '../configs/movie';

export default function Movies() {
  const movies = useLoaderData() as ConfigMovie[];

  return (
    <section className="movies">
      <ul>
        {movies.map(movie => {
          return <MovieCard movie={movie} />;
        })}
      </ul>
    </section>
  );
}
