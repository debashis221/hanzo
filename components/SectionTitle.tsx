import Link from 'next/link';

interface SectionProps {
  title: string;
  href?: string;
}

const SectionTitle: React.FC<SectionProps> = ({ title, href }) => {
  return (
    <div className="flex items-center justify-between py-5 px-5">
      <h1 className="text-xl font-bold leading-normal text-primary lg:text-5xl">
        {title}
      </h1>
      {href && (
        <Link
          href={href}
          className="flex items-center justify-center p-2 text-xl"
        >
          <span> View More</span>
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
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
