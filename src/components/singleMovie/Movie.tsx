import MovieHeader from './MovieHeader';

import { ConfigMovie } from '../../configs/movie';

export default function Movie({ movie }: { movie: ConfigMovie }) {
  return <MovieHeader movie={movie} />;
}
