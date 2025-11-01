"use client";
import React, { useState, useLayoutEffect, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";

const Hamburger = ({ menuItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const linksRef = useRef([]);
  const menuRef = useRef(null);
  const tl = useRef(null);

  // 🧩 1. Create the animation ONCE
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true });

      // background fade-in
      tl.current.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // link stagger animation
      tl.current.from(
        linksRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          force3D: true,
        },
        "-=0.1" // overlap with background fade
      );
    });

    return () => ctx.revert();
  }, []);

  // 🧩 2. Control animation by state
  useEffect(() => {
    if (tl.current) {
      mobileMenuOpen ? tl.current.play() : tl.current.reverse();
    }
  }, [mobileMenuOpen]);

  // 🧩 3. Separate scroll lock logic
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      {!mobileMenuOpen && (
        <button
          className="lg:hidden px-4 py-2 text-2xl"
          onClick={() => setMobileMenuOpen(true)}
        >
          ☰
        </button>
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 z-50 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: 0 }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            ref={(el) => (linksRef.current[index] = el)}
            className="text-xl hover:text-blue-400 transition-colors"
            onClick={closeMenu}
          >
            {item.title}
          </Link>
        ))}

        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={closeMenu}
        >
          ✕
        </button>
      </div>
    </>
  );
};

export default Hamburger;
