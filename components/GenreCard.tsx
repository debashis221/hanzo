import { Genre } from 'interfaces/interfaces';
import Link from 'next/link';

const GenreCard = ({ data }: { data: Genre }) => {
  return (
    <Link className="indicator" href={data.url}>
      <span className="badge-secondary badge indicator-item">{data.count}</span>
      <div className="w-100 card min-w-[18vw] min-h-[20vh] bg-primary shadow-xl">
        <div className="card-body place-items-center justify-center">
          <h2 className="card-title text-white">{data.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default GenreCard;
