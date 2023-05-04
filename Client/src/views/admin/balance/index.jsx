import Vector from "assets/img/layout/Vector.png"
import { useEffect, useState } from "react";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

const Balance = () => {
    const {token, email} = JSON.parse(localStorage.getItem('gatewayagency'));
    const [status, setStatus] = useState(0);
    const [data, setData] = useState([]);

    const submitCashout = () => {
        if(data.redeemable === 0)
            return;
        const account = { 
            email: email,
            token: token
        };
          
        axios.post(`${api_url}/admin/submitCashout`, account)
        .then(response => {
            if(response.data.status === 0){
                cogoToast.success(response.data.message);
                setStatus(1);
            }
            else{
                cogoToast.error(response.data.message);
            }        
        });
    }

    useEffect(() => {
        const account = { 
          email: email,
          token: token
        };
        
        axios.post(`${api_url}/admin/getBalance`, account)
        .then(response => {
          if(response.data.status === 0){
            setData(response.data.balance);
          }
          else{
            cogoToast.error(response.data.message);
          }        
        });
      }, [email, token]);

    return (
        <div className='w-full h-full flex justify-center flex-col'>
            <div className="xs:w-60p p-5 rounded-[20px] sm:mx-auto bg-yellow" style={{ maxWidth: '640px' }}>
                <div className="rounded-[20px] bg-black w-full">
                    <div className="p-[15px] sm:p-[70px] text-white">
                        <div className="">
                            {
                                status === 0 ? (<div className="flex justify-between flex-col">
                                    <div className="flex justify-between gap-4">
                                        <div className="flex justify-center flex-col">
                                            <div className="">
                                                <label className="text-[10px] sm:text-[18px]">
                                                    Total Amount
                                                </label>
                                            </div>
                                            <div className="text-center">
                                                <label className="font-hel text-[15px] sm:text-[22px]">
                                                    ${parseFloat(data?.total).toFixed(2)}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex justify-center flex-col">
                                            <div className="">
                                                <label className="text-[10px] sm:text-[18px]">
                                                    Cash out Amount
                                                </label>
                                            </div>
                                            <div className="text-center">
                                                <label className="font-hel text-[15px] sm:text-[22px]">
                                                    ${parseFloat(data?.cash).toFixed(2)}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-[40px]" style={{ border: '1px solid gray' }}></div>
                                    <div className="flex justify-center flex-col">
                                        <div className="text-center">
                                            <label className="">Redeemable Amount</label>
                                        </div>
                                        <div className="text-center">
                                            <label className="font-hel text-[22px]">${parseFloat(data?.redeemable).toFixed(2)}</label>
                                        </div>
                                        <div className="mt-5 text-center">
                                            <button className="text-[9px] sm:text-[15px] col-span-1 linear mt-2 px-[30px] rounded-full bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={() => submitCashout()}>
                                                submit cashout request
                                            </button>
                                        </div>
                                    </div>
                                </div>) : (<div className="flex justify-between items-center flex-col">
                                    <div className="mb-[50px]">
                                        <img src={Vector} alt="balance check" />
                                    </div>
                                    <div className="mb-[30px] text-center">
                                        <label className="">YOUR REQUEST HAS BEEN SUBMITED</label>
                                    </div>
                                    <div className="text-center">
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
        </div>
    );
};

export default Balance;
