import { ChangeEvent, useState } from 'react';
import { useLoaderData } from 'react-router';

import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';

import { ConfigMovie } from '../configs/movie';

export default function HomePage() {
  const [movieName, setMovieName] = useState('');
  const [genre, setGenre] = useState('');

  const movies = useLoaderData() as ConfigMovie[];
  const genres = [...new Set(movies.flatMap(movie => movie.genre))];

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
        onSearch={handleSearch}
        onSelect={handleGenre}
      />
      <Movies movies={movies} movieName={movieName} selectedGenre={genre} />
    </div>
  );
}

export async function loader() {
  const res = await fetch('https://65fb1a4614650eb210095a6f.mockapi.io/movies');

  if (!res.ok) {
    console.log('nije dobro');
  } else {
    return res;
  }
}
