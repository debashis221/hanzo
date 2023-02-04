import { Datum } from 'interfaces/interfaces';
import { Card, SectionTitle } from 'components';
import { Anime } from '@/lib/api';

export default async function Page() {
  const topAiring = await Anime.getTopAiring({
    filter: 'airing',
    page: 1,
  });
  const popularAnime = await Anime.getPopularAnime({
    filter: 'bypopularity',
    page: 1,
  });
  if (!topAiring) return null;
  return (
    <div className="flex flex-col">
      {/* Recent Episode */}
      {/* <SectionTitle title="Latest Episodes" />
      <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
        {recentEpisode.results.slice(0, 10).map((episode: Result) => {
          return <Card episode={episode} key={episode.id} />;
        })}
      </div> */}
      <SectionTitle title="Top Airing Anime" href="/top-airing" />
      <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {topAiring.data.slice(0, 12).map((episode: Datum) => {
          return <Card episode={episode} key={episode.mal_id} />;
        })}
      </div>
      <SectionTitle title="Popular Anime" href="/popular" />
      <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {popularAnime.data.slice(0, 12).map((episode: Datum) => {
          return <Card episode={episode} key={episode.mal_id} />;
        })}
      </div>
    </div>
  );
}
