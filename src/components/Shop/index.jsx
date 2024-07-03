import React, { useEffect, useState } from "react";
import axios from "axios";

import TopUp from "./topup";
import Banner from "./banner";

const ShopPages = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <main className="pt-24 h-full">
        <div className="container mx-auto p-4 h-full">
          <Banner />
          <TopUp />
        </div>
        <div className="px-10 relative">
          <div id="card" className="relative overflow-x-hidden ">
            <div className="max-w-full container">
              <div className="">
                <h1 className="text-2xl font-bold mb-2">Product Recomended</h1>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8 -z-20">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between p-3">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a href="#">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              ></span>
                              {product.title}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.category}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopPages;
