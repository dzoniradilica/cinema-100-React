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

      <div className="row"></div>
      <div className="row"></div>
    </>
  );
}
