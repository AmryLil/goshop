import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const image = {
    backgroundImage: 'url("/img/thumbnail6.jpg")',
    backgroundSize: "cover", // Menyesuaikan gambar untuk mengisi ruang latar belakang
    backgroundPosition: "top", // Menengahkan gambar di latar belakang
    // Menggunakan tinggi layar penuh
  };
  return (
    <div
      style={image}
      className="md:flex hidden flex-col justify-center items-center gap-5 h-[350px] mt-24 md:h-[85vh]"
    >
      <div className="flex flex-col justify-start w-full pl-32">
        <h1 className="text-5xl font-semibold">
          Welcome to <span className="text-red-800 font-bold">GOSHOP</span>
        </h1>
        <h3 className="text-2xl font-semibold mb-3">Fast Shooping</h3>
        <Link to={"/shop"}>
          <button className="bg-red-800 w-max py-1.5 px-7 text-slate-50 font-bold text-xl rounded-lg">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
