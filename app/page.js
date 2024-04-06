import Header from "@/components/Header";
import Overview from "@/components/Overview";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
      <Sidebar />
      <div className="flex-1 flex justify-center items-center">
        <Overview />
      </div>
    </div>
    </div>
  );
}
