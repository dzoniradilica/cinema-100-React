import Movies from '../components/Movies';
import Searchbar from '../components/Searchbar';

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Searchbar />
      <Movies />
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
