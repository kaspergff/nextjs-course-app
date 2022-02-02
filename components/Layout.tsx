import Head from "next/head";
import { FC } from "react";
import NavBar from "./NavBar";
import Footer from './Footer'

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>
          Web3 Courses for web2 developers
        </title>
      </Head>
      <NavBar />
      <main className="grow flex flex-col p-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
