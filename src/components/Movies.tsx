import { useLoaderData } from 'react-router';

import MovieCard from './MovieCard';

import { ConfigMovie } from '../configs/movie';

export default function Movies() {
  const movies = useLoaderData() as ConfigMovie[];

  return (
    <section className="movies">
      <ul className="container">
        <div className="row">
          {movies.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </ul>
    </section>
  );
}
