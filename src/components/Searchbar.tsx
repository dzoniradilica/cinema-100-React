import { ChangeEvent } from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';

export default function Searchbar({
  genres,
  onSearch,
  onSelect,
}: {
  genres: string[];
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
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

        <CiBookmark className="icon" />
        <AiOutlineHome className="icon" />
      </div>
    </div>
  );
}
