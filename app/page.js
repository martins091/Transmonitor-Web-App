import Header from "@/components/Header";
import Overview from "@/components/Overview";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden' }}>
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
