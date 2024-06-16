import MovieCard from './MovieCard';

import { ConfigMovie } from '../configs/movie';

export default function Movies({
  movies,
  movieName,
}: {
  movies: ConfigMovie[];
  movieName: string;
}) {
  const searchedMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieName.toLowerCase())
  );

  return (
    <section className="movies">
      <ul className="container">
        <div className="row">
          {/* {!movieName &&
            movies.map(movie => {
              return <MovieCard movie={movie} key={movie.id} />;
            })} */}

          {searchedMovies.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}

          {searchedMovies.length === 0 && (
            <p className="noMovie">No movies found!</p>
          )}
        </div>
      </ul>
    </section>
  );
}
