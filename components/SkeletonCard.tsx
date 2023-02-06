import { NextPage } from 'next';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { isMobile } from 'react-device-detect';

const SkeletonCard: NextPage = () => {
  return (
    <div className="block max-h-[320px] min-h-[200px]">
      {isMobile ? (
        <Skeleton
          width={175}
          height={270}
          borderRadius={20}
          baseColor="#FCE38A"
          className="border-black border"
        />
      ) : (
        <Skeleton
          width={210}
          height={320}
          borderRadius={20}
          baseColor="#FCE38A"
          className="border-black border"
        />
      )}
    </div>
  );
};

export default SkeletonCard;
