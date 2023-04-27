import React from "react";
import avatar from "assets/img/avatars/avatar7.png";
import Card from "components/card";

const HistoryCard = () => {
  const HistoryData = [
    {
      image: avatar,
      title: "Colorful Heaven",
      owner: "Mark Benjamin",
      price: 1,
      time: "30s",
    },
    {
      image: avatar,
      title: "Abstract Colors",
      owner: "Esthera Jackson",
      price: 2,
      time: "50m",
    },
    {
      image: avatar,
      title: "ETH AI Brain",
      owner: "Nick Wilson",
      price: 3,
      time: "20s",
    },
    {
      image: avatar,
      title: "Swipe Circles",
      owner: " Peter Will",
      price: 4,
      time: "4h",
    },
    {
      image: avatar,
      title: "Mesh Gradients",
      owner: "Will Smith",
      price: 11,
      time: "30s",
    },
    {
      image: avatar,
      title: "3D Cubes Art",
      owner: " Manny Gates",
      price: 12,
      time: "2m",
    },
    {
      image: avatar,
      title: "Colorful Heaven",
      owner: "Mark Benjamin",
      price: 13,
      time: "30s",
    },
    {
      image: avatar,
      title: "Abstract Colors",
      owner: "Esthera Jackson",
      price: 111,
      time: "50m",
    },
    {
      image: avatar,
      title: "ETH AI Brain",
      owner: "Nick Wilson",
      price: 112,
      time: "20s",
    },
    {
      image: avatar,
      title: "Swipe Circles",
      owner: " Peter Will",
      price: 115,
      time: "4h",
    },
    {
      image: avatar,
      title: "Mesh Gradients",
      owner: "Will Smith",
      price: 1111,
      time: "30s",
    },
    {
      image: avatar,
      title: "3D Cubes Art",
      owner: " Manny Gates",
      price: 1112,
      time: "2m",
    },
    {
      image: avatar,
      title: "Colorful Heaven",
      owner: "Mark Benjamin",
      price: 1124,
      time: "30s",
    },
    {
      image: avatar,
      title: "Abstract Colors",
      owner: "Esthera Jackson",
      price: 22222,
      time: "50m",
    },
    {
      image: avatar,
      title: "ETH AI Brain",
      owner: "Nick Wilson",
      price: 22224,
      time: "20s",
    },
    {
      image: avatar,
      title: "Swipe Circles",
      owner: " Peter Will",
      price: 333333,
      time: "4h",
    },
    {
      image: avatar,
      title: "Mesh Gradients",
      owner: "Will Smith",
      price: 333335,
      time: "30s",
    },
    {
      image: avatar,
      title: "3D Cubes Art",
      owner: " Manny Gates",
      price: 5555555,
      time: "2m",
    },
  ];

  return (
    <Card className="rounded-[22px] p-[20px] bg-yellow" style={{height:'calc(100vh - 40px)'}}>
      <h4 className="mb-[14px] max-w-full text-xl font-bold text-black md:w-[64%] text-[30px] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
        LEADERBOARD
      </h4>
      <div className="flex flex-col justify-between bg-black rounded-[10px] p-3">
        <div className="flex justify-between">
          <p className="text-[18px] text-white">1st</p>
          <p className="text-[21px] text-white font-bold">JOHN SMITH</p>
          <p className="text-[18px] text-white font-hel">$4800.00</p>
        </div>
        <div className="flex justify-center py-[20px]">
          <img src={HistoryData[0].image} className="w-[90px] h-[90px] rounded-[100%]" alt="gatewayagency ranking first avatar"/>
        </div>
      </div>
      <div style={{height:'calc(100vh - 315px)', overflow:"auto"}}>
        {HistoryData.map((data, index) => (
          <div className="py-[5px]" key={index}>
            <div className="flex h-full w-full items-start justify-between bg-black rounded-[7px] px-[15px] py-[2px] items-center">
              <div className="text-white text-[15px] w-[70px]">
                {data.price}
              </div>
              <img
                className="h-[45px] w-[45px] rounded-full"
                src={data.image}
                alt=""
              />
              <div className="text-white text-[21px] w-[395px] 2xl:w-[250px]">
                {data.title}
              </div>
              <div className="text-white text-[15px] font-hel">
                $4800.00
              </div>
            </div>
          </div>        
        ))}
      </div>
    </Card>
  );
};

export default HistoryCard;
