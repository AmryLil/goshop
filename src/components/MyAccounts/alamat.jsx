import React from "react";

const AddressItem = ({
  name,
  phone,
  address,
  city,
  province,
  id,
  isPrimary,
}) => (
  <div className="border rounded-lg p-4 mb-4 w-full">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-semibold">{name}</h2>
      {isPrimary && (
        <span className="text-red-500 border border-red-500 px-2 py-1 rounded">
          Utama
        </span>
      )}
    </div>
    <p>{phone}</p>
    <p>{address}</p>
    <p>
      {city}, {province}
    </p>
    <div className="flex space-x-8 mt-2">
      <button className="text-blue-500">Ubah</button>
      <button className="text-blue-500">Hapus</button>
      {!isPrimary && (
        <button className="text-blue-500">Atur sebagai utama</button>
      )}
    </div>
  </div>
);

const AddressList = () => {
  const addresses = [
    {
      id: 1,
      name: "Ulil Amry",
      phone: "(+62) 82378398419",
      address:
        "Kost Alima, Jalan Perintis Kemerdekaan No. 7, Tamalanrea Indah, Tamalanrea",
      city: "KOTA MAKASSAR",
      province: "SULAWESI SELATAN",
      isPrimary: true,
    },
    {
      id: 2,
      name: "Ulil Amry",
      phone: "(+62) 82378398419",
      address:
        "Jalan Poros, Dusun 4, Desa. Lametuna, Kodeoha (Rumah warna orange)",
      city: "KODEOHA, KAB. KOLAKA UTARA",
      province: "SULAWESI TENGGARA",
      isPrimary: false,
    },
  ];

  return (
    <>
      <h1 className="text-6xl font-bold  ml-2 absolute top-3.5 start-7 text-red-800">
        Alamat Saya
      </h1>
      <div className="p-4 bg-white shadow-sm rounded-md w-full flex-col flex h-[85vh] justify-center items-center">
        {addresses.map((address) => (
          <AddressItem key={address.id} {...address} />
        ))}
      </div>
      <button className="py-3 px-20 rounded-md shadow-sm bg-red-800 text-slate-50 font-semibold absolute end-16 bottom-6 text-xl tracking-widest">
        Tambah
      </button>
    </>
  );
};

export default AddressList;
