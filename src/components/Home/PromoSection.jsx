import React from "react";
import { Link } from "react-router-dom";

const PromoSection = ({ products, error }) => {
  return (
    <div className="bg-red-50 p-4">
      <div className="container mx-auto flex">
        <div className="mr-4 hidden md:block">
          <img
            src="https://via.placeholder.com/400x550?text=Promo+Banner"
            alt="Promo Banner"
            className="w-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="">
            <h2 className="md:text-2xl text-xl font-bold text-green-700">
              GoShop Super Brand Day
            </h2>
            <p className="text-sm md:text-base">
              Discont s/d 60% | Bundle Hemat s/d 250RB
            </p>
          </div>
          <div className="container mx-auto py-4">
            {error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="group relative shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="w-full min-h-32 md:min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-52 lg:aspect-none">
                      <img
                        loading="lazy"
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="md:mt-4 mt-2 flex justify-between p-3">
                      <div>
                        <h3 className="md:text-sm text-xs text-gray-700 font-bold">
                          {product.title}
                        </h3>
                        <p className="mt-1 md:text-sm text-xs text-gray-500">
                          Diskon s/d {product.discountPercentage}%
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900 pl-1">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
