import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";


const Payments = () => {
  // Hard-coded payment data
  const payments = [
    {
      itemType: "Item 1",
      price: 100,
      transactionNo: "123456",
      time: "10:00 AM",
      order: "Reconciled",
    },
    {
      itemType: "Item 2",
      price: 200,
      transactionNo: "789012",
      time: "11:00 AM",
      order: "Reconciled",
    },
    {
        itemType: "Item 2",
        price: 200,
        transactionNo: "789012",
        time: "11:00 AM",
        order: "Reconciled",
      },
      {
        itemType: "Item 2",
        price: 200,
        transactionNo: "789012",
        time: "11:00 AM",
        order: "Reconciled",
      },
      {
        itemType: "Item 2",
        price: 200,
        transactionNo: "789012",
        time: "11:00 AM",
        order: "Reconciled",
      },
      {
        itemType: "Item 2",
        price: 200,
        transactionNo: "789012",
        time: "11:00 AM",
        order: "Reconciled",
      },
      {
        itemType: "Item 2",
        price: 200,
        transactionNo: "789012",
        time: "11:00 AM",
        order: "Reconciled",
      },
      {
        itemType: "Item 2",
        price: 200,
        transactionNo: "789012",
        time: "11:00 AM",
        order: "Reconciled",
      },
      {
        itemType: "Item 2",
        price: 200,
        transactionNo: "789012",
        time: "11:00 AM",
        order: "Reconciled",
      },
      {
        itemType: "Item 2",
        price: 200,
        transactionNo: "789012",
        time: "11:00 AM",
        order: "Reconciled",
      },
    // Add more payment data...
  ];

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
        <div className="flex space-x-4 justify-center items-center">
          <p>Show</p>
          <select className="p-2">
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
            <th scope="col" className="py-3 pl-4 w-1/5 font-normal">
              Item Type
            </th>
            <th scope="col" className="py-3 w-1/5 font-normal">
              Price
            </th>
            <th scope="col" className="py-3 w-1/5 font-normal">
              Transaction No
            </th>
            <th scope="col" className="py-3 w-1/5 font-normal">
              Time
            </th>
            <th scope="col" className="py-3 w-1/5 font-normal">
              Order
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {payments.map((payment, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 pl-4 w-1/5">{payment.itemType}</td>
              <td className="py-3 w-1/5">{payment.price}</td>
              <td className="py-3 w-1/5">{payment.transactionNo}</td>
              <td className="py-3 w-1/5">{payment.time}</td>
              <td className="py-3 w-1/5 flex">
                <span>{payment.order}</span>
                <RiArrowDownSLine size={24} color="green" />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
