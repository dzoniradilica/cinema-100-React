import { ConfigMovie } from '../configs/movie';

export default function Movie({ movie }: { movie: ConfigMovie }) {
  console.log(movie);

  return (
    <div className="container single-movie">
      <div className="row">
        <div className="col-md-6 single-movie-title">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>

        <div className="col-md-6 single-movie-rank">
          <div className="imdb-rating">
            <h4>Imdb rating</h4>
            <p>{movie.rating}/10</p>
          </div>

          <div className="rank">
            <h4>Rank</h4>
            <p>{movie.imdbid}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
