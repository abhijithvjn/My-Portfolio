"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import Hamburger from "../Hamburger/hamburger";
import headerData from "../../staticData/headerData";

const Header = () => {
  const { logo, navigation, mobileMenu } = headerData.data.data;

  const navLinksRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate nav links (left → right)
      gsap.from(navLinksRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="w-full bg-(--header-footer-bg) shadow-md text-white bodoni-moda sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 lg:py-4">
        
        {/* ✅ Logo (Static, no animation) */}
        <div className="w-[150px] px-6">
          <Link to={logo.url}>
            <img
              src={logo.image}
              alt={logo.text}
              className="w-full h-auto object-contain max-h-[70px]"
            />
          </Link>
        </div>

        {/* ✅ Desktop Navigation (Animated) */}
        <NavigationMenu className="flex w-auto items-center justify-between lg:px-8">
          <NavigationMenuList className="hidden lg:flex space-x-6">
            {navigation.map((item, index) => (
              <NavigationMenuItem
                key={index}
                ref={(el) => (navLinksRef.current[index] = el)}
              >
                <NavigationMenuLink asChild>
                  <Link to={item.url}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* ✅ Mobile Hamburger (Static) */}
        {mobileMenu.enabled && <Hamburger menuItems={mobileMenu.menuItems} />}
      </div>
    </header>
  );
};

export default Header;
