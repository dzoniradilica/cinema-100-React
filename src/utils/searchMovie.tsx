import { ConfigMovie } from '../configs/movie';
import { PaginationConfig } from '../configs/pagination';

export default function searchMovie(
  movies: ConfigMovie[],
  movieName: string,
  selectedGenre: string,
  pagination: PaginationConfig
) {
  return movies.filter(movie => {
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
}
