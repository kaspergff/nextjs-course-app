import Link from "next/link";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <Link href="/">
        <a className="text-emerald-600 font-semibold text-xl flex space-x-2">
          Web3Dev
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-emerald-600 hover:underline">Login</a>
            </Link>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <div className="w-8 h-0.5 bg-emerald-600"></div>
              <div className="w-8 h-0.5 bg-emerald-600"></div>
              <div className="w-8 h-0.5 bg-emerald-600"></div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
