import { IoMenu, IoClose } from "react-icons/io5";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-none bg-transparent fixed left-1 top-1 z-20"
    >
      {open ? (
        <IoClose className="text-black" size={24} />
      ) : (
        <IoMenu className="text-black" size={24} />
      )}
    </button>
  );
};

export default ToggleButton;
