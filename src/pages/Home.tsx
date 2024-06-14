import { useLoaderData } from 'react-router';

import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';

import { ConfigMovie } from '../configs/movie';

export default function HomePage() {
  const movies = useLoaderData() as ConfigMovie[];
  const genres = new Set([...movies.map(movie => movie.genre)]);

  console.log(genres);

  return (
    <div className="home-wrapper">
      <Searchbar genre={['']} />
      <Movies movies={movies} />
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
