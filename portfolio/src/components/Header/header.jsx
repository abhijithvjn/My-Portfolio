import React from "react";
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

  return (
    <header className="w-full bg-(--header-footer-bg) shadow-md text-white bodoni-moda sticky top-0">
        <div className="container mx-auto flex items-center justify-between py-4 lg:py-4">
          
          {/* Logo */}
          <div className="w-[150px] px-6">
            <Link to={logo.url}>
              <img src={logo.image} alt={logo.text} className="w-full h-auto object-contain max-h-[70px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="flex w-auto items-center justify-between lg:px-8">
            <NavigationMenuList className="hidden lg:flex space-x-6">
              {navigation.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link to={item.url}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>


          {/* Mobile Hamburger */}
          {mobileMenu.enabled && <Hamburger menuItems={mobileMenu.menuItems} />}
        </div>
    </header>
  );
};

export default Header;
