export const ButtonWarna = ({ onClick, children }) => {
  return (
    <>
      <button
        onClick={onClick}
        className=" border border-slate-400 py-1 px-4 text-black rounded-md shadow-sm"
      >
        {children}
      </button>
    </>
  );
};
