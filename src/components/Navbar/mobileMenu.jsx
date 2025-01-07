import { Link } from "react-router-dom";

export const MobileMenu = ({ isMenuOpen }) => {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 bg-white shadow-lg transition-transform transform ${
        isMenuOpen ? "translate-y-0" : "translate-y-full"
      } z-40`}
    >
      <div className="flex flex-col p-4 space-y-4">
        <Link
          to={"/"}
          className="text-gray-900 text-base font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to={"/shop"}
          className="text-gray-500 hover:text-gray-700 text-base font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Shop
        </Link>
        <Link
          to="/myaccount"
          className="text-gray-500 hover:text-gray-700 text-base font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          My Account
        </Link>
        <Link
          to={"/login"}
          className="text-gray-500 hover:text-gray-700 text-base font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </Link>
      </div>
    </div>
  );
};
