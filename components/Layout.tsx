import { FC, useEffect, useState } from "react";

import Footer from "./Footer";
import Head from "next/head";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout: FC = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Markdown course website</title>
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
