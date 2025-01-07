import React, { useState } from "react";
import Sidebar from "./sidebar";
import Profile from "./profile";
import AddressList from "./alamat";
import { Route, Routes } from "react-router-dom";
import ActivateSeller from "./activate_seller";
import OrderHistory from "../../pages/Orders";

const Myaccount = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="logo-sidebar"
        aria-expanded={isSidebarOpen}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main className="p-4 sm:ml-64 bg-gray-100 relative flex justify-center items-center h-[100vh]">
        <Routes>
          <Route path="" element={<Profile />} />
          <Route path="alamat" element={<AddressList />} />
          <Route path="/seller" element={<ActivateSeller />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      </main>
    </div>
  );
};
export default Myaccount;
