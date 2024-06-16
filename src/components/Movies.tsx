import MovieCard from './MovieCard';

import { ConfigMovie } from '../configs/movie';

export default function Movies({
  movies,
  movieName,
  selectedGenre,
}: {
  movies: ConfigMovie[];
  movieName: string;
  selectedGenre: string;
}) {
  const searchedMovies = movies.filter(movie => {
    if (movieName) {
      return movie.title.toLowerCase().includes(movieName.toLowerCase());
    }

    if (selectedGenre && selectedGenre !== 'all') {
      return movie.genre.includes(selectedGenre);
    }

    if (selectedGenre === 'all') return movie;

    return movie;
  });

  return (
    <section className="movies">
      <ul className="container">
        <div className="row">
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
