import { ChangeEvent, useState } from 'react';
import { useLoaderData, json } from 'react-router';

import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';
import BookmarkedMovie from '../components/BookmarkedMovie';

import { ConfigMovie } from '../configs/movie';

export default function HomePage() {
  const movies = useLoaderData() as ConfigMovie[];
  const genres = [...new Set(movies.flatMap(movie => movie.genre))];

  const [movieName, setMovieName] = useState('');
  const [genre, setGenre] = useState('');
  const [location, setLocation] = useState(true);

  function handleLocation() {
    setLocation(prevLocation => !prevLocation);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setMovieName(e.target.value);
  }

  function handleGenre(e: ChangeEvent<HTMLSelectElement>) {
    setGenre(e.target.value);
  }

  return (
    <div className="home-wrapper">
      <Searchbar
        genres={genres}
        location={location}
        onSearch={handleSearch}
        onSelect={handleGenre}
        onLocation={handleLocation}
      />
      {location && (
        <Movies movies={movies} movieName={movieName} selectedGenre={genre} />
      )}
      {!location && <BookmarkedMovie />}
    </div>
  );
}

export async function loader() {
  const res = await fetch('https://65fb1a4614650eb210095a6f.mockapi.io/movies');

  if (!res.ok) {
    if (!res.ok) {
      throw json({ message: 'Movies data is not fetched!' }, { status: 500 });
    }
  }

  return res;
}
