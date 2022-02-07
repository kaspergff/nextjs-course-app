import { FC } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "firebase_client/clientApp"

interface Props {
  showSideBar: Boolean
}
const SideBar: FC<Props> = ({ showSideBar }) => {
  const [user, loading, error] = useAuthState(auth)

  const menu = () => {
    if (user) {
      return (
        <ul className="mt-20 text-2xl font-semibold text-white">
          <li className="mt-4">{user.displayName}</li>
          <li className="mt-4">Courses</li>
        </ul>
      )
    } else {
      return (
        <ul className="mt-20 text-2xl font-semibold text-white">
          <li className="mt-4">Login</li>
          <li className="mt-4">Courses</li>
        </ul>
      )
    }
  }

  return (
    <>
      <div
        className={`right-0 w-full md:w-1/3 lg:w-1/4 bg-emerald-800 bg-opacity-80 p-10 pl-20 fixed h-full ease-in-out duration-300 ${
          showSideBar ? "translate-x-0 " : "translate-x-full"
        }`}>
        {menu()}
      </div>
    </>
  )
}

export default SideBar
