import { ConfigMovie } from '../configs/movie';

export default function MovieCard({ movie }: { movie: ConfigMovie }) {
  console.log(movie);

  return <li key={movie.id}>{movie.title}</li>;
}
