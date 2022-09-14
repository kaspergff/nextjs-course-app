import { FC, useEffect, useState } from "react";
import FirebaseApp, { checkEnrollment } from "@/lib/firebase";

import CourseNavBar from "./CourseNavBar";
import LessonPage from "./LessonPage";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(FirebaseApp);

interface Props {
  course: course;
  cid: string;
}

const CourseWrapper: FC<Props> = ({ course, cid }) => {
  const [activeLesson, setActiveLesson] = useState(0);
  const [user, loading, error] = useAuthState(auth);
  const [enrollment, setEnrollment] = useState();

  useEffect(() => {
    const check = async () => {
      if (user) {
        const data = await checkEnrollment(user.uid, "Course-1");
        if (data) setEnrollment(data[cid]);
      }
    };
    check();
  }, [user, cid]);

  const navSetter = (number: number) => setActiveLesson(number);

  if (!user) {
    return (
      <div className="grow flex flex-col gap-4 ">
        <div></div>
        <div className="grow ">
          <LessonPage lesson={course[activeLesson]} />
        </div>
        <div className="mx-auto w-content py-16">
          <Link href="/login">
            <a className="btn btn-primary btn-big ">
              Login or create an account to check this course!
            </a>
          </Link>
        </div>
      </div>
    );
  } else if (user && !enrollment) {
    return (
      <div className="grow flex flex-col gap-4 ">
        <div>
          {/* <CourseNavBar
          active={activeLesson}
          navSetter={navSetter}
          nrOfLessons={course.length}
        /> */}
        </div>
        <div className="grow ">
          <LessonPage lesson={course[activeLesson]} />
        </div>
        <div className="mx-auto w-content py-16">
          <Link href="/login">
            <a className="btn btn-primary btn-big ">
              Click here to enroll in this course
            </a>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grow flex flex-col gap-4 ">
        <div>
          {/* <CourseNavBar
          active={activeLesson}
          navSetter={navSetter}
          nrOfLessons={course.length}
        /> */}
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
    );
  }
};

export default CourseWrapper;
