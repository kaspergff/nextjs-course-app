import { GetStaticPaths, GetStaticProps } from "next";
import { getAllCourseCid, getLessons } from "lib/api";

import CourseWrapper from "components/CourseWrapper";
import { FC } from "react";
import Layout from "components/Layout";

interface Props {
  lessons: course;
}

// base page of every course
const CoursePage: FC<Props> = ({ lessons }) => {
  console.log(lessons);

  return (
    <Layout>
      <CourseWrapper course={lessons} />
    </Layout>
  );
};

// props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lessons = await getLessons(params?.cid as string);

  return {
    props: {
      lessons,
    },
  };
};

// generate all the paths for al courses
export const getStaticPaths: GetStaticPaths = async () => {
  const courses = getAllCourseCid();

  return {
    paths: courses.map((course) => {
      return {
        params: {
          cid: course,
        },
      };
    }),
    fallback: false,
  };
};

export default CoursePage;
