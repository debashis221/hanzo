'use client';
import axios from 'axios';
import { Datum, Recommended, TopAnime } from 'interfaces/interfaces';
import Image from 'next/image';
import { Fragment } from 'react';
import useSwr, { Fetcher } from 'swr';

interface Props {
  params: {
    id: number;
  };
}
interface AnimeData {
  data: Datum | Recommended;
}
const Anime = ({ params }: Props) => {
  const fetcher: Fetcher<AnimeData> = (url: string) =>
    axios.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/anime/${params.id}/full`,
    fetcher,
  );
  const {data:recomendedData}=useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/anime/${params.id}/recomendations`,
    fetcher,
  );
  if (isLoading) return <>Loading</>;
  if (!data) return null;

  return (
    <Fragment>
      <div className="grid  gap-5 lg:flex">
        <div className="border-black mx-5  flex max-h-[320px] min-h-[200px] max-w-[40vw] flex-col rounded-2.5xl  border bg-jacarta-700 p-[0.85rem] transition-shadow hover:shadow-lg lg:ml-8 lg:w-[15vw]">
          <Image
            src={data?.data?.images.webp.large_image_url}
            alt={data?.data.title}
            width={330}
            height={330}
            className="max-h-[200px] min-h-[200px] rounded-[0.625rem] lg:max-h-[300px] lg:min-h-[250px]"
            loading="lazy"
          />
        </div>
        <div className="mx-5  flex w-[55vw] flex-col items-start justify-start text-start">
          <h2 className="text-4xl font-bold text-jacarta-700">
            {data?.data.title}
          </h2>
        </div>
        {/* Details */}
        <div className=" flex flex-col items-end justify-start rounded-md bg-primary bg-opacity-30 bg-clip-padding px-5 text-start backdrop-blur-lg backdrop-filter">
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
              {data.data.genres &&
                data.data.genres.map((genres) => {
                  return (
                    <div className="badge-primary badge mx-1">
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
                  return <span className="text-md">{data.name}</span>;
                })}
              </span>
            </li>
            <li className="text-md flex font-bold text-white">
              Producers:
              <span className="text-sm font-normal">
                &nbsp;
                {data.data.producers.splice(0, 2).map((data) => {
                  return <span className="text-md mx-1">{data.name}</span>;
                })}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-8 my-5 flex">
        <h2 className="text-bold text-3xl text-primary font-bold">Recommended For You</h2>
        {recomendedData?.data.}
      </div>
    </Fragment>
  );
};

export default Anime;
