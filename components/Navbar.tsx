// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    setCurrentHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (path: string) => {
    if (path.startsWith("#")) {
      return currentHash === path;
    }
    return router.pathname === path;
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white px-2 lg:px-28">
      <div className="flex items-center py-4">
        <div className="hidden md:flex flex-1 justify-start space-x-2">
          <Link
            href="#home"
            scroll={false}
            className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
              isActive("#homepage")
                ? "text-textDark bg-secondary"
                : "text-textDark hover:bg-secondary"
            }`}
          >
            Home
          </Link>
          <Link
            href="#about"
            scroll={false}
            className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
              isActive("#about")
                ? "text-textDark bg-secondary"
                : "text-textDark hover:bg-secondary"
            }`}
          >
            About
          </Link>
          <Link
            href="#listings"
            className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
              isActive("#listings")
                ? "text-textDark bg-secondary"
                : "text-textDark hover:bg-secondary"
            }`}
          >
            Listings
          </Link>
          <Link
            href="#services"
            className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
              isActive("/services")
                ? "text-textDark bg-secondary"
                : "text-textDark hover:bg-secondary"
            }`}
          >
            Services
          </Link>
          <Link
            href="#blogs"
            className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
              isActive("/blogs")
                ? "text-textDark bg-secondary"
                : "text-textDark hover:bg-secondary"
            }`}
          >
            Blogs
          </Link>
        </div>

        <div className="flex md:flex-1 justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-full">
              <HomeIcon className="h-8 w-8 text-textLight" />
            </div>
            <span className="font-poppins text-logo font-semibold text-[#1E1E1E]">
              Logo
            </span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-end space-x-4">
          <Link
            href="#"
            className="flex items-center space-x-2 px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium text-textDark hover:bg-primary hover:text-textLight transition"
          >
            <UserCircleIcon className="h-5 w-5" />
            <span>Login/Register</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium text-textDark hover:bg-primary hover:text-textLight transition"
          >
            <HomeIcon className="h-5 w-5" />
            <span>Add Listing</span>
          </Link>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-textDark hover:text-primary focus:outline-none focus:text-primary"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="#homepage"
              scroll={false}
              className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
                isActive("#homepage")
                  ? "text-textDark bg-secondary"
                  : "text-textDark hover:bg-secondary"
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="#about"
              scroll={false}
              className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
                isActive("#about")
                  ? "text-textDark bg-secondary"
                  : "text-textDark hover:bg-secondary"
              }`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/listings"
              className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
                isActive("/listings")
                  ? "text-textDark bg-secondary"
                  : "text-textDark hover:bg-secondary"
              }`}
              onClick={handleLinkClick}
            >
              Listings
            </Link>
            <Link
              href="/services"
              className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
                isActive("/services")
                  ? "text-textDark bg-secondary"
                  : "text-textDark hover:bg-secondary"
              }`}
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              href="/blogs"
              className={`px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium transition ${
                isActive("/blogs")
                  ? "text-textDark bg-secondary"
                  : "text-textDark hover:bg-secondary"
              }`}
              onClick={handleLinkClick}
            >
              Blogs
            </Link>
            <Link
              href="/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium text-textDark hover:bg-primary hover:text-textLight transition"
              onClick={handleLinkClick}
            >
              <UserCircleIcon className="h-5 w-5" />
              <span>Login/Register</span>
            </Link>
            <Link
              href="/add-listing"
              className="flex items-center space-x-2 px-4 py-2 rounded-[30px] font-poppins text-h5 font-medium text-textDark hover:bg-primary hover:text-textLight transition"
              onClick={handleLinkClick}
            >
              <HomeIcon className="h-5 w-5" />
              <span>Add Listing</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
