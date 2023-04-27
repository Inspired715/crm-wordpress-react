import React from "react";
import Card from "components/card";
import HistoryChart from "components/charts/Historychart";

const TotalSpent = () => {
  const seriesData = [["02/12", 2000], ["02/13",2500], ["02/14",3000],
                    ["02/15", 4000], ["02/16",8000], ["02/17",5000],
                    ["02/18", 7000], ["Today",10000], ["02/20",1500],
                    ["02/21", 3000], ["02/22",4500], ["02/23",5000]];

  const chartOptions = {
      title:'',
      xAxis: {
          tickInterval: 1,
          labels: {
              formatter () {
                return `<span style="color:#FFFFFF;font-size:20px;">${seriesData[this.value][0]}</span>`
              }
          }
      },
      yAxis: {
          labels: {
              formatter () {
                return `<span style="color:#FFFFFF;font-size:15px;">${this.value}</span>`
              }
          }
      },
      series: [{
          data: seriesData,
          cursor: "pointer",
          color: '#D4B65E',
          marker: {
              enabled: true,
              symbol: "circle",
              radius: 10}
      }]
  }

  return (
    <Card extra="!p-[20px] text-center w-full force-transparent bg-yellow">
      <h4 className="mb-[10px] max-w-full text-xl font-bold text-black md:w-[64%] text-[30px] text-left md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
        HISOTRY
      </h4>
      <HistoryChart options={chartOptions}/>
    </Card>
  );
};

export default TotalSpent;
