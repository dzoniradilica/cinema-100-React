import { ConfigMovie } from '../configs/movie';

export default function MovieCard({ movie }: { movie: ConfigMovie }) {
  return (
    <li key={movie.id} className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3 className="movie-title">{movie.title}</h3>

      <div className="movie-info">
        <span className="year">{movie.year}</span>
        <span className="rating">{movie.rating}</span>
        <span className="genre">{movie.genre}</span>
      </div>
    </li>
  );
}
