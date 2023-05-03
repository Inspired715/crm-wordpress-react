import React, { useEffect, useState, useMemo  } from "react";
import Card from "components/card";
import Chart from "react-apexcharts";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

const TotalSpent = () => {
  const {token, email} = JSON.parse(localStorage.getItem('gatewayagency'));
  const initialOption = useMemo (() => {
    let temp = {
      options: {
        colors: ["#000000"],
        xaxis: {
          categories: [],
        },
        markers: { size: 5 },
      },
      
      series: [
        {
          name: "Amount",
          data: []
        }
      ]
    };

    return temp;
  })

  const [chartOption, setChartOption] = useState(initialOption);

  useEffect(() => {
    const account = { 
      email: email,
      token: token
    };
    
    axios.post(`${api_url}/getChartData`, account)
    .then(response => {
      if(response.data.status === 0){
        //setData(response.data.raking);
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }, [email, token]);

  return (
    <Card extra="!p-[20px] text-center w-full bg-yellow">
      <h4 className="mb-[10px] max-w-full text-xl font-bold text-black md:w-[64%] text-[30px] text-left md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
        HISOTRY
      </h4>
      <Chart options={chartOption.options} series={chartOption.series} type="line" width="100%"/>
    </Card>
  );
};

export default TotalSpent;
