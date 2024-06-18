import { useLoaderData, json } from 'react-router';

import Movie from '../components/Movie';

import { Params } from '../configs/params';
import { ConfigMovie } from '../configs/movie';

export default function MovieDetail() {
  const movie = useLoaderData() as ConfigMovie;

  return <Movie movie={movie} />;
}

export async function loader({ params }: { params: Params }) {
  const res = await fetch(
    `https://65fb1a4614650eb210095a6f.mockapi.io/movies/${params.movieId}`
  );

  if (!res.ok) {
    throw json({ message: 'Movie data is not fetched!' }, { status: 500 });
  }

  return res;
}
