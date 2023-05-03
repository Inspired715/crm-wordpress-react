import React from "react";
import avatar from "assets/img/avatars/avatar.png";
import Card from "components/card";
import { useEffect, useState } from "react";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

const HistoryCard = () => {
  const {token, email} = JSON.parse(localStorage.getItem('gatewayagency'));
  const [data, setData] = useState([]);

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
    
    axios.post(`${api_url}/admin/getLeaderBoard`, account)
    .then(response => {
      if(response.data.status === 0){
        setData(response.data.raking);
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }, [email, token]);
  return (
    <Card className="rounded-[22px] p-[20px] bg-yellow">
      <h4 className="mb-[14px] max-w-full text-xl font-bold text-black md:w-[64%] text-[30px] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
        LEADERBOARD
      </h4>
      <div className="flex flex-col justify-between bg-black rounded-[10px] p-3">
        <div className="flex justify-between">
          <p className="text-[18px] text-white">{ordinal_suffix_of(data[0]?.ranking)}</p>
          <p className="text-[21px] text-white font-bold">{data[0]?.name}</p>
          <p className="text-[18px] text-white font-hel">${parseFloat(data[0]?.price).toFixed(2)}</p>
        </div>
        <div className="flex justify-center py-[20px]">
          <img src={data[0] && data[0].avatar?data[0].avatar:avatar} className="w-[90px] h-[90px] rounded-[100%]" alt="gatewayagency ranking first avatar"/>
        </div>
      </div>
      <div style={{maxHeight:'calc(100vh - 315px)', overflow:"auto"}}>
        {data?.map((item, index) => (
          index > 0?
          <div className="py-[5px]" key={index}>
            <div className="flex h-full w-full items-start justify-between bg-black rounded-[7px] px-[15px] py-[2px] items-center">
              <p className="text-white text-[15px] w-[70px]">
                {ordinal_suffix_of(item.ranking)}
              </p>
              <img
                className="h-[45px] w-[45px] rounded-full"
                src={item.avatar?item.avatar:avatar}
                alt=""
              />
              <div className="text-white text-[13px] w-[395px] 2xl:w-[250px] px-[5px]">
                {item.name}
              </div>
              <div className="text-white text-[15px] font-hel w-[100px] text-end">
                ${parseFloat(item.price).toFixed(2)}
              </div>
            </div>
          </div>
          :''
        ))}
      </div>
    </Card>
  );
};

export default HistoryCard;
