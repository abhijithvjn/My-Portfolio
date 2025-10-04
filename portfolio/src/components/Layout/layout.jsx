import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ScrollToTop from "../ScrollToTop";

const Layout = () => {
    return (
        <>
            <ScrollToTop>
                <Header />
                <main className="min-h-screen">
                    <Outlet />
                </main>
                <Footer />
            </ScrollToTop>
        </>
    );
};

export default Layout;
