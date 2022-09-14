import { GetStaticPaths, GetStaticProps } from "next";
import { getAllCourseCid, getLessons } from "lib/api";

import CourseWrapper from "components/CourseWrapper";
import { FC } from "react";
import Layout from "components/Layout";

interface Props {
  lessons: course;
  cid: string;
}

// base page of every course
const CoursePage: FC<Props> = ({ lessons, cid }) => {
  return (
    <Layout>
      <CourseWrapper course={lessons} cid={cid} />
    </Layout>
  );
};

// props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cid = params?.cid as string;
  const lessons = await getLessons(cid);

  return {
    props: {
      lessons,
      cid,
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
