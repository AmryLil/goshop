import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const image = {
    backgroundImage: 'url("/img/thumbnail6.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "top",
  };
  return (
    <div
      style={image}
      className="flex  flex-col justify-center items-center gap-5 h-[40vh] mt-[10vh] md:mt-24 md:h-[85vh]"
    >
      <div className="flex flex-col justify-start w-full md:pl-32 pl-4">
        <h1 className="md:text-5xl text-2xl font-semibold">
          Welcome to{" "}
          <span className="text-red-800 font-bold block">GOSHOP</span>
        </h1>
        <h3 className=" md:text-2xl text-lg font-semibold md:mb-3 hidden md:block">
          Fast Shooping
        </h3>
        <Link to={"/shop"}>
          <button className="text-sm px-3 py-1 bg-red-800 w-max md:py-1.5 md:px-7 text-slate-50 font-bold md:text-xl rounded-lg mt-2 md:mt-0">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
