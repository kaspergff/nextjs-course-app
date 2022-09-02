import Head from "next/head";
import { FC, useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout: FC = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    console.log(showSideBar);
  }, [showSideBar]);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Web3 Courses for web2 developers</title>
        </Head>
        <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="grow flex flex-row">
          <main className="grow flex flex-col p-5">{children}</main>
          <SideBar showSideBar={showSideBar} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
