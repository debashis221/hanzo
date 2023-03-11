'use client';
import { Datum } from 'interfaces/interfaces';
import { Card, Header, Loading, SectionTitle, SwiperSlider } from 'components';
import axios from 'axios';
import useSwr from 'swr';

export default function Page() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data: topAiring, isLoading } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/top/anime?filter=airing&page=1`,
    fetcher,
  );
  const { data: popularAnime } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/top/anime?filter=bypopularity&page=1`,
    fetcher,
  );
  const { data: favouriteAnime } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/top/anime?filter=favorite&page=1`,
    fetcher,
  );

  if (isLoading) return <Loading />;
  return (
    <>
      <Header />
      <main className="flex flex-col overflow-x-hidden">
        <SwiperSlider data={favouriteAnime} />
        <SectionTitle title="Top Airing Anime" href="/top-airing" />
        <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {topAiring?.data.slice(0, 12).map((episode: Datum) => {
            return <Card episode={episode} key={episode.mal_id} />;
          })}
        </div>
        <SectionTitle title="Popular Anime" href="/popular" />
        <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {popularAnime?.data.slice(0, 12).map((episode: Datum) => {
            return <Card episode={episode} key={episode.mal_id} />;
          })}
        </div>
      </main>
    </>
  );
}
