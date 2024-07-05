import React, { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { FaDumpster } from "react-icons/fa";

import { IoHome, IoKey, IoList, IoLocation, IoLogOut } from "react-icons/io5";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <Link
          to="/"
          className="flex items-center ps-2.5 mb-5 p-2 rounded-md duration-200 transition-all hover:bg-red-800 border-4 border-red-800"
        >
          <img
            src="./img/noprofile.png"
            className="h-8 me-3 sm:h-10 rounded-lg"
            alt="Flowbite Logo"
          />
          <div className="flex flex-col px-2 text-slate-50">
            <span className=" font-bold whitespace-nowrap -translate-x-3">
              Name
            </span>
            <span className="text-sm font-semibold whitespace-nowrap  -translate-x-3">
              Username
            </span>
          </div>
        </Link>
        <ul className="space-y-2 font-medium">
          <li>
            <a href="#" className="sidebarstyle group bg-red-800">
              <BsPerson size={22} />
              <span className="ms-3">Profile</span>
            </a>
          </li>
          <li>
            <a href="#" className="sidebarstyle group">
              <IoLocation size={22} />
              <span className="flex-1 ms-3 whitespace-nowrap">Alamat</span>
            </a>
          </li>
          <li>
            <a href="#" className="sidebarstyle group">
              <IoKey size={22} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Ubah Password
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="sidebarstyle group">
              <FaDumpster size={22} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Activate Seller Account
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="sidebarstyle group">
              <IoList size={22} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Pesanan Saya
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="sidebarstyle group">
              <IoHome size={22} />
              <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="sidebarstyle group">
              <IoLogOut size={22} />
              <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
