import { useLoaderData } from 'react-router';

export default function Movies() {
  const movies = useLoaderData();

  return (
    <section className="movies">
      {movies.map(movie => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </section>
  );
}
