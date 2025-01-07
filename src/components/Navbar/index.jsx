import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import DesktopMenu from "./desktopMenu";
import { MobileMenu } from "./mobileMenu";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan query pencarian
    console.log("Search query:", searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow fixed z-50 w-full">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Search Form */}
            <div className="flex items-center">
              <img
                className="md:h-16 md:w-[80px] h-9 w-10"
                src="./img/logo2.png"
                alt="Workflow"
              />
              <form
                onSubmit={handleSearchSubmit}
                className="hidden md:flex items-center ml-4"
              >
                <input
                  type="text"
                  className="border border-gray-300 rounded-md py-2 px-4 w-[400px] mr-2"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="bg-red-800 text-white px-4 py-2.5 rounded-md"
                >
                  <FaSearch className="text-lg md:text-xl" />
                </button>
              </form>
            </div>

            {/* Desktop Menu Links */}
            <DesktopMenu ClassName={"hidden md:flex"} />

            {/* Mobile Menu Toggle Button */}
            <MobileMenu />
            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu} className="text-gray-900">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-x-0 bottom-0 bg-white shadow-lg transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "translate-y-full"
          } z-40`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to={"/"}
              className="text-gray-900 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="text-gray-500 hover:text-gray-700 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/myaccount"
              className="text-gray-500 hover:text-gray-700 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              My Account
            </Link>
            <Link
              to={"/login"}
              className="text-gray-500 hover:text-gray-700 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="fixed bottom-4 right-4  z-50">
        <Link to={"/cart"}>
          <button className="bg-white p-2 rounded-full shadow-lg hover:text-red-800 md:hidden">
            <FaCartShopping size={27} />
            <div className="rounded-full bg-red-800 p-0.5 px-1.5 absolute top-0 -right-1">
              <h1 className="text-white text-[8px] font-bold">1</h1>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Header;
