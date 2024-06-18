import { ConfigMovie } from '../../configs/movie';

export default function MovieFooter({ movie }: { movie: ConfigMovie }) {
  return (
    <>
      <div className="row genres-desc">
        <p>
          {movie.genre.map((mg, index) => (
            <span key={index}>{mg}</span>
          ))}
        </p>
        <p className="desc">{movie.description}</p>
      </div>

      <div className="row director">
        <h4>Director</h4>
        <p>{movie.director}</p>
      </div>

      <div className="row writers">
        <h4>Writers</h4>
        <p>{movie.writers}</p>
      </div>
    </>
  );
}
