import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

const MainContent = () => {
  const [products, setProducts] = useState([]);
  const [productsSweater, setProductsSweater] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/furniture"
        );
        const data = await response.json();

        // Set the first 8 products
        if (data.products.length === 0) {
          setError("No products found in the specified category.");
        } else {
          setProducts(data.products.slice(0, 4));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products.");
      }
    };

    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { query: "sweater", per_page: 8 },
            headers: {
              Authorization:
                "Client-ID tIeMoCq3YeT4wlxAAUCreWJMrDvKqcRkzBzt1XYfDCU",
            },
          }
        );
        setProductsSweater(response.data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <main className="pt-8 flex flex-col gap-5">
        <div className="bg-red-50 p-4">
          <div className="container mx-auto flex">
            <div className="mr-4">
              <img
                src="https://via.placeholder.com/400x550?text=Promo+Banner"
                alt="Promo Banner"
                className="w-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="">
                <h2 className="text-2xl font-bold text-green-700">
                  GoShop Super Brand Day
                </h2>
                <p>Discont s/d 60% | Bundle Hemat s/d 250RB</p>
              </div>
              <div className="container mx-auto py-4">
                {error ? (
                  <p className="text-center text-red-500">{error}</p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="group relative shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-52 lg:aspect-none">
                          <img
                            loading="lazy"
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between p-3">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              {product.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Diskon s/d {product.discountPercentage}%
                            </p>
                          </div>
                          <p className="text-sm font-medium text-gray-900 pl-1">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* SweaterBrand */}
        <div className="p-4">
          <div className="container mx-auto">
            <div className="relative w-full h-[520px] ">
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
              <div className="absolute top-20 text-red-800 right-28 flex flex-col justify-center items-center">
                <h1 className="font-semibold text-6xl">Sweater Brand</h1>
                <h2 className="text-2xl text-slate-900 bg-slate-100 w-max px-2 py-0.5 rounded-lg mt-1">
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
                      <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-52 lg:aspect-none">
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
                            {product.alt_description || "No description"}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.user.name}
                          </p>
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
      </main>
    </>
  );
};

export default MainContent;
