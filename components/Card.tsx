import { RecentEpisode } from 'interfaces/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface Episode {
  episode: RecentEpisode;
}
const Card: React.FC<Episode> = ({ episode }) => {
  return (
    <Link href={`/anime/${episode.episodeId}`}>
      <div className="block min-h-[200px] rounded-2.5xl border border-jacarta-700 bg-jacarta-700 p-[1.1875rem] transition-shadow hover:shadow-lg">
        <Image
          src={episode.animeImg}
          alt={episode.animeTitle}
          width={330}
          height={330}
          className="max-h-30 rounded-[0.625rem]"
          loading="lazy"
        />

        <div className="mt-4 mb-2 flex items-start justify-start">
          <h2 className="font-display text-base text-white line-clamp-1 hover:text-accent">
            {episode.animeTitle}
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <span className="badge-primary badge indicator-item">
            {episode.subOrDub}
          </span>
          <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
            <span data-tippy-content="ETH">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 1920 1920"
                xmlSpace="preserve"
                className="h-4 w-4"
              >
                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                <path
                  fill="#62688F"
                  d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                />
                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
              </svg>
            </span>

            <span className="text-sm font-medium tracking-tight text-green">
              EP {episode.episodeNum}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
