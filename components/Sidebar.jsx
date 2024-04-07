import { PiGaugeLight } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";
import { BsRecordCircle } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { PiNoteThin } from "react-icons/pi";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="fixed left-0 h-100 w-80 bg-white pt-10 pl-8 -mt-2 -ml-8 pr-4 pb-20 text-[#647787] sidebar-container">
      <div>
        <div className="text-[#647787] ">
          <div>
            <button className="bg-[#27AE60] py-3 rounded-full px-8 text-white font-medium cursor-pointer">
              GENERATE INVOICE
            </button>
            <p className="mt-10 cursor-pointer">Main</p>
          </div>
          <div className="flex gap-4 mt-6 bg-[#E8F1FD] border-l-4 border-[#1875F0] py-3 -ml-7 -mr-4 pl-6 cursor-pointer">
            {/* <PiGaugeLight size={30} /> */}
            <Image
              src="/overviewIcon.svg"
              layout="fixed"
              width={35}
              height={35}
              alt="Your SVG"
            />
            <p className="">Overview</p>
          </div>
        </div>
      </div>

      <div className="my-4">
        <p>Payment</p>
        <div className="flex space-x-4 my-3">
        <Image
              src="/wallet-1.svg"
              layout="fixed"
              width={30}
              height={30}
              alt="Your SVG"
            />
          <p>All Payments</p>
        </div>
        <div className="relative flex space-x-4 my-3">
        <Image
              src="/wallet-1.svg"
              layout="fixed"
              width={30}
              height={30}
              alt="Your SVG"
            />
          <div className="absolute top-6 left-1 -mt-2 -mr-1 bg-white w-4 h-4 flex items-center justify-center">
          <IoCheckmarkCircleOutline />
          </div>
          <p>Reconciled Payment</p>
        </div>
        <div className="relative flex space-x-4 my-3">
        <Image
              src="/wallet-1.svg"
              layout="fixed"
              width={30}
              height={30}
              alt="Your SVG"
            />
          <div className="absolute top-6 left-1 -mt-2 -mr-1  bg-white w-4 h-4 flex items-center justify-center">
          <MdOutlineCancel />
          </div>
          <p>Un - Reconciled Payment</p>
        </div>
        <div className="flex space-x-4 my-3">
          <BsRecordCircle size={25} />
          <p>All Payments</p>
        </div>
      </div>

      <div className="mt-8">
        <p>Order</p>
        <div className="flex space-x-4 my-3">
        <Image
              src="/note-1.svg"
              layout="fixed"
              width={30}
              height={30}
              alt="Your SVG"
            />
          <p>All Orders</p>
        </div>
        
        <div className="relative flex space-x-4 my-3">
        <Image
              src="/note-2.svg"
              layout="fixed"
              width={35}
              height={35}
              alt="Your SVG"
            />
          <p>Reconciled Orders</p>
        </div>
        <div className="relative flex space-x-4 my-3">
        <Image
              src="/note-3.svg"
              layout="fixed"
              width={35}
              height={35}
              alt="Your SVG"
            />
          
          <p>Pending Orders</p>
        </div>
        <div className="flex space-x-4 mt-6">
          <CiUser size={25} />
          <p>Merchant Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
