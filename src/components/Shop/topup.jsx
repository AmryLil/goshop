// src/components/TopUp.js
import React from "react";

const categories = [
  {
    name: "Furniture",
    imageUrl: "https://via.placeholder.com/100x200?text=Photo",
  },
  {
    name: "Figure",
    imageUrl: "https://via.placeholder.com/100x200?text=Photo",
  },
  {
    name: "Shirt",
    imageUrl: "https://via.placeholder.com/100x200?text=Photo",
  },
  {
    name: "Dress",
    imageUrl: "https://via.placeholder.com/100x200?text=Photo",
  },
];

const TopUp = () => {
  return (
    <div className="mt-2 md:flex w-full container mx-auto">
      <div className="md:w-1/2 w-full">
        <h2 className="text-xl font-bold mb-2">Kategori Pilihan</h2>
        <div className="grid grid-cols-4 gap-4  ">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center rounded-md md:shadow-md md:p-4"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="md:w-24 md:h-24 w-16 h-16 object-cover"
              />
              <p className="mt-2 md:text-base text-sm">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2  md:ml-4 w-full">
        <h2 className="text-xl font-bold mb-2 mt-3 md:mt-0">
          Top Up & Tagihan
        </h2>
        <div className="flex flex-col items-start rounded-md md:shadow-md md:p-4">
          <div className="flex space-x-4 w-full border-b-2 border-slate-200">
            <button className="md:px-8 md:py-2 px-2 py-1 md:text-base text-sm font-semibold  border-red-500 border-b-2 ">
              Pulsa
            </button>
            <button className="md:px-8 md:py-2 px-2 py-1 md:text-base text-sm font-semibold ">
              Paket Data
            </button>
            <button className="md:px-8 md:py-2 px-2 py-1 md:text-base text-sm font-semibold ">
              E-wallet
            </button>
            <button className="md:px-8 md:py-2 px-2 py-1 md:text-base text-sm font-semibold ">
              Listrik PLN
            </button>
          </div>
          <div className="flex w-full h-max gap-4 mt-2">
            <div className="w-full h-full">
              <label className="text-sm font-medium text-gray-700">
                Nomor Telepon
              </label>
              <input
                type="text"
                className="block w-full pl-2 md:py-2 py-0.5 mt-2 border border-gray-300 rounded-md shadow-sm placeholder:text-xs md:placeholder:text-base"
                placeholder="Masukan Nomor"
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium text-gray-700">
                Nominal
              </label>
              <select className=" block w-full md:py-2 py-[5px] mt-2 border border-gray-300 rounded-md shadow-sm pl-2 md:text-base text-xs text-slate-500">
                <option className="optionstyle ">Pilih Nominal</option>
                <option className="optionstyle">Rp 10.000</option>
                <option className="optionstyle">Rp 20.000</option>
                <option className="optionstyle">Rp 30.000</option>
                <option className="optionstyle">Rp 50.000</option>
                <option className="optionstyle">Rp 100.000</option>
                <option className="optionstyle">Rp 150.000</option>
              </select>
            </div>
            <div className="h-full self-end mb-0.5">
              <button className="px-7 md:py-2 py-0.5 bg-red-500 text-white rounded-md">
                Beli
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUp;
