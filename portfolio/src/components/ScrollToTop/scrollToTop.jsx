import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }) => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementTop - headerHeight - 10;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        return;
      }
    }

    // 🔹 Normal route, just jump to top
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return children || null;
};

export default ScrollToTop;
