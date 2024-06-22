import { Link } from 'react-router-dom';

import {
  StarFill,
  Search,
  Bookmark,
  BookmarkCheck,
  // BookmarkCheck,
} from 'react-bootstrap-icons';

import { ConfigMovie } from '../configs/movie';

export default function MovieCard({
  movie,
  bookmarked,
  keyValue,
  onBookmark,
}: {
  movie: ConfigMovie;
  bookmarked: ConfigMovie[];
  keyValue: string;
  onBookmark: (id: string) => void;
}) {
  console.log(keyValue);

  return (
    <div className="col-md-3" key={keyValue}>
      <li className="movie-card">
        <div className="image-wrapper" key={keyValue}>
          <img src={movie.image} alt={movie.title} />
          <Link to={movie.id}>
            <Search className="search-icon" />
          </Link>

          <Bookmark
            className="bookmark-icon"
            onClick={() => onBookmark(movie.id)}
          />

          {bookmarked.map(bm => {
            if (bm.id === movie.id) {
              return (
                <BookmarkCheck
                  className="bookmark-icon"
                  onClick={() => onBookmark(movie.id)}
                />
              );
            }
          })}
        </div>

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
