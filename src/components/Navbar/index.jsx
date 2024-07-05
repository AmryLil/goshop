import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "./cart";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ cartVisible, toggleCartVisibility }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan query pencarian
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="bg-white shadow fixed z-50 w-full">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex-shrink-0 flex-row flex gap-x-10">
              <img
                className="h-16 w-[80px]"
                src="./img/logo2.png"
                alt="Workflow"
              />
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md py-2 px-4 w-[400px] mr-2"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2.5 rounded-md"
                >
                  <FaSearch className="text-lg md:text-xl" />
                </button>
              </form>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              to={"/"}
              className="border-red-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-4 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="border-transparent text-gray-500 hover:border-red-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-base font-medium"
            >
              Shop
            </Link>
            <Link
              to="/myaccount"
              className="border-transparent text-gray-500 hover:border-red-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-base font-medium"
            >
              My Account
            </Link>
            <Link
              to={"/login"}
              className="border-transparent text-gray-500 hover:border-red-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-base font-medium"
            >
              Login
            </Link>
          </div>
          <div className="ml-6 flex items-center">
            <button
              onClick={() => {
                toggleCartVisibility();
                toggleOverlay();
              }}
              className="bg-white p-1 rounded-full hover:text-gray-500"
            >
              <FaCartShopping size={25} />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {cartVisible && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="fixed inset-y-0 right-0 z-50 w-2/5 bg-white shadow-lg"
            >
              <Cart onClick={toggleCartVisibility} />
            </motion.div>
            {isOverlayVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black opacity-60 z-40"
                onClick={() => {
                  toggleCartVisibility();
                  toggleOverlay();
                }}
              ></motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
