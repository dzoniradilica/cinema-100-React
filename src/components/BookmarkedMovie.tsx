import MovieCard from './MovieCard';

import { ConfigMovie } from '../configs/movie';

export default function BookmarkedMovie({
  movie,
  bookmarked,
  onBookmark,
}: {
  movie: ConfigMovie;
  bookmarked: ConfigMovie[];
  onBookmark: (id: string) => void;
}) {
  return (
    <MovieCard
      movie={movie}
      key={movie.id}
      onBookmark={() => onBookmark(movie.id)}
      bookmarked={bookmarked}
    />
  );
}
