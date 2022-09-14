import { FC } from "react";
import FirebaseApp from "@/lib/firebase";
import Layout from "@/components/Layout";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(FirebaseApp);

interface Props {}

const Index: FC<Props> = ({}) => {
  const [user, loading, error] = useAuthState(auth);

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
