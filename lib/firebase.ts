import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import { doc, getDoc } from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(FirebaseApp);
export default FirebaseApp;

// Initialize Cloud Firestore and get a reference to the service
export const firestore = getFirestore(FirebaseApp);

export const checkEnrollment = async (userId: string, courseID: string) => {
  const docRef = doc(firestore, "CourseEnrollment", userId);

  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  return { ...data };
};

export const enrollInCourse = async (userId: string, courseId: string) => {};
