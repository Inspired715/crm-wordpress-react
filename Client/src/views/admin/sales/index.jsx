import { useEffect, useState } from "react";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";
import SalesItem from "./components/SalesItem";

const Sales = () => {
  const {token} = JSON.parse(localStorage.getItem('gatewayagency'));
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const account = { 
      token: token
    };
    
    axios.post(`${api_url}/admin/getSalesList`, account)
    .then(response => {
      if(response.data.status === 0){
        setSales(response.data.sales);
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }, [token]);

  return (
    <div className="overflow-auto h-full">
      {
        Object.keys(sales).length === 0 ?
        <div className="flex w-full flex-col rounded-[22px] bg-cover px-[20px] py-[20px] bg-yellow">
            <h1 className="text-center">no data</h1>
        </div>
        :
          Object.keys(sales).map((key, index) => {
            return(
              <div className="mt-3" key={index} >
                <SalesItem data={sales[key]}/>
              </div>
            )
          })
        }
    </div>
  );
};

export default Sales;
