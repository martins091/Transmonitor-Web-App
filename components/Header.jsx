import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full h-16 z-40 fixed bg-white shadow-md flex items-center justify-between px-8 header-container">
      <div className="flex items-center gap-40 ">
        <h1 className="text-[#1875F0] font-bold text-2xl">TransMonitor</h1>
        <div className="flex items-center gap-6 text-[#979797]">
          <AiOutlineSearch size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none font-Segoe UI text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-8 text-[#647787] ">
          <p className="font-SegoeUI text-sm">Support</p>
          <p className="font-SegoeUI text-sm">FAQ</p>

          <div className="relative">
            <IoIosNotificationsOutline size={30} className="text-[#647787]" />
            <div className="absolute top-0 right-0 -mt-2 -mr-1 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
              8
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-[#647787] text-right text-xs">Hello</p>
            <h1 className="font-medium text-sm text-[#647787]">Oluwaleke Ojo</h1>
          </div>
          <div>
            <img
              src="images/profile.jpeg"
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
