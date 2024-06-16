import { ChangeEvent } from 'react';
import { useLocation } from 'react-router';

import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { RiBookMarkedLine } from 'react-icons/ri';

export default function Searchbar({
  genres,
  onSearch,
  onSelect,
}: {
  genres: string[];
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  const { pathname } = useLocation();

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
          fill={pathname === 'bookmark' ? 'red' : 'white'}
        />
        {pathname === '/' ? (
          <AiFillHome className="icon" fill="red" />
        ) : (
          <AiOutlineHome className="icon" />
        )}
      </div>
    </div>
  );
}
