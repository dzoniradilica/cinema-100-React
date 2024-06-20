import { useState } from 'react';

import MovieCard from './MovieCard';
import Pagination from './Pagination';
// import BookmarkedMovie from './BookmarkedMovie';

import { ConfigMovie } from '../configs/movie';

export default function Movies({
  movies,
  movieName,
  selectedGenre,
  location,
}: {
  movies: ConfigMovie[];
  movieName: string;
  selectedGenre: string;
  location: boolean;
}) {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    moviesPerPage: 12,
  });

  const start = (pagination.currentPage - 1) * pagination.moviesPerPage;
  const end = pagination.currentPage * pagination.moviesPerPage;

  const searchedMovies = movies.filter(movie => {
    if (movieName && selectedGenre && selectedGenre !== 'all') {
      pagination.currentPage = 1;
      return (
        movie.title.toLowerCase().includes(movieName.toLowerCase()) &&
        movie.genre.includes(selectedGenre)
      );
    }

    if (movieName) {
      pagination.currentPage = 1;
      return movie.title.toLowerCase().includes(movieName.toLowerCase());
    }

    if (selectedGenre && selectedGenre !== 'all') {
      pagination.currentPage = 1;
      return movie.genre.includes(selectedGenre);
    }

    if (selectedGenre === 'all') return movie;

    return movie;
  });

  function handlePagination(pageNumber: number) {
    setPagination(prevPagination => {
      return {
        ...prevPagination,
        currentPage: pageNumber,
      };
    });
  }

  return (
    <section className="movies">
      <ul className="container">
        <div className="row">
          {location &&
            searchedMovies.slice(start, end).map(movie => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}

          {searchedMovies.length === 0 && (
            <p className="noMovie">No movies found!</p>
          )}

          {!location &&
            searchedMovies.slice(start, end).map(movie => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}

          {searchedMovies.length === 0 && (
            <p className="noMovie">No bookmarked movies!</p>
          )}
        </div>
      </ul>

      <Pagination
        length={searchedMovies.length}
        currentPage={pagination.currentPage}
        moviesPerPage={pagination.moviesPerPage}
        onPagination={handlePagination}
      />
    </section>
  );
}
