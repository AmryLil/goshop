import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const CheckoutPage = () => {
  const { product, handleFetchCart, handleDeleteCart } = useCart();
  const location = useLocation();
  const [idParams, setIdParams] = useState([]);
  useEffect(() => {
    handleFetchCart();
    const searchParams = new URLSearchParams(location.search);
    const idArray = searchParams.getAll("id");
    const intIdArray = idArray.map((id) => parseInt(id, 10));
    setIdParams(intIdArray);
  }, [location.search]);
  console.log(idParams);
  console.log(product);

  return (
    <div className="relative h-full flex flex-col md:flex-row bg-gray-100  py-10">
      <div className="container mx-auto  bg-white py-12  rounded-md px-5">
        <h1 className="text-6xl font-bold  ml-2 absolute top-2.5 start-12 text-red-800">
          Checkout
        </h1>
        <div className="mb-6">
          <h2 className="text-xl font-bold">Alamat Pengiriman</h2>
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="font-semibold">Uli Amry (+62) 82378398419</p>
            <p>
              Kos Alima, Jalan Kanjor, Tamalanrea Indah, Tamalanrea, KOTA
              MAKASSAR - TAMALANREA, SULAWESI SELATAN, ID 90245
            </p>
            <button className="text-blue-500 mt-2 hover:underline">Ubah</button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold">Produk Dipesan</h2>
          <div className="border md:p-4 p-2 rounded-md mb-4 bg-white w-full relative gap-2">
            {product
              ?.filter((item) => idParams.includes(item.ID))
              .map((item) => (
                <div
                  key={item.ID}
                  className="flex justify-between items-center mb-2 border rounded-md pr-2"
                >
                  <img
                    src={item.Product.ProductPictures}
                    alt="Product"
                    className="w-16 h-16 md:mr-4 mr-2"
                  />
                  <div className="flex-grow">
                    <h3 className="md:text-lg text-sm font-semibold">
                      {item.Product.Title}
                    </h3>
                    <h6 className="md:text-base text-sm">{item.StoreName}</h6>
                    <input
                      type="number"
                      className="w-7 text-sm"
                      value={item.Quantity}
                    />
                  </div>
                  <div className="self-start">
                    <p className="md:text-lg text-sm font-semibold">
                      {Math.round(item.Product.Price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold">Opsi Pengiriman</h2>
          <div className="mt-4 p-4 bg-gray-100 rounded-md flex justify-between">
            <div>
              <p>Hemat</p>
              <p className="text-sm text-gray-500">
                Garansi tiba: 30 Ags - 2 Sep
              </p>
              <p className="text-sm text-gray-500">
                Voucher s/d Rp10.000 jika pesanan belum tiba 2 Sep 2024.
              </p>
            </div>
            <div className="text-right">
              <button className="text-blue-500 hover:underline">Ubah</button>
              <p className="font-semibold">Rp32.500</p>
            </div>
          </div>
        </div>
        <button className="py-3 px-20 rounded-md shadow-sm bg-red-800 text-slate-50 font-semibold absolute end-16 bottom-6 text-xl tracking-widest">
          Make an Order
        </button>
        <div className="flex flex-col w-[40%] gap-2">
          <h2 className="text-xl font-bold mb-2">Summary</h2>
          <div className="flex justify-between">
            <div>Subtotal for product : </div>
            <div> Rp 120.000</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping cost : </div>
            <div> Rp 32.500</div>
          </div>
          <div className="flex justify-between">
            <div>Service fee : </div>
            <div> Rp 1000</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Total Price : </div>
            <div className="text-2xl font-bold text-red-700"> Rp 120.000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
