'use client';
import axios from 'axios';
import { Datum, TopAnime } from 'interfaces/interfaces';
import Image from 'next/image';
import useSwr, { Fetcher } from 'swr';

interface Props {
  params: {
    id: number;
  };
}
interface AnimeData {
  data: Datum;
}
const Anime = ({ params }: Props) => {
  const fetcher: Fetcher<AnimeData> = (url: string) =>
    axios.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/anime/${params.id}/full`,
    fetcher,
  );
  if (isLoading) return <>Loading</>;
  if (!data) return null;

  return (
    <div className="flex flex-col lg:flex items-center justify-center">
      <div className="border-black mt-8 lg:ml-8 flex max-h-[320px] min-h-[200px] max-w-[40vw] flex-col  rounded-2.5xl border bg-jacarta-700 p-[0.85rem] transition-shadow hover:shadow-lg lg:w-[15vw]">
        <Image
          src={data?.data.images.webp.large_image_url}
          alt={data?.data.title}
          width={330}
          height={330}
          className="max-h-[200px] min-h-[200px] rounded-[0.625rem] lg:max-h-[300px] lg:min-h-[250px]"
          loading="lazy"
        />
      </div>
      <div className="lg:ml-8 mt-8 flex w-[55vw] flex-col items-start justify-start text-start">
        <h2 className="text-4xl font-bold text-jacarta-700">
          {data?.data.title}
        </h2>
      </div>
      <div className="mt-8 flex flex-col items-start justify-start text-start">
        <ul>
          <li className="text-md flex font-bold text-white">
            Japanese:{' '}
            <span className="text-sm font-normal">
              {data.data.title_japanese}
            </span>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Anime;
