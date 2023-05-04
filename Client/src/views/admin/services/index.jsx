import Table from "components/table";
import buy from "assets/img/layout/buy.png";
import book from "assets/img/layout/book.png";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";
import { useEffect, useState } from "react";
import {decode as base64_decode} from 'base-64';

export default function Services() {
const {token, email, phone, name} = JSON.parse(localStorage.getItem('gatewayagency'));
const [data, setData] = useState([]);

const handleBuy = (id) => {
  const account = { 
    token: token,
    sid:id
  };
  
  axios.post(`${api_url}/admin/buyService`, account)
  .then(response => {
    if(response.data.status === 0){
      cogoToast.success(response.data.message);
    }
    else{
      cogoToast.error(response.data.message);
    }        
  });
}

const handleBook = (recp, sender) => {
  console.log(sender, recp)
}

useEffect(() => {
  const account = { 
    token: token
  };
  
  axios.post(`${api_url}/admin/getServiceList`, account)
  .then(response => {
    if(response.data.status === 0){
      setData(response.data.service);
    }
    else{
      cogoToast.error(response.data.message);
    }        
  });
}, [token]);

const columns = [
    {
      Header: "servicelist",
      hideHeader: true,
      columns: [
        {
          Header: "Date",
          accessor: "created_at",
          Cell:(row) =>{
            return <div>{row.row.original.created_at.slice(0, 10)}</div>
          }
        },
        {
          Header: "Services",
          accessor: "service",
          Cell:(row) => {
            return (
              <div>{row.row.original.service}-{decodeURIComponent(base64_decode(row.row.original.title))}<br/>{row.row.original.email}</div>
            )
          }
        },
        {
          Header: "Commission",
          accessor: "price",
          Cell:(row) => {
            return(
              <div className="text-center">${parseFloat(row.row.original.price).toFixed(2)}</div>
            )
          }
        },
        {
          Header: "Action",
          Cell: (row) => {
            return (
              <div className="flex justify-between">
                <img src={book} className="w-[45px] h-[45px] cursor-pointer" alt="gateway book" onClick={() => {handleBook(row.row.original.email, email)}}/>
                <img src={buy} className="w-[45px] h-[45px] cursor-pointer" alt="gateway buy" onClick={() => {handleBuy(row.row.original.id)}}/>
              </div>
            )
          }
        },
      ],
    },
  ];

  return (
    <div className="h-full overflow-auto">
      <div className="flex w-full flex-col rounded-[22px] bg-cover px-[20px] py-[20px] bg-yellow">
        <div className="w-full">
          <div className="bg-black rounded-[20px] p-5 grid grid-cols-1 gap-5 md:grid-cols-5 lg:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 text-white">
            <div className="flex justify-center flex-col col-span-3">
                <label className="text-[12px] text-grey">CLIENT'S NAME</label>
                <label className="">{name}</label> 
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 col-span-2">
                <div className="flex justify-center flex-col col-span-1">
                    <label className="text-[12px] text-grey">EMAIL</label>
                    <label  className="text-[10px] text-grey">{email}</label> 
                </div>
                <div className="flex justify-center flex-col col-span-1">
                    <label className="text-[12px] text-grey">PHONE NUMBER</label>
                    <label  className="text-[10px] text-grey">{phone}</label> 
                </div>
            </div>
          </div>
          <div>
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>

  );
}