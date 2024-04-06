import Image from "next/image";
import Chart from "./OverviewItems/Chart";

const Overview = () => {
  return (
    <div className=" mt-24 z-30 ml-72 mr-10 w-full">
      <div className="">
        <div className="flex space-x-3">
          <div className="bg-white text-gray-500 flex space-x-3 w-60 pl-4 py-3">
            <div>
              <p className="text-xs">Daily Transaction Volume</p>
              <h1 className="text-[#262626]">2,342</h1>
            </div>
            <Image
              src="/smallchart.svg"
              layout="fixed"
              width={50}
              height={50}
              alt="Your SVG"
            />
          </div>
          <div className="bg-white text-gray-500 flex space-x-3 w-60 pl-4 py-3">
            <div>
              <p className="text-xs">Daily Transaction Value</p>
              <h1 className="text-[#262626]">₦4,000,000</h1>

            </div>
            <Image
              src="/smallchart.svg"
              layout="fixed"
              width={50}
              height={50}
              alt="Your SVG"
            />
          </div>
          <div className="w-3"></div>
          <div className="bg-white text-gray-500 flex space-x-3 w-60 pl-4 py-3">
            <div>
              <p className="text-xs">Daily Transaction Volume</p>
              <h1 className="text-[#262626]">452,000</h1>
            </div>
            <Image
              src="/smallchart.svg"
              layout="fixed"
              width={50}
              height={50}
              alt="Your SVG"
            />
          </div>
          <div className="bg-white text-gray-500 flex space-x-3 w-60 pl-4 py-3">
            <div>
              <p className="text-xs">Daily Transaction Value</p>
              <h1 className="text-[#262626]">₦4,000,000</h1>
            </div>
            <Image
              src="/smallchart.svg"
              layout="fixed"
              width={50}
              height={50}
              alt="Your SVG"
            />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      <Chart />
    </div>
  );
};

export default Overview;
