'use client';
import useSwr, { Fetcher } from 'swr';
import axios from 'axios';
import { Datum } from 'interfaces/interfaces';
import Loading from '@/components/loading';
import SectionTitle from '@/components/SectionTitle';
import Header from '@/components/Header';
import Card from '@/components/Card';

type Props = {
  params: {
    text: string;
  };
};

type AnimeData = {
  data: Datum[];
};
const SearchPage = ({ params }: Props) => {
  const fetcher: Fetcher<AnimeData> = (url: string) =>
    axios.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/anime?q=${params.text.replace(
      '%20',
      ' ',
    )}&type=tv`,
    fetcher,
  );
  if (isLoading) return <Loading />;

  return (
    <div>
      <Header />
      <SectionTitle
        title={`Search Results For '${params.text.replace('%20', ' ')}'`}
      />
      <div className="mx-4 mb-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data?.data.slice(0, 12).map((episode) => {
          return <Card episode={episode} key={episode.mal_id} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
