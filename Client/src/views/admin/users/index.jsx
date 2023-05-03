import Table from "components/table";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";
import { useEffect, useState } from "react";
import default_avatar from "assets/img/avatars/avatar.png"

export default function Users() {
  const {token, email} = JSON.parse(localStorage.getItem('gatewayagency'));
  const [data, setData] = useState([]);

  useEffect(() => {  
    const account = { 
      email: email,
      token: token
    };
    
    axios.post(`${api_url}/admin/getUserList`, account)
    .then(response => {
      if(response.data.status === 0){
        setData(response.data.users);
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }, [email, token]);

  const columns = [
    {
      Header: "userlist",
      hideHeader: true,
      columns: [
        {
          Header: "All",
          Cell: () => {
            return (
              <input type="checkbox" className="w-[25px] h-[25px] mt-[5px]" />
            )
          }
        }, {
          Header: "Avatar",
          accessor: "avatar",
          Cell:(row) => {
            let avatar = row.row.original.avatar?row.row.original.avatar:default_avatar;
            return (
              <img src={avatar} alt="gateway agency avatar" className="rounded-full w-[45px] h-[45px] m-auto"/>
            )
          }
        }, {
          Header: "Date",
          accessor: "created_at",
          Cell:(row) => {
            return(
              row.row.original.created_at?row.row.original.created_at.slice(0, 10):'2000-01-01'
            )
          }
        }, {
          Header: "NAME",
          accessor: "name"
        }, {
          Header: "EMAIL",
          accessor: "email"
        }, {
          Header: "PHONE",
          accessor: "phone"
        }
      ],
    },
  ];

  return (
    <div className="h-full overflow-auto">
      <div className="flex w-full flex-col rounded-[22px] bg-cover px-[20px] py-[20px] bg-yellow">
        <div className="w-full  text-right">
          <button className="text-black linear rounded-[30px] bg-transparent px-4 text-center text-[11px] h-[45px] w-[120px]" style={{ border
          :`1px solid black`}}>
            SEND EMAIL
          </button>
        </div>
        <div>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}