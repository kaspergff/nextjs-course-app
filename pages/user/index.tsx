import { FC, useEffect, useState } from "react";
import FirebaseApp, { checkEnrollment } from "@/lib/firebase";

import Layout from "@/components/Layout";
import Link from "next/link";
import { getAllCourseCid } from "@/lib/api";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCourseEnrollment } from "@/lib/hooks";
import { useRouter } from "next/router";

const auth = getAuth(FirebaseApp);

interface Props {
  courses: string[];
}

export async function getServerSideProps() {
  const courses = getAllCourseCid();

  return {
    props: { courses }, // will be passed to the page component as props
  };
}

const Index: FC<Props> = ({ courses }) => {
  const [enrolledCourses, setEnrolledCourses] = useState({});
  const [user, loading, error] = useAuthState(auth);
  const foo = useCourseEnrollment();
  // routing
  const router = useRouter();

  if (user) {
    return (
      <Layout>
        <p className="text-center fontsize-xl font-bold pb-4">
          {user.displayName}
        </p>
        <p>Enrolled courses:</p>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="mx-auto w-content py-16">
          <Link href="/login">
            <a className="btn btn-primary btn-big ">Create an account</a>
          </Link>
        </div>
      </Layout>
    );
  }
};

export default Index;
