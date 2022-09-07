import { FC, Key } from "react";

import CourseCard from "@/components/CourseCard";
import Layout from "components/Layout";
import { getLessonInfo } from "lib/api";

interface Props {
  lessonInfo: any;
}

const App: FC<Props> = ({ lessonInfo }) => {
  return (
    <Layout>
      {lessonInfo.map((course: info, i: Key) => {
        return (
          <CourseCard
            key={i}
            id={course.cid}
            Title={course.data.title}
            Text_big={course.data.Text_big}
            Text_small={course.data.Text_small}
          />
        );
      })}
    </Layout>
  );
};

export async function getStaticProps() {
  const lessonInfo = getLessonInfo();
  return {
    props: {
      lessonInfo,
    },
  };
}

export default App;
