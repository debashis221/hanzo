import Image from 'next/image';
import Link from 'next/link';
import { Datum, Entry } from '../interfaces/interfaces';

interface Episode {
  episode: Datum | Entry;
}
const Card: React.FC<Episode> = ({ episode }) => {
  return (
    <Link href={`/anime/${episode.mal_id}`}>
      <div className="border-black block max-h-[320px] min-h-[200px] rounded-2.5xl border bg-jacarta-700 p-[1.1875rem] transition-shadow hover:shadow-lg">
        <Image
          src={episode.images.webp.large_image_url}
          alt={episode.title}
          width={330}
          height={330}
          className="max-h-[180px] min-h-[180px] rounded-[0.625rem] lg:max-h-[250px] lg:min-h-[250px]"
          loading="lazy"
        />

        <div className="mt-4 mb-2 flex items-start justify-start">
          <h2 className="font-display text-base line-clamp-1 hover:text-accent">
            {episode.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
