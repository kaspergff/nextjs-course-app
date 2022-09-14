import { auth, checkEnrollment } from "./firebase";
import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

export const useCourseEnrollment = () => {
  const [user] = useAuthState(auth);
  const [enrolledCourses, setEnrolledCourses] = useState({});

  const check = async (id: string) => {
    const data = await checkEnrollment(id);
    return data;
  };

  useEffect(() => {
    if (user) {
      const enrolledCourses = check(user.uid);
      setEnrolledCourses(enrolledCourses);
    }
  }, [user]);

  return { enrolledCourses };
};
