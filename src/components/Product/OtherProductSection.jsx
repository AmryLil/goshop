export const OtherProduct = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Lainnya dari toko ini</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white shadow rounded p-4">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Related Product 1"
            className="w-full mb-2"
          />
          <div className="text-gray-600">
            SS - STITCHING LOVE Sweater Oversize Remaja...
          </div>
          <div className="text-red-500 font-bold">Rp37.000</div>
          <div className="text-gray-500 line-through">Rp75.000</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Related Product 2"
            className="w-full mb-2"
          />
          <div className="text-gray-600">
            Jacket Crop Hoodie Wanita Long Girls LiveSweet...
          </div>
          <div className="text-red-500 font-bold">Rp37.500</div>
          <div className="text-gray-500 line-through">Rp59.500</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Related Product 3"
            className="w-full mb-2"
          />
          <div className="text-gray-600">
            SS - SWE LOVE Cardigan Wanita Korean Style Full...
          </div>
          <div className="text-red-500 font-bold">Rp39.999</div>
          <div className="text-gray-500 line-through">Rp54.500</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Related Product 4"
            className="w-full mb-2"
          />
          <div className="text-gray-600">
            SS - BASIC SHOES Sweatshirt Wanita Korean...
          </div>
          <div className="text-red-500 font-bold">Rp34.000</div>
          <div className="text-gray-500 line-through">Rp65.000</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Related Product 5"
            className="w-full mb-2"
          />
          <div className="text-gray-600">
            SS - SUMMER CAT Sweater Wanita Dan Pria Cute...
          </div>
          <div className="text-red-500 font-bold">Rp34.900</div>
          <div className="text-gray-500 line-through">Rp60.750</div>
        </div>
      </div>
    </div>
  );
};
