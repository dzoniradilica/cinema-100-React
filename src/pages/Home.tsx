import { ChangeEvent, useState } from 'react';
import { useLoaderData } from 'react-router';

import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';
import Pagination from '../components/Pagination';

import { ConfigMovie } from '../configs/movie';

export default function HomePage() {
  const movies = useLoaderData() as ConfigMovie[];
  const genres = [...new Set(movies.flatMap(movie => movie.genre))];

  const [movieName, setMovieName] = useState('');
  const [genre, setGenre] = useState('');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    moviesPerPage: 12,
  });

  const start = (pagination.currentPage - 1) * pagination.moviesPerPage;
  const end = pagination.currentPage * pagination.moviesPerPage;

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setMovieName(e.target.value);
  }

  function handleGenre(e: ChangeEvent<HTMLSelectElement>) {
    setGenre(e.target.value);
  }

  function handlePagination(pageNumber: number) {
    setPagination(prevPagination => {
      return {
        ...prevPagination,
        currentPage: pageNumber,
      };
    });
  }

  return (
    <div className="home-wrapper">
      <Searchbar
        genres={genres}
        onSearch={handleSearch}
        onSelect={handleGenre}
      />
      <Movies
        movies={movies.slice(start, end)}
        movieName={movieName}
        selectedGenre={genre}
      />
      <Pagination
        length={movies.length}
        moviesPerPage={pagination.moviesPerPage}
        onPagination={handlePagination}
      />
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
