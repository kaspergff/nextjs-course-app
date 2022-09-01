import { auth } from "firebase_client/clientApp";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
  showSideBar: Boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
}
const NavBar: FC<Props> = ({ showSideBar, setShowSideBar }) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className=" flex items-center justify-between p-4 border-b border-gray-200">
      <Link href="/">
        <a className="text-emerald-600 font-semibold text-xl flex space-x-2">
          Web3Dev
        </a>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center h-2">
          <li className="">
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
          <li className="w-8 ">
            {showSideBar ? (
              <button onClick={() => setShowSideBar(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  height="22px"
                  viewBox="0 0 16 16"
                  className="fill-emerald-600">
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                </svg>
              </button>
            ) : (
              <button
                className="flex flex-col gap-2"
                onClick={() => setShowSideBar(true)}>
                <svg
                  className="fill-emerald-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 48 48">
                  <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" />
                  <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" />
                  <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" />
                </svg>
                {/* <div className="w-8 h-0.5 bg-emerald-600"></div>
                <div className="w-8 h-0.5 bg-emerald-600"></div>
                <div className="w-8 h-0.5 bg-emerald-600"></div> */}
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
