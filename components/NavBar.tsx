import { auth } from "firebase_client/clientApp"
import Link from "next/link"
import { Dispatch, FC, SetStateAction } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

interface Props {
  showSideBar: Boolean
  setShowSideBar: Dispatch<SetStateAction<boolean>>
}
const NavBar: FC<Props> = ({ showSideBar, setShowSideBar }) => {
  const [user, loading, error] = useAuthState(auth)

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <Link href="/">
        <a className="text-emerald-600 font-semibold text-xl flex space-x-2">
          Web3Dev
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li>
            {user && (
              <Link href="/user">
                <a className="text-emerald-600 hover:underline">
                  {user.displayName}
                </a>
              </Link>
            )}
            {!user && (
              <Link href="/login">
                <a className="text-emerald-600 hover:underline">Login</a>
              </Link>
            )}
          </li>
          <li>
            {showSideBar ? (
              <button
                className="w-8 flex text-4xl text-emerald-600"
                onClick={() => setShowSideBar(false)}>
                x
              </button>
            ) : (
              <button className="w-8" onClick={() => setShowSideBar(true)}>
                <div className="flex flex-col gap-2">
                  <div className="w-8 h-0.5 bg-emerald-600"></div>
                  <div className="w-8 h-0.5 bg-emerald-600"></div>
                  <div className="w-8 h-0.5 bg-emerald-600"></div>
                </div>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
