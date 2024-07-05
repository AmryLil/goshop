import { CiCamera } from "react-icons/ci";

const Profile = () => {
  return (
    <>
      <h1 className="text-6xl font-bold  ml-2 absolute top-3.5 start-7 text-red-800">
        My Profile
      </h1>
      <div className="p-4 bg-white shadow-sm rounded-md w-full flex h-[85vh] justify-center items-center">
        <div className=" w-1/2 h-full flex flex-col items-start justify-center py-16 pt-24 ">
          <Input label={"USER NAME"} value={"ulilamry___"} />
          <Input label={"NAMA"} value={"Ulil Amry AQ"} />
          <Input label={"EMAIL"} value={"example123@gmail.com"} />
          <Input label={"NOMOR TELEPON"} value={"+62 893-3273-2324"} />
          <Input label={"NAMA TOKO"} value={"enknown"} />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center py-5 px-12 gap-10">
          <div className="relative border-4 border-red-800 rounded-2xl shadow-md">
            <img
              className=" w-60 h-60 rounded-2xl"
              src="/img/noprofile.png"
              alt="image description"
            />
            <div className="p-1 rounded-full bg-white absolute end-0 -bottom-4">
              <CiCamera size={30} />
            </div>
          </div>
          <p className="text-slate-700 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex,
            similique laborum nesciunt rerum distinctio lor
          </p>
        </div>
      </div>
      <button className="py-3 px-20 rounded-md shadow-sm bg-red-800 text-slate-50 font-semibold absolute end-16 bottom-6 text-xl tracking-widest">
        UPDATE
      </button>
    </>
  );
};

export default Profile;

const Input = ({ label, value }) => {
  return (
    <div className="mb-4 w-full">
      <label for={label} className="block text-base font-medium text-slate-500">
        {label}
      </label>
      <input
        value={value}
        type="text"
        id={label}
        className="ring-red-800 border-b border-red-800 bg-white text-gray-800  block w-full p-2.5 active:border-b focus:border-red-800 active:border-red-300 text-base font-semibold tracking-wider"
      />
    </div>
  );
};
