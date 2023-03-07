import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  let searchText: string;
  const pathname = usePathname();
  const path = pathname?.split('/')[1];
  const navigate = useRouter();
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-around gap-2 bg-accent py-4 shadow-xl sm:px-4">
      <Link href={'/'}>
        <Image
          src="https://zoro.to/images/logo.png"
          alt="Logo"
          loading="lazy"
          width={150}
          height={100}
        />
      </Link>
      <ul className="hidden list-none gap-4 text-white lg:flex">
        <Link href={'/'}>
          <li
            className={`cursor-pointer hover:text-primary ${
              path === '' ? 'text-primary' : ''
            }`}
          >
            Home
          </li>
        </Link>
        <Link href={'/genres'}>
          <li
            className={`cursor-pointer hover:text-primary ${
              path === 'genres' ? 'text-primary' : ''
            }`}
          >
            Genres
          </li>
        </Link>
        <Link href={'/top-airing'}>
          <li
            className={`cursor-pointer hover:text-primary ${
              path === 'top-airing' ? 'text-primary' : ''
            }`}
          >
            Top Airing
          </li>
        </Link>
        <Link href={'/popular'}>
          <li
            className={`cursor-pointer hover:text-primary ${
              path === 'popular' ? 'text-primary' : ''
            }`}
          >
            Popular Anime
          </li>
        </Link>
        <Link href={'/random'}>
          <li
            className={`cursor-pointer hover:text-primary ${
              path === 'random' ? 'text-primary' : ''
            }`}
          >
            Random Anime
          </li>
        </Link>
      </ul>
      <div className="hidden lg:flex">
        <input
          className="mx-2 h-12 rounded-full border px-5 "
          placeholder="Enter any anime name"
          onChange={(e) => {
            searchText = e.target.value;
          }}
        />
        <button
          className="btn-primary btn rounded-full border"
          onClick={() => navigate.push(`/search/${searchText}`)}
        >
          <FaSearch color="white" size={15} />
        </button>
      </div>

      <button className="btn-primary btn rounded-full text-white">
        Login Now
      </button>
    </header>
  );
};

export default Header;
