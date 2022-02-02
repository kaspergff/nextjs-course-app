import Layout from "../../components/Layout";

import Link from "next/link";
import { getAllCourseCid } from "../../lib/api";
import { FC } from "react";

interface Props {
  courses: string[];
}

const App: FC<Props> = ({ courses }) => {
  return (
    <Layout>
      {courses.map((courseTitle, i) => {
        return (
          <div key={i}>
            <Link href={`/courses/${courseTitle}`} passHref>
              <a>{courseTitle}</a>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
};

export async function getStaticProps() {
  const courses = getAllCourseCid();
  return {
    props: {
      courses,
    },
  };
}

export default App;
