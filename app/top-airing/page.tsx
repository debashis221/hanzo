import makeRequests from '@/lib/request';
import { SectionTitle, Card } from 'components';
import { Datum } from 'interfaces/interfaces';
import Image from 'next/image';
const TopAiring = async () => {
  let pageNumber = 1;
  const topAiring = await makeRequests.getTopAiring({
    filter: 'airing',
    page: pageNumber,
  });

  const nextPage = async () => {
    if (pageNumber !== topAiring.pagination.items.total) {
      pageNumber += 1;
    }
  };

  return (
    <div className="flex">
      <div>
        <SectionTitle title="Top Airing Anime" />
        <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
          {topAiring.data.map((episode: Datum) => {
            return <Card episode={episode} key={episode.mal_id} />;
          })}
        </div>
        <div className="flex items-center justify-center py-5 px-5">
          <button className="border-black btn-primary btn mr-5 border">
            Previous
          </button>
          <button
            className="border-black btn-primary btn border"
            // onClick={() => nextPage()}
          >
            Next
          </button>
        </div>
      </div>
      <div className="border-black mt-[90px] hidden min-h-[200px] rounded-2.5xl border bg-jacarta-700 p-[0.9rem] text-center transition-shadow hover:shadow-lg lg:block">
        <h4 className="text-lg">Advertisement</h4>
        <Image
          src={
            'https://i0.wp.com/salifex.com/wp-content/uploads/2019/02/heinz_ketchup_2.jpg?fit=660%2C900&ssl=1'
          }
          className="rounded-xl"
          width={660}
          height={900}
          alt="advertisement"
        />
      </div>
    </div>
  );
};

export default TopAiring;
