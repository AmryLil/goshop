// src/components/Banner.js
import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[300px] text-white text-center rounded-xl shadow-md overflow-hidden mb-5 relative">
      <img
        src="./img/thumbnail3.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <h1 className="text-6xl font-bold text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-6  py-2 pb-2.5 rounded-3xl opacity-75">
        GOSHOP
      </h1>
    </div>
  );
};

export default Banner;
