import React from "react";

const Lecture = ({children}) => {
  return (
    <div className="">
      <div>
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-black md:w-[64%] text-[30px] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          lesson 1
        </h4>
        <p className="w-50p text-[12px] my-[20px] mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">
        {children}
      </div>
    </div>
  );
};

export default Lecture;
