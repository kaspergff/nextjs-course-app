import Layout from "components/Layout"

import Link from "next/link"
import { getAllCourseCid } from "lib/api"
import { FC } from "react"
import CourseCard from "@/components/CourseCard"

import { courses as json } from "courses/courses"

interface Props {
  courses: string[]
}

const App: FC<Props> = ({ courses }) => {
  return (
    <Layout>
      {courses.map((courseTitle, i) => {
        const jsonInfoCourse = json.filter(item => item.id == courseTitle)[0]
        return (
          <CourseCard
            key={i}
            id={jsonInfoCourse.id}
            Title={jsonInfoCourse.Title}
            Text_big={jsonInfoCourse.Text_big}
            Text_small={jsonInfoCourse.Text_small}
          />
        )
      })}
    </Layout>
  )
}

export async function getStaticProps() {
  const courses = getAllCourseCid()
  return {
    props: {
      courses,
    },
  }
}

export default App
