import { useContext } from 'react';

import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { RiBookMarkedLine } from 'react-icons/ri';

import { MoviesContext } from '../store/moviesStore';

export default function Searchbar({ genres }: { genres: string[] }) {
  const { location, onSearch, onLocation, onGenre } = useContext(MoviesContext);

  return (
    <div className="searchbar">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={e => onSearch(e)}
      />

      <div className="icons-wrapper">
        <select onChange={e => onGenre(e)}>
          <option value="all">All</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <RiBookMarkedLine
          className="icon"
          fill={!location ? 'red' : 'white'}
          pointerEvents={!location ? 'none' : 'inherited'}
          onClick={onLocation}
        />
        {location ? (
          <AiFillHome
            pointerEvents={location ? 'none' : 'inherited'}
            className="icon"
            fill="red"
          />
        ) : (
          <AiOutlineHome className="icon" onClick={onLocation} />
        )}
      </div>
    </div>
  );
}
