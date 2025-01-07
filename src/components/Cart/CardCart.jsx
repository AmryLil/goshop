import { useState } from "react";

export const CardCart = ({
  ID,
  title,
  storeName,
  qty,
  price,
  variant,
  productPicture,
  idDelete,
  onDelete,
  isChecked,
  handleSumValue,
}) => {
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      handleSumValue(event.target.value, ID, title, qty);
    } else {
      handleSumValue("", ID);
    }
  };

  return (
    <div className="flex w-full">
      <div className="mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={isChecked}
          onChange={handleCheckboxChange}
          value={price}
        />
      </div>
      <div className="border md:p-4 p-2 rounded-md mb-4 bg-white w-full relative">
        <div className="flex justify-between items-center mb-2">
          <img
            src={productPicture}
            alt="Course 1"
            className="w-16 h-16 md:mr-4 mr-2"
          />
          <div className="flex-grow">
            <h3 className="md:text-lg text-sm font-semibold">{title}</h3>
            <h6 className="md:text-base text-sm">{storeName}</h6>
            <input type="number" className="w-7 text-sm" value={qty} />
          </div>
          <div className="self-start">
            <p className="md:text-lg text-sm font-semibold ">{price}</p>
          </div>
        </div>
        <div className="md:flex justify-end space-x-4 absolute right-2 bottom-1 ">
          <button className="text-blue-500 text-xs md:text-base">
            {variant}
          </button>
          <button
            onClick={() => onDelete(idDelete)}
            className="text-red-500 text-xs md:text-base"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
