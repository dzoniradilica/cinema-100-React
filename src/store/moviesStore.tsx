import { createContext, useState, ChangeEvent, ReactNode } from 'react';

import { ConfigMovie } from '../configs/movie';

type MoviesContextObj = {
  movieName: string;
  genre: string;
  location: boolean;
  bookmarked: ConfigMovie[] | undefined;
  onLocation: () => void;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onGenre: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBookmark: (id: string) => void;
};

export const MoviesContext = createContext<MoviesContextObj>({
  movieName: '',
  genre: '',
  location: true,
  bookmarked: [],
  onLocation: () => {},
  onSearch: () => {},
  onGenre: () => {},
  onBookmark: () => {},
});

export const MoviesContextProvider: React.FC<{
  children: ReactNode;
  movies: ConfigMovie[];
}> = props => {
  const [movieName, setMovieName] = useState('');
  const [genre, setGenre] = useState('');
  const [location, setLocation] = useState(true);
  const [bookmarked, setBookmarked] = useState<ConfigMovie[] | undefined>([]);

  function handleLocation() {
    setLocation(prevLocation => !prevLocation);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setMovieName(e.target.value);
  }

  function handleGenre(e: ChangeEvent<HTMLSelectElement>) {
    setGenre(e.target.value);
  }

  function handleBookmark(id: string) {
    setBookmarked(prevBookmark => {
      const newBookmark = props.movies.find(movie => movie.id === id)!;

      if (!prevBookmark!.includes(newBookmark)) {
        return [...prevBookmark!, newBookmark];
      } else {
        return prevBookmark?.filter(bookmark => bookmark.id !== id);
      }
    });
  }

  const ctxValue: MoviesContextObj = {
    movieName,
    genre,
    location,
    bookmarked,
    onLocation: handleLocation,
    onSearch: handleSearch,
    onGenre: handleGenre,
    onBookmark: handleBookmark,
  };

  return (
    <MoviesContext.Provider value={ctxValue}>
      {props.children}
    </MoviesContext.Provider>
  );
};
