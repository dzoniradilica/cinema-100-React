import { ConfigMovie } from '../../configs/movie';

export default function MovieBody({ movie }: { movie: ConfigMovie }) {
  return (
    <div className="row">
      <div className="col-md-4 movie-image">
        <img src={movie.image} alt={movie.title} />
      </div>

      <div className="col-md-8 movie-video">
        <iframe src={movie.trailer}></iframe>
      </div>
    </div>
  );
}
