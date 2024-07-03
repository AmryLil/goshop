import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 mt-12">
      <div className="container mx-auto px-4 text-white">
        <div className="flex flex-col items-center justify-between">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
