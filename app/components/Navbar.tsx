"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';

// Custom class for navigation link styles
const navLinkModify =
  "text-gray-950 hover:bg-gray-200 hover:text-brandred px-4 py-2 rounded-full transition-transform duration-400";

const Navbar = () => {
  // State to track the mobile menu's visibility
  const [openMenu, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggle = () => {
    setMenuOpen(!openMenu);
  };

  // Close mobile menu when resizing to larger screens
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const Resize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("resize", Resize);
    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/horizontal-colored-logo.png"
            alt="PBEEX Logo"
            className="h-10 w-auto"
            width={150}
            height={40}
            priority
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6 px-1 py-1 font-medium bg-slate-100 rounded-full border border-slate-900">
          <Link href="/" className={navLinkModify}>
            Home
          </Link>
          <Link href="/about" className={navLinkModify}>
            About
          </Link>
          <Link href="/projects" className={navLinkModify}>
            Projects
          </Link>
          <Link href="/partners" className={navLinkModify}>
            Partners
          </Link>
          <Link href="/blog" className={navLinkModify}>
            Blog
          </Link>
          <Link href="/contact" className={navLinkModify}>
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-gray-950 focus:outline-none"
          onClick={toggle}
        >
          {openMenu ? (
            // Cancel Icon
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>


        {/* Mobile Navigation Menu */}
        {openMenu && (
          <nav className="absolute top-16 right-0 bg-white text-black rounded-md shadow-md pt-16 pb-32 px-6 w-full h-screen overflow-y-hidden flex flex-col justify-between space-y-2">
            <div className="flex flex-col space-y-8 items-center ">
              <Link href="/" className="nav-link text-2xl font-medium hover:text-brandred hover:underline transition-colors cursor-pointer">Home</Link>
              <Link href="/about" className="nav-link text-2xl font-medium hover:text-brandred hover:underline transition-colors cursor-pointer">About</Link>
              <Link href="/projects" className="nav-link text-2xl font-medium hover:text-brandred hover:underline transition-colors cursor-pointer">Projects</Link>
              <Link href="/partners" className="nav-link text-2xl font-medium hover:text-brandred hover:underline transition-colors cursor-pointer">Partners</Link>
              <Link href="/blog" className="nav-link text-2xl font-medium hover:text-brandred hover:underline transition-colors cursor-pointer">Blog</Link>
              <Link href="/contact" className="nav-link text-2xl font-medium hover:text-brandred hover:underline transition-colors cursor-pointer">Contact</Link>
            </div>
            <div>
              <a
                href="/get-involved"
                className="px-6 py-3 bg-red-500 text-2xl text-white border rounded-full shadow-lg hover:scale-105 hover:gap-5 active:bg-red-600 flex justify-center items-center gap-2 transition-transform duration-500"
              >
                Get Involved
                <span className="w-8 items-center">
                <Image 
                  src="/arrow-up-right.png" 
                  alt="Arrow Icon" 
                  className="transition-transform duration-300" 
                  width={50} 
                  height={50} 
                  priority 
                /> 
                </span>
              </a>
            </div>
          </nav>
        )}

        {/* Get Involved Button for Desktop */}
        <div className="hidden lg:block">
          <a
            href="/get-involved"
            className="px-6 py-2 bg-red-500 text-white border rounded-full shadow-lg hover:scale-105 active:bg-red-600 flex items-center gap-2 transition-transform duration-500"
          >
            Get Involved
            <span className="w-8 items-center">
              <Image
                src="/arrow-up-right.png"
                alt="Arrow Icon"
                className="transition-transform duration-300"
                width={50}
                height={50}
                priority
              />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;