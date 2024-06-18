import MovieHeader from './MovieHeader';

import { ConfigMovie } from '../../configs/movie';
import MovieBody from './MovieBody';
import MovieFooter from './MovieFooter';

export default function Movie({ movie }: { movie: ConfigMovie }) {
  return (
    <div className="container single-movie">
      <MovieHeader movie={movie} />
      <MovieBody movie={movie} />
      <MovieFooter movie={movie} />
    </div>
  );
}
