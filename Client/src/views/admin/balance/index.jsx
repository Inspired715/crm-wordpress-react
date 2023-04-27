import Vector from "assets/img/layout/Vector.png"
import { useState } from "react";

const Balance = () => {
  const [status, setStatus] = useState(0);

  const submitCashout = () => {
      setStatus(1);
  } 

  return (
    <div className="w-60p p-5 rounded-[20px] mx-auto bg-yellow" style={{maxWidth:'640px'}}>
      <div className="rounded-[20px] bg-black w-full">
        <div className="p-[70px] text-white">
          <div className="">
              {
                  status === 0 ? (<div className="flex justify-between flex-col">
                      <div className="flex justify-between">
                          <div className="flex justify-center flex-col">
                              <div className="">
                                  <label className="">
                                      Total Earned with Gateway
                                  </label>
                              </div>
                              <div>
                                  <label className="font-hel text-[22px]">
                                      $7,126.00
                                  </label>
                              </div>
                          </div>
                          <div className="flex justify-center flex-col">
                              <div>
                                  <label className="font-hel text-[13px]">
                                      Last Payout: $2306.00
                                  </label>
                              </div>
                              <div>
                                  <label className="font-hel text-[13px]">
                                      Date: January 15, 2023
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="my-[40px]" style={{border:'1px solid gray'}}></div>
                      <div className="flex justify-center flex-col">
                          <div className="">
                              <label className="">Redeemable Amount</label>
                          </div>
                          <div className="">
                              <label className="font-hel text-[22px]">$4820.00</label>
                          </div>
                          <div className="text-[12px] mt-5">
                              <label className="font-hel">Earned from February 1 - February 28, 2023</label>
                          </div>
                          <div className="mt-5">
                            <button className="col-span-1 linear mt-2 px-[30px] rounded-full bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={() => submitCashout()}>
                              submit cashout request
                            </button>
                          </div>
                      </div>
                  </div>) : (<div className="flex justify-between items-center flex-col">
                      <div className="mb-[50px]">
                          <img src={Vector} alt="balance check" />
                      </div>
                      <div className="mb-[30px]">
                          <label className="">YOUR REQUEST HAS BEEN SUBMITED</label>
                      </div>
                      <div>
                          <label className="mb-[10px] font-hel">
                              A request has been successfully sent to
                          </label>
                      </div>
                      <div>
                          <label className="font-hel">email@gatewayagency.co</label>
                      </div>
                  </div>)
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
