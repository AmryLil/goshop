import { useState } from "react";
import { ButtonWarna } from "./ButtonColor";
// import { cartClick } from "../Cart/handleCartEffect";

export const MainSection = ({
  thumbnail,
  category,
  title,
  rating,
  price,
  description,
  addToCart,
  Checkout,
}) => {
  const [clicked, setClicked] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAddQty = (e) => {
    e.preventDefault();
    setQty((prevQty) => prevQty + 1); // Tambahkan dengan cara yang benar
    console.log("add");
  };

  const handleMinQty = (e) => {
    e.preventDefault();
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty)); // Kurangi hanya jika lebih besar dari 1
    console.log("min");
  };
  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  }

  const handleClick = () => {
    setClicked(true);
  };

  const priceFix = Number(price) * 9000;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="w-full h-[300px] md:h-[400px]">
          <img
            src={thumbnail}
            alt="Product"
            className={`w-full h-full object-contain filter transition-all duration-100 ]`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-4xl font-bold ">{title}</h1>

        <div className="text-red-500 text-xl md:text-3xl font-bold ">
          {formatRupiah(priceFix)}
        </div>

        <div className="mb-2">
          <div className="text-gray-600 font-bold mb-1 text-xl">
            Description
          </div>
          <div className="text-gray-600">{description}</div>
        </div>
        <div className="mb-2">
          <div className="text-gray-600">Pengiriman</div>
          <div>KOTA MAKASSAR</div>
        </div>

        <div className="flex items-center ">
          <span className="text-gray-600">Kuantitas</span>
          <div className="flex ml-4 justify-center items-center gap-4">
            <button
              onClick={handleMinQty}
              className="bg-gray-200 px-2 py-1 rounded-l"
            >
              -
            </button>
            <div>{qty}</div>
            <button
              onClick={handleAddQty}
              className="bg-gray-200 px-2 py-1 rounded-r"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            className={`cart-button ${
              clicked ? "clicked" : ""
            } py-5 md:w-1/2 rounded-lg`}
            onClick={handleClick}
          >
            <span class="add-to-cart">Add to cart</span>
            <span class="added">Added</span>
            <i class="fas fa-shopping-cart"></i>
            <i class="fas fa-box"></i>
          </button>

          <button
            className="bg-red-500 md:w-1/2 text-white px-8 py-2 rounded-lg"
            onClick={Checkout}
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};
