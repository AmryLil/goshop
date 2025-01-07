import React from "react";

const OrderHistory = () => {
  const orders = [
    {
      storeName: "Automax Zen",
      productName: "Phone Holder Mat Alas Mobil Dashboard Anti Slip",
      variant: "Merah, 1 Pcs",
      priceBeforeDiscount: "Rp65.000",
      priceAfterDiscount: "Rp48.750",
      orderTotal: "Rp49.558",
      status: "TELAH DINILAI",
      deliveryInfo: "Pesanan telah sampai diterima oleh Yang bersangkutan",
    },
    {
      storeName: "CONDA_STORE",
      productName:
        "Parfum mobil/Dashboard Parfum Mobil/Parfum mobil dashboard pesawat...",
      variant: "Perak helikopter",
      priceBeforeDiscount: "Rp200.000",
      priceAfterDiscount: "Rp72.000",
      orderTotal: "Rp72.000",
      status: "TELAH DINILAI",
      deliveryInfo: "Pesanan telah sampai diterima oleh Lainnya",
    },
  ];

  return (
    <div className="p-4 w-full self-start">
      <nav className="flex space-x-4 border-b-2 pb-2 ">
        <a href="#" className="text-red-500">
          Semua
        </a>
        <a href="#" className="hover:text-red-500">
          Belum Bayar
        </a>
        <a href="#" className="hover:text-red-500">
          Sedang Dikemas
        </a>
        <a href="#" className="hover:text-red-500">
          Dikirim
        </a>
        <a href="#" className="text-red-500">
          Selesai
        </a>
        <a href="#" className="hover:text-red-500">
          Dibatalkan
        </a>
        <a href="#" className="hover:text-red-500">
          Pengembalian Barang
        </a>
      </nav>

      <div className="space-y-6 mt-4">
        {orders.map((order, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <div className="flex mb-4">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image URL
                alt="product"
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="font-medium">{order.productName}</h3>
                <p className="text-gray-600">{order.variant}</p>
                <div className="mt-2 text-red-500 line-through">
                  {order.priceBeforeDiscount}
                </div>
                <div className="text-red-500 font-bold">
                  {order.priceAfterDiscount}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="font-bold text-xl text-red-500">
                Total Pesanan: {order.orderTotal}
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Beli Lagi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
