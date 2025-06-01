import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-fit h-10 p-1 flex items-center justify-end gap-2 bg-white rounded-4xl z-50 cursor-pointer group transition-all duration-500">
      <div>
        <p className="text-[12px] pl-4 hover:font-bold">Menu</p>
      </div>
      <div className="bg-black rounded-full p-2">
        <IoMdMenu className="text-white transition-transform duration-500 group-hover:rotate-[360deg]" />
      </div>
    </div>
  );
};

export default Navbar;
