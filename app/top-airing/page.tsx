'use client';
import { SectionTitle, Card, Loading, Header } from 'components';
import { Datum } from 'interfaces/interfaces';
import Image from 'next/image';
import { useState } from 'react';
import useSwr from 'swr';
import axios from 'axios';

const TopAiring = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/top/anime?filter=airing&page=${pageNumber}`,
    fetcher,
  );
  const nextPage = async () => {
    if (pageNumber !== data?.pagination.items.total) {
      setPageNumber(pageNumber + 1);
    }
  };
  const prevPage = async () => {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  if (error) return null;
  if (isLoading) return <Loading />;
  return (
    <>
      <Header />
      <div className="flex">
        <div>
          <SectionTitle title="Top Airing Anime" />
          <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {data?.data.map((episode: Datum) => {
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
              disabled={pageNumber === data?.pagination.items.total}
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
      </div>
    </>
  );
};

export default TopAiring;
