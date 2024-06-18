import { StarFill } from 'react-bootstrap-icons';

import { ConfigMovie } from '../../configs/movie';

export default function MovieHeader({ movie }: { movie: ConfigMovie }) {
  return (
    <div className="row">
      <div className="col-md-6 single-movie-title">
        <h3>{movie.title}</h3>
        <p>({movie.year})</p>
      </div>

      <div className="col-md-6 single-movie-rank">
        <div className="imdb-rating">
          <h4>Imdb rating</h4>
          <p>
            {movie.rating}/<span className="ten">10</span>
            <StarFill className="star" />
          </p>
        </div>

        <div className="rank">
          <h4>Rank</h4>
          <p>
            {movie.rank}/<span className="hundred">100</span>
          </p>
        </div>
      </div>
    </div>
  );
}
