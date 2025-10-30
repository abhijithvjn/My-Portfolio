"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";

const Hamburger = ({ menuItems }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const linksRef = useRef([]);

    useLayoutEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";

            gsap.set(linksRef.current, { opacity: 0, y: 30 });

            gsap.to(linksRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power3.out",
            });
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileMenuOpen]);

    return (
        <>
            {!mobileMenuOpen && (
                <button className="lg:hidden px-4 py-2 text-2xl" onClick={() => setMobileMenuOpen(true)}>
                    ☰
                </button>
            )}

            {mobileMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 z-50">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.url}
                            ref={(el) => (linksRef.current[index] = el)}
                            className="text-xl hover:text-blue-400 transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}

                    <button className="absolute top-4 right-4 text-3xl" onClick={() => setMobileMenuOpen(false)}>
                        ✕
                    </button>
                </div>
            )}
        </>
    );
};

export default Hamburger;
