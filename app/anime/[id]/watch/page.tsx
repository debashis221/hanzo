'use client';
import { Header, Loading, NextEpisodes, WatchVideo } from '@/components/index';
import axios from 'axios';
import useSwr, { Fetcher } from 'swr';
import { Datum } from 'interfaces/interfaces';

type AnimeData = {
  data: Datum;
};
const Watch = ({ params }: { params: { id: number } }) => {
  const fetcher: Fetcher = (url: string) =>
    axios.get(url).then((res) => res.data);

  const { data, isLoading, error } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/anime/${params.id}/full`,
    fetcher,
  );
  const { data: animeData } = useSwr(
    `https://api.consumet.org/anime/zoro/${data?.data?.title.toLowerCase()}`,
    fetcher,
  );

  if (isLoading) return <Loading />;
  console.log(animeData);
  return (
    <div>
      <Header />
      <div className="mx-5 my-5 flex justify-between">
        <WatchVideo />
        <NextEpisodes />
      </div>
    </div>
  );
};

export default Watch;
