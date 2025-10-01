import React, { useState } from "react";
import { Link } from "react-router";

const Hamburger = ({ menuItems }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Hamburger icon */}
            {!mobileMenuOpen && (
                <button className="lg:hidden px-4 py-2 text-2xl" onClick={() => setMobileMenuOpen(true)}>
                    ☰
                </button>
            )}

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 z-50">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.url}
                            className="text-xl hover:text-blue-400"
                            onClick={() => setMobileMenuOpen(false)} // close menu on click
                        >
                            {item.title}
                        </Link>
                    ))}

                    {/* Close button */}
                    <button className="absolute top-4 right-4 text-3xl" onClick={() => setMobileMenuOpen(false)}>
                        ✕
                    </button>
                </div>
            )}
        </>
    );
};

export default Hamburger;
