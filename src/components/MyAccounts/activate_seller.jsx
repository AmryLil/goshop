import React, { useState } from "react";

const ActivateSeller = () => {
  return (
    <>
      <h1 className="text-6xl font-bold  ml-2 absolute top-3.5 start-7 text-red-800">
        Toko Saya
      </h1>
      <div className="px-6 pt-9 bg-white shadow-sm rounded-md w-full flex-col flex h-[86vh]  items-center">
        <div className="w-full flex mt-2 rounded-lg overflow-hidden h-[73vh]">
          <div className="w-[60%] p-4 pt-2.5 space-y-3.5">
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className="flex md:w-full items-center text-red-800 dark:text-red-800 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Informasi{" "}
                  <span className="hidden sm:inline-flex sm:ms-2">Diri</span>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2">2</span>
                  Informasi{" "}
                  <span className="hidden sm:inline-flex sm:ms-2">Toko</span>
                </span>
              </li>
              <li className="flex items-center">
                <span className="me-2">3</span>
                Konfirmasi
              </li>
            </ol>

            <div>
              <label
                class="block mb-1 font-medium text-gray-900 text-sm"
                for="multiple_files"
              >
                Foto KTP
              </label>
              <input
                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer   placeholder-gray-400 py-2 border-red-800 pl-2"
                id="multiple_files"
                type="file"
                multiple
              />
            </div>
            <Input
              label={"Nama Lengkap"}
              type={"text"}
              placeholder={"Nama sesusai KTP"}
            />
            <Input
              label={"Nomor Induk Keluarga(NIK)"}
              type={"text"}
              placeholder={"NIK sesuai KTP"}
            />
            <Input
              label={"Nomor Telepon"}
              type={"number"}
              placeholder={"Masukkan nomor telpon"}
            />
            <Input
              label={"Email"}
              type={"email"}
              placeholder={"example@gmai.com"}
            />
          </div>
          <div className="bg-slate-500  w-[40%]">
            <img
              src="/img/sellerform.jpg"
              alt=""
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>
      <button className="py-3 px-20 rounded-md shadow-sm bg-red-800 text-slate-50 font-semibold absolute end-16 bottom-4 text-xl tracking-widest">
        Selanjutnya
      </button>
    </>
  );
};

const Input = ({ label, type, placeholder }) => {
  return (
    <div className=" ">
      <label
        for={label}
        className="block mb-1 font-medium text-gray-900 text-sm"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className="bg-transparent text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-red-800 border"
      />
    </div>
  );
};
export default ActivateSeller;
