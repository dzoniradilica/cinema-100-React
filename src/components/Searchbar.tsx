import { ChangeEvent } from 'react';

import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { RiBookMarkedLine } from 'react-icons/ri';

export default function Searchbar({
  genres,
  location,
  onSearch,
  onSelect,
  onLocation,
}: {
  genres: string[];
  location: boolean;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  onLocation: () => void;
}) {
  return (
    <div className="searchbar">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={e => onSearch(e)}
      />

      <div className="icons-wrapper">
        <select onChange={e => onSelect(e)}>
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
