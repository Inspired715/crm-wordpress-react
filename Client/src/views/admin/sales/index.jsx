import SalesItem from "./components/SalesItem";

const Sales = () => {
  return (
    <div className="overflow-auto h-full">
      <div className="mt-3">
        <SalesItem />
      </div>
      <div className="mt-3">
        <SalesItem />
      </div>
      <div className="mt-3">
        <SalesItem />
      </div>
      <div className="mt-3">
        <SalesItem />
      </div>
      <div className="mt-3">
        <SalesItem />
      </div>
    </div>
  );
};

export default Sales;
