import { Link } from 'react-router-dom';

import { StarFill } from 'react-bootstrap-icons';

import { ConfigMovie } from '../configs/movie';

export default function MovieCard({ movie }: { movie: ConfigMovie }) {
  return (
    <div className="col-md-3" key={movie.id}>
      <li className="movie-card">
        <Link to={movie.id}>
          <img src={movie.image} alt={movie.title} />
        </Link>

        <h3 className="movie-title">{movie.title}</h3>

        <div className="movie-info">
          <span className="year">{movie.year}</span>
          <span className="rating">
            <StarFill className="star" /> {movie.rating}
          </span>
          <span className="genre">
            {movie.genre.length === 1
              ? movie.genre
              : movie.genre.map((mg, index) => {
                  return (
                    <span key={index} className="genre">
                      {mg}
                    </span>
                  );
                })}
          </span>
        </div>
      </li>
    </div>
  );
}
