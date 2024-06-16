import { useParams } from 'react-router';

export default function MovieDetail() {
  const params = useParams();

  console.log(params);

  return <div>OP</div>;
}
