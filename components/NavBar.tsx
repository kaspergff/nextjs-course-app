import Link from 'next/link'

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
            <Link href="/course">
              <a className="text-emerald-600 hover:underline">Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar