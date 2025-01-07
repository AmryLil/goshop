import { Link } from "react-router-dom";

export const SumSection = ({
  subTotal,
  query,
  data,
  handleBtnCancel,
  handleBtnCO,
}) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Mengonversi angka ke format IDR
  const formattedNumber = formatter.format(subTotal);
  return (
    <div className=" w-full h-full p-2  md:block rounded-r-md ml-4 bg-gray-900 text-slate-50">
      <div className=" p-4">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between mb-4 md:mb-2">
          <p>Subtotal</p>
          <p>{formattedNumber}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold">Alamat Pengiriman</h2>
          <div className="mt-2 p-4 bg-gray-100 rounded-md text-slate-900">
            <p className="font-semibold">Uli Amry (+62) 82378398419</p>
            <p>KOTA MAKASSAR - TAMALANREA, SULAWESI SELATAN, ID 90245</p>
            <button className="text-blue-500 mt-2 hover:underline">Ubah</button>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-bold">Opsi Pengiriman</h2>
          <div className="mt-4 p-4 bg-gray-100 rounded-md flex justify-between text-slate-900">
            <div>
              <p>Hemat</p>
              <p className="text-sm text-gray-500">
                Estimasi tiba: 30 Ags - 2 Sep
              </p>
            </div>
            <div className="text-right">
              <button className="text-blue-500 hover:underline">Ubah</button>
              <p className="font-semibold">Rp32.500</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-slate-50 rounded-md my-4">
          <div className="flex items-center text-slate-900">
            <img src="img/voucher.png" alt="voucherlogo" className="w-10" />
            <div>Voucher</div>
          </div>
          <button className="bg-yellow-400 text-slate-900 font-semibold rounded-r-md px-6 py-2">
            <h1>Add</h1>
          </button>
        </div>

        <div className="flex gap-2 mt-7">
          <button
            onClick={handleBtnCO}
            className={`bg-blue-500 text-white w-full py-2 rounded-md `}
          >
            Checkout Now
          </button>
          <button
            onClick={handleBtnCancel}
            className={`bg-red-700 text-white w-[30%] py-2 rounded-md `}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
