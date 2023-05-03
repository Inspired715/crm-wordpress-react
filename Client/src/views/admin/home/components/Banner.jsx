import { useEffect, useState } from "react";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

const Banner1 = () => {
  const {token, email} = JSON.parse(localStorage.getItem('gatewayagency'));
  const [data, setData] = useState(null);

  const ordinal_suffix_of = (place) => {
    var decimal = place % 10,
        doubleDecimal = place % 100;
    if (decimal === 1 && doubleDecimal !== 11) {
        return place + "st";
    }
    if (decimal === 2 && doubleDecimal !== 12) {
        return place + "nd";
    }
    if (decimal === 3 && doubleDecimal !== 13) {
        return place + "rd";
    }
    return place + "th";
  }

  useEffect(() => {
    const account = { 
      email: email,
      token: token
    };
    
    axios.post(`${api_url}/getBannerData`, account)
    .then(response => {
      if(response.data.status === 0){
        setData(response.data.banner[0]);
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }, [email, token]);

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
              {ordinal_suffix_of(data?.num)} place
            </p>
            <p className="text-[18px] text-white">
              amongst your peers for<br/>
              Gateway Agency Sales1st place
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-black rounded-[10px] py-[20px] px-[30px]">
              <p className="text-[18px] text-white">Redeemable Amount: <span className="text-[28px]">&nbsp;&nbsp;${Number.parseFloat(data?.price).toFixed(2)}</span></p>
              <p className="text-[12px] text-grey">
                Earned from {data?.min_date.slice(0, 10)} to {data?.max_date.slice(0, 10)}
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
