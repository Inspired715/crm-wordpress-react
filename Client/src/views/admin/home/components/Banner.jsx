const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[22px] bg-cover px-[20px] py-[20px] bg-yellow">
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-black md:w-[64%] text-[30px] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          GENERAL
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start justify-center bg-black rounded-[10px] py-[20px] px-[30px]">
            <p className="text-[18px] text-white">You are currently in</p>
            <p className="text-white text-[28px]">
              1st place
            </p>
            <p className="text-[18px] text-white">
              amongst your peers for<br/>
              Gateway Agency Sales1st place
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-black rounded-[10px] py-[20px] px-[30px]">
              <p className="text-[18px] text-white">Redeemable Amount: <span className="text-[28px]">&nbsp;&nbsp;$4820.00</span></p>
              <p className="text-[12px] text-grey">
                Earned from February 1 - February 28, 2023
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <button className="text-black linear rounded-xl bg-transparent px-4 text-center text-[11px] h-[45px]" style={{ border
              :`1px solid black`}}>
                See Balance Details
              </button>
              <button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-[11px] h-[45px]">
                Request Cash Out
              </button>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Banner1;
