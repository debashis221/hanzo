'use client';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Loading from '@/components/loading';
import axios from 'axios';
import { Datum, RecommendedData } from 'interfaces/interfaces';
import Image from 'next/image';
import useSwr, { Fetcher } from 'swr';

type Props = {
  params: {
    id: number;
  };
};
type AnimeData = {
  data: Datum;
};
type RecommendedType = {
  data: RecommendedData[];
};

const Anime = ({ params }: Props) => {
  const fetcher: Fetcher<AnimeData> = (url: string) =>
    axios.get(url).then((res) => res.data);
  const recommendedFetcher: Fetcher<RecommendedType> = (url: string) =>
    axios.get(url).then((res) => res.data);

  const { data, isLoading, error } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/anime/${params.id}/full`,
    fetcher,
  );
  const { data: recomendedData } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/anime/${params.id}/recommendations`,
    recommendedFetcher,
  );

  if (isLoading) return <Loading />;
  if (!data) return null;

  return (
    <>
      <Header />
      <div className="mx-5 grid items-center justify-between gap-5 lg:flex my-5">
        <div className="border-black w-[40vw] min-w-[15vw] rounded-2.5xl border bg-jacarta-700 p-[0.85rem] transition-shadow hover:shadow-lg lg:w-[15vw]">
          <Image
            src={data?.data?.images.webp.large_image_url}
            alt={data?.data.title}
            width={330}
            height={330}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-start justify-start text-start lg:mx-4">
          <h2 className="text-4xl font-bold text-jacarta-700">
            {data?.data.title}
          </h2>
          <div className="flex items-center justify-center">
            <h2 className="text-base font-bold text-jacarta-700">
              {data?.data.type}
            </h2>
            <span className="mx-2 text-2xl font-bold text-jacarta-700">.</span>
            <h2 className="text-base font-bold text-jacarta-700">
              EP {data?.data.episodes}
            </h2>
            <span className="mx-2 text-2xl font-bold text-jacarta-700">.</span>
            <h2 className="text-base font-bold text-jacarta-700">
              {data?.data.duration}
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="btn-primary btn my-3 rounded-full">
              Watch Now
            </button>
            <button className="btn-primary btn my-3 rounded-full">
              Share Now
            </button>
          </div>

          <h2 className="text-white">
            {data.data.synopsis.slice(0,410)}...
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start px-5 text-start lg:mx-4"></div>
        <div className="flex flex-col items-start justify-start px-5 text-start lg:mx-4"></div>
        {/* Details */}
        <div className="flex min-w-[20vw] flex-col justify-start rounded-md bg-primary bg-opacity-30 bg-clip-padding px-5 text-start backdrop-blur-lg backdrop-filter lg:w-[20vw]">
          <ul className="py-2">
            <li className="text-md flex font-bold text-white">
              Japanese:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.title_japanese}
              </span>
            </li>
            <li className="text-md flex font-bold text-white">
              Aired:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.aired.string}
              </span>
            </li>
            <li className="text-md flex font-bold text-white">
              Duration:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.duration}
              </span>
            </li>
            <li className="text-md flex font-bold text-white">
              Premiered:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.season}
              </span>
            </li>
            <li className="text-md flex font-bold text-white">
              Status:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.status}
              </span>
            </li>
            <li className="text-md flex font-bold text-white">
              Score:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.score}
              </span>
            </li>
            <li className="text-md flex font-bold text-white">
              Scored By:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.scored_by}
              </span>
            </li>
            <li className="text-md flex font-bold text-white">
              Genres: &nbsp;
              {data?.data?.genres?.splice(0, 2).map((genres) => {
                return (
                  <div className="badge-primary badge mx-1" key={genres.mal_id}>
                    {genres.name}
                  </div>
                );
              })}
            </li>
            <li className="text-md flex font-bold text-white">
              Studios:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.studios.map((data) => {
                  return (
                    <span className="text-md" key={data.mal_id}>
                      {data.name}
                    </span>
                  );
                })}
              </span>
            </li>
            <li className="text-md flex font-bold text-white">
              Producers:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.producers.splice(0, 2).map((data) => {
                  return (
                    <span className="text-md mx-1" key={data.mal_id}>
                      {data.name}
                    </span>
                  );
                })}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-5 my-5">
        <h2 className="text-bold text-3xl font-bold text-primary">
          Recommended For You
        </h2>
        <div className="my-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {recomendedData?.data?.slice(0, 12).map((item) => {
            return <Card episode={item.entry} key={item.entry.mal_id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Anime;
