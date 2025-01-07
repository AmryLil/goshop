import React, { useEffect, useState } from "react";
import { SumSection } from "../components/Cart/SumSection";
import { CardCart } from "../components/Cart/CardCart";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import axios from "axios";
import { getCookie } from "../services/handleCart";

const ShoppingCart = () => {
  const { product, handleFetchCart, handleDeleteCart } = useCart();
  const [isChecked, setIsChecked] = useState();
  const [tokenMidtrans, setTokenMidtrans] = useState([]);

  const [itemCheckout, setItemCheckout] = useState([]);

  const token = getCookie("token");
  const handleCheckoutItem = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/payment",
        itemCheckout,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      window.snap.pay(res.data.data.token);
      console.log(res);
      console.log(itemCheckout);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetchCart();
  }, []);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      // Pilih semua item
      const allItems = product.map((item) => ({
        product_idid: item.ID,
        name: item.Product.Title,
        qty: item.Quantity,
        price: item.Product.Price,
      }));
      setItemCheckout(allItems);
      setSum(allItems.map((item) => ({ id: item.id, number: item.number })));
    } else {
      // Kosongkan pilihan item
      setItemCheckout([]);
      setSum([]);
    }
  };

  const [sum, setSum] = useState([]);
  const handleValueSum = (value, id, name, qty) => {
    if (value) {
      const number = parseInt(value.replace(/Rp\s?|[.]/g, ""), 10);

      setItemCheckout((prevValue) => {
        const exists = prevValue.some((item) => item.product_id === id);
        if (!exists) {
          return [
            ...prevValue,
            { product_id: id, name: name, qty: qty, price: number },
          ];
        }
        // Jika item sudah ada, tidak perlu mengubah state
        return prevValue;
      });

      setSum((prevValue) => {
        const exists = prevValue.some((item) => item.id === id);
        if (!exists) {
          return [...prevValue, { id, number }];
        }
        // Jika item sudah ada, tidak perlu mengubah state
        return prevValue;
      });
    } else {
      // Hapus item dari itemCheckout dan sum jika tidak ada nilai
      setItemCheckout((prevValue) =>
        prevValue.filter((item) => item.product_id !== id)
      );
      setSum((prevValue) => prevValue.filter((item) => item.id !== id));
    }
  };

  const total = sum.reduce((accumulator, current) => {
    return accumulator + current.number;
  }, 0);

  const [isCheckout, setIsCheckout] = useState(false);
  const handleBtnCheckout = () => {
    setIsCheckout(!isCheckout);
  };

  const handleButtonCO = () => {};

  return (
    <div className="relative h-full flex flex-col md:flex-row px-16 gap-6 bg-gray-200 pb-7 scrollable-hidden">
      <h1 className="flex text-6xl font-bold  ml-9 absolute top-0.5 start-12 text-red-800 z-50">
        Cart.
      </h1>
      <div className=" flex bg-slate-50 w-full h-full px-8 mt-8 pt-8 rounded-md  border-red-700 z-0 relative">
        <div
          className={`pt-3 ${
            isCheckout
              ? " w-[63%] transition-all duration-500 ease-in-out"
              : " w-full transition-all duration-500 ease-in-out"
          }`}
        >
          <div className="mb-4 flex justify-between ">
            <div>
              <input
                type="checkbox"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              <label>Select all</label>
            </div>
            <div>
              <h1>{sum.length} Product yang dipilih</h1>
            </div>
          </div>
          <div className="overflow-y-auto scrollable-hidden h-[70vh]">
            {product?.map((item, index) => (
              <CardCart
                ID={item.ID}
                key={index}
                title={item.Product.Title}
                qty={item.Quantity}
                price={Math.round(item.Product.Price).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
                productPicture={item.Product.ProductPictures}
                idDelete={item.ID}
                onDelete={handleDeleteCart}
                handleSumValue={handleValueSum}
                // isChecked={isChecked}
              />
            ))}
          </div>
          <div className="flex justify-between items-center p-2 mb-1">
            <div>Back to shop</div>
          </div>
        </div>

        <div
          className={`w-[37%] h-full  right-3 top-0  ${
            isCheckout
              ? "absolute transform -translate-x-0 duration-500 ease-in-out opacity-100 transition-all"
              : " transform translate-x-[100vh] duration-500 ease-in-out opacity-0 transition-all absolute"
          }`}
        >
          <SumSection
            handleBtnCO={handleCheckoutItem}
            subTotal={total}
            handleBtnCancel={handleBtnCheckout}
            query={`${sum
              ?.map((item, index) => {
                return `id=${item.id}${index + 1 === sum.length ? "" : "&"}`;
              })
              .join("")}`}
          />
        </div>
      </div>
      <button
        onClick={handleBtnCheckout}
        className={`py-3 px-10 rounded-md shadow-sm bg-red-800 text-slate-50 font-semibold  end-28 bottom-3 text-xl tracking-widest ${
          isCheckout ? "hidden " : " absolute "
        }`}
      >
        Checkout
      </button>
    </div>
  );
};

export default ShoppingCart;
