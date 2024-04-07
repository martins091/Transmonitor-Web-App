import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

const Payments = () => {
  // Hard-coded payment data
  const payments = [
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Reconcilled",
    },
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Pending",
    },
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Reconcilled",
    },
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Reconcilled",
    },
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Pending",
    },
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Un-reconcilled",
    },
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Reconcilled",
    },
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Un-reconcilled",
    },
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Pending",
    },
    {
      itemType: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transactionNo: "1234567890",
      time: "12:30",
      order: "Reconcilled",
    },
  ];
  const getOrderStatusColor = (order) => {
    switch (order) {
      case "Reconcilled":
        return { textColor: "#27AE60", bgColor: "#27AE60" };
      case "Pending":
        return { textColor: "#EBC315", bgColor: "#EBC315" };
      case "Un-reconcilled":
        return { textColor: "#C4C4C4", bgColor: "#C4C4C4" };
      default:
        return { textColor: "", bgColor: "" };
    }
  };

  return (
    <div className="mt-4">
      <h1 className="text-[#262626] font-semibold mt-2 mb-4 text-2xl">
        Payments
      </h1>
      <div className="flex space-x-8 justify-between items-center">
        <div className="flex space-x-6">
          <p className="-ml-8">showing</p>
          <div className="flex space-x-2 justify-center items-center text-[#1875F0]">
            <p>20</p>
            <span>
              <RiArrowDownSLine />
            </span>
          </div>
          <p className="pr-10">out of 500 Payments</p>
          <div className="flex items-center border-b w-80 border-[#787878] gap-6 pb-1.5 text-[#979797]">
            <AiOutlineSearch size={20} />
            <input
              type="text"
              placeholder="Search payments"
              className="focus:outline-none bg-inherit font-Segoe UI text-sm"
            />
          </div>
        </div>
        <div className="flex space-x-4 justify-center items-center pr-20">
          <p>Show</p>
          <select className="py-2 px-4 border-2 w-full bg-[#F3F4F6]">
            <option value="">All</option>
            <option value="">Reconcilled</option>
            <option value="">Un-reconcilled</option>
            <option value="">Settled</option>
            <option value="">Unsettled</option>
          </select>
        </div>
      </div>
      <table className="w-full rounded text-left font-light mt-4 text-[#979797] font-sm">
        <thead className="bg-[#EAEEF0] text-left">
          <tr className="border-b">
            <th scope="col" className="py-4 pl-6 font-normal">
              Item Type
            </th>
            <th scope="col" className="py-4 font-normal">
              Price
            </th>
            <th scope="col" className="py-4 font-normal">
              Transaction No
            </th>
            <th scope="col" className="py-4 font-normal">
              Time
            </th>
            <th scope="col" className="py-4 font-normal">
              Order
            </th>
            <th scope="col" className="py43 font-normal"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {payments.map((payment, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 flex justify-center items-center space-x-4">
                <div className="w-8 h-8 flex justify-center items-center rounded-full -ml-14 bg-[#7F8FA4] text-xs text-white">
                  VW
                </div>
                <div className="text-[#414042]"> {payment.itemType}</div>
              </td>
              <td className="py-4">{payment.price}</td>
              <td className="py-4">{payment.transactionNo}</td>
              <td className="py-4 ">{payment.time}</td>
              <td className="py-4 w-48">
  <div className="flex justify-center items-center space-x-2 border-2 mr-8 border-[#CCCFD4] rounded-full py-2">
    <div>
      <p className="w-3 -ml-4 rounded-full h-3" style={{ backgroundColor: getOrderStatusColor(payment.order).bgColor }}></p>
    </div>
    <div className={`text-sm`} style={{ color: getOrderStatusColor(payment.order).textColor }}>{payment.order}</div>
  </div>
</td>


              <td className="py-4 cursor-pointer">
                <RiArrowDownSLine size={30} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between my-5">
        <div className="">
          <h1>
          Showing 1 to 10 of 500 entries
          </h1>
        </div>
        <div className="flex">
          <p className="px-2 border py-1 cursor-pointer">Previous</p>
          <p className="px-2 border py-1 bg-[#1875F0] text-white cursor-pointer">1</p>
          <p className="px-2 border py-1 cursor-pointer">2</p>
          <p className="px-2 border py-1 cursor-pointer">Next</p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
