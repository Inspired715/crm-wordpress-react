import React, { useEffect, useState } from "react";
import Card from "components/card";
import Chart from "react-apexcharts";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

const TotalSpent = () => {
  const {token, email} = JSON.parse(localStorage.getItem('gatewayagency'));
  const [data, setData] = useState([]);
  let today = new Date();
  today = today.toISOString().slice(0, 10);

  async function handleGetChartData(type){
    const account = { 
      email: email,
      token: token,
      type:type
    };

    await axios.post(`${api_url}/admin/getChartData`, account)
    .then(response => {
      if(response.data.status === 0){
        setData(response.data.charts);
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }

  useEffect(() => {
    handleGetChartData(0);
  // eslint-disable-next-line
  }, [email, token]);

  return (
    <Card extra="!p-[20px] text-center w-full bg-yellow">
      <h4 className="mb-[10px] max-w-full text-xl font-bold text-black md:w-[64%] text-[30px] text-left md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
        HISOTRY
      </h4>
      <div className="bg-black rounded-[20px]">
        <div className="text-left m-[20px]">
          <label className="bg-transparent text-white px-[25px] py-[5px] mx-[30px] rounded-[5px] font-hel" style={{border:'1px solid white',cursor:'grabbing'}}
            onClick={() => handleGetChartData(0)}
          >Week</label>
          <label className="bg-transparent text-white px-[25px] py-[5px] rounded-[5px] font-hel" style={{border:'1px solid white',cursor:'grabbing'}}
            onClick={() => handleGetChartData(1)}
          >Month</label>
        </div>
        <Chart
          series={[
            {
              name: "Amount",
              data: data?.map(item => item.price),
            }
          ]} 
          options={{
            colors:['#FFFFFF'],
            markers: {
              size: 5,
              colors: ['#D4B65E']
            },
            stroke: { width: 2},
            xaxis: {
              categories: data?.map(data => (data.dates === today)?'Today':data.dates),
              // labels: {
              //   show: true,
              //   rotate: -90,
              //   rotateAlways: true,
              //   style: {
              //     colors: "#FFFFFF"
              //   }
              // },
              labels: {
                style: {
                  colors: '#FFFFFF'
                }
              }
            },
            yaxis: {
              labels: {
                style: {
                  colors: '#FFFFFF'
                }
              }
            }
          }}
          type="line" width="100%"/>
      </div>
    </Card>
  );
};

export default TotalSpent;
