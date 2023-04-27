import Banner from "./components/Banner";
import HistoryCard from "./components/HistoryCard";
import TotalSpent from "views/admin/home/components/TotalSpent";
const Dashboard = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 2xl:grid-cols-2">
      <div className="col-span-1 h-fit w-full">
        <Banner />
        <div className="mb-5 mt-5 flex items-center justify-between w-full">
          <TotalSpent />
        </div>
      </div>
      <div className="col-span-1 h-full w-full rounded-xl">  
        <HistoryCard />
      </div>
    </div>
  );
};

export default Dashboard;
