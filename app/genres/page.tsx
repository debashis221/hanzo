'use client';
import Header from '@/components/Header';
import GenreCard from '@/components/GenreCard';
import axios from 'axios';
import useSwr, { Fetcher } from 'swr';
import Loading from '@/components/loading';
import { Genre } from 'interfaces/interfaces';
import SectionTitle from '@/components/SectionTitle';

export type GenreProps = {
  data: Genre[];
};
const Genres = () => {
  const genreFetcher: Fetcher<GenreProps> = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, isLoading } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/genres/anime`,
    genreFetcher,
  );
  if (isLoading) return <Loading />;
  return (
    <div>
      <Header />
      <SectionTitle title="Genres" />
      <div className="my-6 mx-5 grid grid-cols-5 gap-4">
        {data?.data.map((item) => {
          return <GenreCard key={item.mal_id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Genres;
