import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          EGG
        </Link>
        <div
          className="px-4 cursor-pointer md:hidden"
          onClick={toggle}
          onKeyDown={toggle}
          role="button"
          tabIndex="0"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block  hidden">
          <Link to="/" className="p-4">
            Home
          </Link>
          <Link to="/menu" className="p-4">
            Menu
          </Link>
          <Link to="/about" className="p-4">
            About
          </Link>
          <Link to="/contact" className="p-4">
            Contact
          </Link>
        </div>
      </nav>
      <div
        role="button"
        tabIndex="0"
        className={
          isOpen
            ? "grid grid-rows-4 text-center items-center bg-yellow-500"
            : "hidden"
        }
        onClick={toggle}
        onKeyDown={toggle}
      >
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/menu" className="p-4">
          Menu
        </Link>
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/contact" className="p-4">
          Contact
        </Link>
      </div>
    </>
  );
}

export default NavBar;
