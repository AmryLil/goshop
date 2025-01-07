import React from "react";

const SweaterBrandSection = ({ productsSweater, error }) => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className="relative w-full md:h-[520px]">
          <div className="flex w-full h-full justify-center">
            <img
              src="/img/sweater1.jpg"
              alt=""
              className="w-1/2 object-cover"
            />
            <img
              src="/img/sweater2.jpg"
              alt=""
              className="w-1/2 object-bottom filter"
            />
          </div>
          <div className="absolute md:top-20 top-16 text-red-800 md:right-28 right-5 flex flex-col justify-center items-center">
            <h1 className="md:font-semibold font-bold md:text-6xl text-xl">
              Sweater Brand
            </h1>
            <h2 className="md:text-2xl text-sm text-slate-900 bg-slate-100 w-max px-2 py-0.5 rounded-lg mt-1">
              New Release 2024
            </h2>
          </div>
        </div>
        <div className="container mx-auto py-4">
          {error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productsSweater.map((product) => (
                <div
                  key={product.id}
                  className="group relative shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="w-full md:min-h-60 h-32 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-52 lg:aspect-none ">
                    <img
                      loading="lazy"
                      src={product.urls.small}
                      alt={product.alt_description}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between p-3">
                    <div>
                      <h3 className="text-sm text-gray-700 uppercase">
                        {product.alt_description.substring(0, 20) ||
                          "No description"}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900 pl-1">
                      $50
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SweaterBrandSection;
