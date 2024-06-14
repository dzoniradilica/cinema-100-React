// import { useLoaderData } from 'react-router';

// import { ConfigMovie } from '../configs/movie';

import { AiOutlineHome } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';

export default function Searchbar({ genre }: { genre: string[] }) {
  console.log(genre);

  return (
    <div className="searchbar">
      <input className="search-input" type="text" placeholder="Search" />

      <div className="icons-wrapper">
        <select>
          <option value="all">All</option>
        </select>

        <CiBookmark className="icon" />
        <AiOutlineHome className="icon" />
      </div>
    </div>
  );
}
