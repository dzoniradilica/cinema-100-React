import { useLoaderData } from 'react-router';

export default function Movies() {
  const movies = useLoaderData();

  console.log('radiiii');

  return (
    <section className="movies">
      {movies.map(movie => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </section>
  );
}
