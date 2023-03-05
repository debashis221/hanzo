import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center bg-primary px-5 py-4 shadow-xl sm:px-4">
      <Link href={'/'}>
        <Image
          src="https://zoro.to/images/logo.png"
          alt="Logo"
          loading="lazy"
          width={150}
          height={100}
        />
      </Link>

      <div className="mx-4 hidden lg:flex">
        <input className="mx-2 h-12 rounded-full px-2" />
        <button className="btn-accent btn rounded-full">
          <FaSearch color="white" size={15} />
        </button>
      </div>
    </header>
  );
};

export default Header;
