import { FC, useEffect, useState } from "react"

interface Props {
  nrOfLessons: number
  navSetter: (num: number) => void
  active: number
}
const CourseNavBar: FC<Props> = ({ nrOfLessons, navSetter, active }) => {
  const [activeLesson, setactiveLesson] = useState(0)
  // generate array to use map
  const lessons = Array.from(Array(nrOfLessons).keys())

  const classNameActive =
    "page-link text-xl py-3 px-6 relative block border-0 bg-emerald-600 outline-none transition-all duration-300 rounded-md text-white hover:text-white hover:bg-emerald-500 shadow-md focus:shadow-md"
  const classNameNotActive =
    "page-link text-xl py-3 px-6 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
  const navButtonDisabled =
    "page-link text-xl py-3 px-6 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-500 pointer-events-none focus:shadow-none"
  const navButtonActive =
    "page-link text-xl py-3 px-6 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"

  const liActive = "page-item"
  const liDisabled = "page-item disabled"

  useEffect(() => {
    setactiveLesson(active)
  },[active])

  return (
    <nav className="grow-0 flex justify-center">
      <ul className="flex list-style-none">
        <li className={activeLesson == 0 ? liDisabled : liActive}>
          <button
            onClick={() => {
              activeLesson == 0
                ? console.log("not posible")
                : setactiveLesson(activeLesson - 1)
              navSetter(activeLesson - 1)
            }}
            className={activeLesson == 0 ? navButtonDisabled : navButtonActive}
            tabIndex={-1}
            aria-disabled={activeLesson == 0 ? "true" : "false"}>
            Previous
          </button>
        </li>

        {lessons.map((_lessonPage, index) => {
          return (
            <li key={index} className="page-item">
              <button
                onClick={() => {
                  setactiveLesson(index)
                  navSetter(index)
                }}
                className={
                  activeLesson == index ? classNameActive : classNameNotActive
                }>
                {index + 1}
              </button>
            </li>
          )
        })}
        <li className={activeLesson == nrOfLessons - 1 ? liDisabled : liActive}>
          <button
            onClick={() => {
              activeLesson == nrOfLessons - 1
                ? console.log("not posible")
                : setactiveLesson(activeLesson + 1)
              navSetter(activeLesson + 1)
            }}
            className={
              activeLesson == nrOfLessons - 1
                ? navButtonDisabled
                : navButtonActive
            }
            tabIndex={+1}
            aria-disabled={activeLesson == nrOfLessons - 1 ? "true" : "false"}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default CourseNavBar
