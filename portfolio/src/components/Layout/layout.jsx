import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/header";
import Footer from "../Footer/footer";


const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
