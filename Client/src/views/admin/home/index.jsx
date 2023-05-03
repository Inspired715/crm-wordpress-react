import Banner from "./components/Banner";
import HistoryCard from "./components/HistoryCard";
import TotalSpent from "views/admin/home/components/TotalSpent";
const Dashboard = () => {
  return (
    <div className="grid h-full grid-cols-1 gap-5 2xl:grid-cols-8 overflow-auto">
      <div className="col-span-1 2xl:col-span-5 h-fit w-full">
        <Banner />
        <div className="mb-5 mt-5 flex items-center justify-between w-full">
          <TotalSpent />
        </div>
      </div>
      <div className="col-span-1 2xl:col-span-3 h-full w-full rounded-xl">  
        <HistoryCard />
      </div>
    </div>
  );
};

export default Dashboard;
