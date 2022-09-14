import FirebaseApp, { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

import { FC } from "react";
import Layout from "@/components/Layout";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(FirebaseApp);

interface Props {}

const Index: FC<Props> = ({}) => {
  const [user, loading, error] = useAuthState(auth);

  const getUserCourseEnrollment = async (userId: string) => {
    const querySnapshot = await getDocs(collection(db, "CourseEnrollment"));
    querySnapshot.forEach((doc) => {
      if (doc.id == userId) {
        return doc.data();
      }
    });
  };

  if (user) {
    return (
      <Layout>
        <p>{user.displayName}</p>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <p>Login</p>
      </Layout>
    );
  }
};

export default Index;
