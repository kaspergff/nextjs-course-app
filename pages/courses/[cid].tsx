import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"
import CourseWrapper from "components/CourseWrapper"
import Layout from "components/Layout"
import { getAllCourseCid, getLessons } from "lib/api"

interface Props {
  lessons: course
}

// base page of every course
const CoursePage: FC<Props> = ({ lessons }) => {
  return (
    <Layout>
      <CourseWrapper course={lessons} />
    </Layout>
  )
}

// props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lessons = await getLessons(params?.cid as string)

  return {
    props: {
      lessons,
    },
  }
}

// generate all the paths for al courses
export const getStaticPaths: GetStaticPaths = async () => {
  const courses = getAllCourseCid()

  return {
    paths: courses.map(course => {
      return {
        params: {
          cid: course,
        },
      }
    }),
    fallback: false,
  }
}

export default CoursePage
