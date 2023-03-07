'use client';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import { FavouriteList } from 'interfaces/interfaces';
import Image from 'next/image';
SwiperCore.use([Pagination, Autoplay]);

const SwiperSlider = ({ data }: { data: FavouriteList }) => {
  return (
    <div className="my-5 px-5">
      {data && (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {data?.data?.map((item, index) => {
            if (item.trailer.images.maximum_image_url !== null)
              return (
                <SwiperSlide
                  key={index}
                  className="border-black relative block flex max-h-[70vh] items-center justify-center rounded-2.5xl border bg-jacarta-700 p-[1.1875rem] transition-shadow hover:shadow-lg lg:min-h-[70vh] "
                >
                  <Image
                    src={item.trailer.images.maximum_image_url || ''}
                    alt={item.title}
                    width={1800}
                    height={50}
                    className="max-h-[63vh] rounded-lg object-cover blur-sm"
                    priority
                  />
                  <div className="absolute bottom-10 left-[30%] hidden max-w-[40vw] rounded-md border border-primary bg-primary bg-opacity-30 bg-clip-padding py-2 text-center backdrop-blur-lg backdrop-filter lg:flex lg:flex-col">
                    <h2 className="px-5  text-2xl font-bold text-white">
                      {item.title_english}
                    </h2>
                    <div className="flex items-center justify-center">
                      <h2 className="text-base font-bold text-white">
                        {item.type}
                      </h2>
                      <span className="mx-2 text-2xl font-bold text-white">
                        .
                      </span>
                      <h2 className="text-base font-bold text-white">
                        EP {item.episodes}
                      </h2>
                      <span className="mx-2 text-2xl font-bold text-white">
                        .
                      </span>
                      <h2 className="text-base font-bold text-white">
                        {item.duration}
                      </h2>
                    </div>
                    <p className="hidden px-5 text-white lg:flex">
                      {item.synopsis.slice(0, 200)}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <button className="btn-primary btn my-3 rounded-full">
                        Watch Now
                      </button>
                      <button className="btn-primary btn my-3 rounded-full">
                        Details
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default SwiperSlider;
