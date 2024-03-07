import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4">
        <Link href="/" className="hover:underline">
          atepoyo.com
        </Link>
      </h2>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="hover:underline">
              このサイトについて
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:underline">
              記事一覧
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
