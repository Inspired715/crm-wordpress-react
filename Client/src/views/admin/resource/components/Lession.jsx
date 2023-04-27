import React from "react";

const Lession = () => {
  return (
    <div className="col-span-1">
      <div className="rounded-[22px] p-[20px]" style={{ backgroundColor: `#D4B65E` }}>
          <video className="rounded-[20px]" width="100%" height="100%" controls >
          </video>
      </div>
      <div className="mt-2">
          <label className="px-[5px]">VIDEO DESCRIPTION</label>
          <p className="p-2 mt-3 text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
      </div>
    </div>
  );
};

export default Lession;
