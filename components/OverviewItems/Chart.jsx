import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
// import MyChart from "./Mychart";

const Chart = () => {
  return (
    <div className="flex space-x-1 mt-6 ">
      <div className=" w-[60%] bg-white pt-4">
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between ml-6 mr-12">
            <div>
              <h1 className="font-semibold">Today: 5, Aug 2018</h1>
            </div>
            <div className="flex space-x-8 items-center">
              <div className="flex space-x-4 rounded-md py-1 justify-center items-center border text-gray-400 text-sx px-2 cursor-pointer">
                <p>1 Jan - 1 Jun</p>
                <RiArrowDownSLine />
              </div>
              <div className="flex space-x-2  ">
                <div className="border px-2 py-1 rounded-md cursor-pointer bg-[#FBFCFD]">
                  <RiArrowLeftSLine className="text-[#CED0DA]" />
                </div>
                <div className="border px-2 py-1 rounded-md cursor-pointer bg-[#FBFCFD]">
                  <RiArrowRightSLine className="text-[#CED0DA]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <Image
              src="/chartbg.svg"
              layout="fixed"
              width={650}
              height={650}
              alt="Your SVG"
            />
            <div className="absolute top-0">
              {/* <MyChart /> */}
              <div className="flex space-x-20 font-bold text-sm">
                <p className="ml-4">Jan</p>
                <p>Feb</p>
                <p>Mar</p>
                <p>Apr</p>
                <p>May</p>
                <p className="">Jun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="bg-white px-6 py-4">
          <div>
            <h1 className="text-[#262626] font-bold ">Orders</h1>
            <div className="flex mt-2">
              <div className="w-80 h-1 rounded-l-full bg-[#27AE60]"></div>
              <div className="w-20 h-1 rounded-r-full bg-[#FDC203]"></div>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <div>
                Pending Orders:{" "}
                <span className="text-[#FDC203] font-bold">20</span>
              </div>
              <div>
                Reconciled Order:{" "}
                <span className="text-[#27AE60] font-bold">80</span>
              </div>
              <div>
                Total Order:{" "}
                <span className="text-[#1875F0] font-bold">100</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-4">
          <div>
            <h1 className="text-[#262626] font-bold ">Payments</h1>
            <div className="flex mt-2">
              <div className="w-80 h-1 rounded-l-full bg-[#27AE60]"></div>
              <div className="w-20 h-1 rounded-r-full bg-[#FDC203]"></div>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <div>
                Un-reconcilled Payments:{" "}
                <span className="text-[#FDC203] font-bold">20</span>
              </div>
              <div>
                Reconcilled Payments:{" "}
                <span className="text-[#27AE60] font-bold">80</span>
              </div>
              <div>
                Total Payments:{" "}
                <span className="text-[#1875F0] font-bold">100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
