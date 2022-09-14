import { getAuth, signOut } from "firebase/auth";

import { FC } from "react";
import FirebaseApp from "@/lib/firebase";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(FirebaseApp);

interface Props {
  showSideBar: Boolean;
}
const SideBar: FC<Props> = ({ showSideBar }) => {
  const [user, loading, error] = useAuthState(auth);

  const menu = () => {
    if (user) {
      return (
        <ul className="mt-20 text-2xl font-semibold text-white">
          <li className="mt-4 hover:underline">
            <Link href={`/user`} passHref>
              {user.displayName}
            </Link>
          </li>
          <li className="mt-4 hover:underline">
            <Link href={`/courses`} passHref>
              Courses
            </Link>
          </li>
          <li>
            <button
              onClick={() => signOut(auth)}
              className="font-semibold mt-4 hover:underline">
              Logout
            </button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="mt-20 text-2xl font-semibold text-white">
          <li className="mt-4 hover:underline">
            <Link href={`/login`} passHref>
              Login
            </Link>
          </li>
          <li className="mt-4 hover:underline">
            <Link href={`/courses`} passHref>
              Projects
            </Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <>
      <div
        className={`right-0 w-full md:w-1/3 lg:w-1/4 bg-emerald-800 bg-opacity-80 p-10 pl-20 fixed h-full ease-in-out duration-300 ${
          showSideBar ? "translate-x-0 " : "translate-x-full"
        }`}>
        {menu()}
      </div>
    </>
  );
};

export default SideBar;
