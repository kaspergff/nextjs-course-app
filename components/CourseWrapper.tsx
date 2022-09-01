import { FC, useState } from "react"
import CourseNavBar from "./CourseNavBar"
import LessonPage from "./LessonPage"

interface Props {
  course: course
}

const CourseWrapper: FC<Props> = ({ course }) => {
  const [activeLesson, setactiveLesson] = useState(0)

  const navSetter = (number: number) => setactiveLesson(number)
  return (
    <div className="grow flex flex-col gap-4 ">
      <div>
        <CourseNavBar
          active={activeLesson}
          navSetter={navSetter}
          nrOfLessons={course.length}
        />
      </div>
      <div className="grow ">
        <LessonPage lesson={course[activeLesson]} />
      </div>
      <div className="">
        <CourseNavBar
          active={activeLesson}
          navSetter={navSetter}
          nrOfLessons={course.length}
        />
      </div>
    </div>
  )
}

export default CourseWrapper
