import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DesktopMenu = ({ ClassName }) => {
  return (
    <div className={`items-center space-x-8 ${ClassName}`}>
      <Link
        to={"/"}
        className="border-red-800 text-gray-900 inline-flex items-center px-1 pt-1 border-b-4 text-base font-medium"
      >
        Home
      </Link>
      <Link
        to={"/shop"}
        className="border-transparent text-gray-500 hover:border-red-800 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-base font-medium"
      >
        Shop
      </Link>
      <Link
        to="/myaccount"
        className="border-transparent text-gray-500 hover:border-red-800 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-base font-medium"
      >
        My Account
      </Link>
      <Link
        to={"/login"}
        className="border-transparent text-gray-500 hover:border-red-800 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-base font-medium"
      >
        Login
      </Link>
      <Link to={"/cart"}>
        <button className="bg-white p-2 rounded-full relative  hover:text-red-800 hidden md:block">
          <FaCartShopping size={27} />
          <div className="rounded-full bg-red-800 p-0.5 px-1.5 absolute top-0 -right-1">
            <h1 className="text-white text-[8px] font-bold">1</h1>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default DesktopMenu;
