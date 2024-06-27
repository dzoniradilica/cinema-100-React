import { useContext } from 'react';

import MovieCard from './MovieCard';

import { ConfigMovie } from '../configs/movie';

import { MoviesContext } from '../store/moviesStore';

export default function ShownMovies({
  movies,
  start,
  end,
}: {
  movies: ConfigMovie[];
  start: number;
  end: number;
}) {
  const { onBookmark, bookmarked } = useContext(MoviesContext);

  return movies.slice(start, end).map(movie => {
    return (
      <>
        <MovieCard
          key={movie.id}
          movie={movie}
          onBookmark={onBookmark}
          bookmarked={bookmarked!}
        />
      </>
    );
  });
}
