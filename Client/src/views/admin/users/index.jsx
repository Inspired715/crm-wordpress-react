import Table from "components/table";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";
import { useEffect, useState } from "react";
import default_avatar from "assets/img/avatars/avatar.png"
import MailModal from "components/modal/modal";

export default function Users() {
  const {token, email} = JSON.parse(localStorage.getItem('gatewayagency'));
  const [data, setData] = useState([]);
  const [receiver, setReceiver] = useState('');
  const [modal, setModal] = useState(false);
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {  
    const account = { 
      email: email,
      token: token
    };
    
    axios.post(`${api_url}/admin/getUserList`, account)
    .then(response => {
      if(response.data.status === 0){
        setData(response.data.users);
        setCheckedState(new Array(response.data.users.length).fill(false));
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }, [email, token]);

  const handleSendMail = () => {
    if(receiver !== ""){
      setModal(true);
    }
  }
  
  const handleChangeCheckBox = (e, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    let mail = e.target.dataset.email;
    if(e.target.checked){
      setReceiver(receiver + (mail + ','));
    }else{
      setReceiver(receiver.replace(mail+",", ''));
    }
  }

  const sendMail = (phone, meeting, description) => {
    if(phone === '' || meeting === '' || description === '')
      return;
    const account = { 
      token: token,
      phone:phone,
      meeting:meeting,
      description: description,
      receiver:receiver
    };
    
    axios.post(`${api_url}/admin/sendMeetingMail`, account)
    .then(response => {
      if(response.data.status === 0){
        cogoToast.success(response.data.message);
        setModal(false);
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }

  const columns = [
    {
      Header: "userlist",
      hideHeader: true,
      columns: [
        {
          Header: "All",
          Cell: (row) => {
            return (
              <input type="checkbox" className="w-[25px] h-[25px] mt-[5px]" data-email={`${row.row.original.email}`} checked={checkedState[row.row.index]} onChange={(e) => {handleChangeCheckBox(e, row.row.index)}}/>
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
          :`1px solid black`}}
            onClick={() => handleSendMail()}
          >
            SEND EMAIL
          </button>
        </div>
        <div>
          <Table columns={columns} data={data} />
        </div>
      </div>
      <MailModal
        isOpen={modal}
        setIsOpen={setModal}
        sendMail={sendMail}
      />
    </div>
  );
}