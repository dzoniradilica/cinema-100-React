import { useState, useContext } from 'react';

import searchMovie from '../utils/searchMovie';

// import MovieCard from './MovieCard';
import Pagination from './Pagination';

import { MoviesContext } from '../store/moviesStore';

import { ConfigMovie } from '../configs/movie';
import { PaginationConfig } from '../configs/pagination';
import ShownMovies from './ShownMovies';

export default function Movies({ movies }: { movies: ConfigMovie[] }) {
  const {
    movieName,
    location,
    genre: selectedGenre,
    bookmarked,
    // onBookmark,
  } = useContext(MoviesContext);

  const [pagination, setPagination] = useState<PaginationConfig>({
    currentPage: 1,
    moviesPerPage: 12,
  });

  const start = (pagination.currentPage - 1) * pagination.moviesPerPage;
  const end = pagination.currentPage * pagination.moviesPerPage;

  const searchedMovies = searchMovie(
    movies,
    movieName,
    selectedGenre,
    pagination
  );
  const bookmarkedMovies = searchMovie(
    bookmarked!,
    movieName,
    selectedGenre,
    pagination
  );

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
          {location && (
            <ShownMovies movies={searchedMovies} start={start} end={end} />
          )}

          {searchedMovies.length === 0 && (
            <p className="noMovie">No movies found!</p>
          )}

          {!location && (
            <ShownMovies movies={bookmarkedMovies} start={start} end={end} />
          )}

          {bookmarkedMovies.length === 0 && (
            <p className="noMovie">No bookmarked movies!</p>
          )}
        </div>
      </ul>

      <Pagination
        length={location ? searchedMovies.length : bookmarkedMovies.length}
        currentPage={pagination.currentPage}
        moviesPerPage={pagination.moviesPerPage}
        onPagination={handlePagination}
      />
    </section>
  );
}
