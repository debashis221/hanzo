'use client';

import { Anime } from '@/lib/api';
import { SectionTitle, Card } from 'components';
import { Datum, TopAnime } from 'interfaces/interfaces';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const TopAiring = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [topAiring, setTopAiring] = useState<TopAnime>();
  const getTopAiring = async () => {
    const topAiringData = await Anime.getTopAiring({
      filter: 'airing',
      page: pageNumber,
    });
    setTopAiring(topAiringData);
  };
  useEffect(() => {
    getTopAiring();
    return () => {};
  }, [pageNumber]);

  const nextPage = async () => {
    if (pageNumber !== topAiring?.pagination.items.total) {
      setPageNumber(pageNumber + 1);
    }
  };
  const prevPage = async () => {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  if (!topAiring) return null;
  return (
    <div className="flex">
      <div>
        <SectionTitle title="Top Airing Anime" />
        <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
          {topAiring?.data.map((episode: Datum) => {
            return <Card episode={episode} key={episode.mal_id} />;
          })}
        </div>
        <div className="flex items-center justify-center py-5 px-5">
          <button
            className="border-black btn-primary btn mr-5 border"
            onClick={() => prevPage()}
            disabled={pageNumber === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="border-black btn-primary btn border"
            onClick={() => nextPage()}
            disabled={pageNumber === topAiring?.pagination.items.total}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
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
