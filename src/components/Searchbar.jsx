import { AiOutlineHome } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';

export default function Searchbar() {
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
