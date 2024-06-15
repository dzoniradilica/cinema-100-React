import { useRef } from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';

export default function Searchbar({ genres }: { genres: string[] }) {
  const movieName = useRef<HTMLInputElement>(null);

  console.log(movieName.current?.value);

  return (
    <div className="searchbar">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        ref={movieName}
      />
      <button>Search</button>

      <div className="icons-wrapper">
        <select>
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
