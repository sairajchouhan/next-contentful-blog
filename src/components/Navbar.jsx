import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-gray-100 h-12">
      <div className="container px-16 mx-auto flex items-center h-full">
        <div className="uppercase font-bold tracking-wider text-xl text-purple-600 cursor-pointer text-center w-full">
          <Link href="/">
            <a>Bloggy</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
