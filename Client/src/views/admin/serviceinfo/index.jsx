import { useEffect, useState } from "react";
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

const ServiceInfo = () => {
  const {token, email, name, phone, user_id} = JSON.parse(localStorage.getItem('gatewayagency'));
  const [kind, setKind] = useState([]);
  const [kindId, setKindId] = useState(1);
  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [servicePrice, setServicePrice] = useState(0);

  useEffect(() => {
    const account = { 
      token: token
    };
    
    axios.post(`${api_url}/admin/getServiceKind`, account)
    .then(response => {
      if(response.data.status === 0){
        setKind(response.data.kinds);
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }, [token]);

  const handleRegisterService = () => {
    if(serviceTitle === '' || serviceDescription === '')
      return;
    
    const account = { 
      token: token,
      user_id:user_id,
      kind: kindId,
      title: serviceTitle,
      description: serviceDescription,
      price:servicePrice
    };
    
    axios.post(`${api_url}/admin/insertService`, account)
    .then(response => {
      if(response.data.status === 0){
        cogoToast.success(response.data.message);
      }
      else{
        cogoToast.error(response.data.message);
      }        
    });
  }

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
          <div className="p-5">
            <div className="mt-5">
              <h1>Service Catalog</h1>
              <select className="w-full h-[55px] mt-5 rounded-[10px] bg-transparent px-[20px]" style={{border:'1px solid white'}} onChange={(e) => setKindId(e.target.value)}>
                {
                  kind?.map(item => {
                    return <option key={item.id} value={item.id}>{item.name}</option>
                  })
                }
              </select>
            </div>
            <div className="mt-5">
              <h1>Service</h1>
              <div className="flex justify-between">
                <input className="rounded-[10px] text-white h-[45px] mt-3 w-[40%] px-[5px] bg-black" placeholder="Title" onChange={(e) => setServiceTitle(e.target.value)}/>
                <input className="rounded-[10px] text-white h-[45px] mt-3 w-[40%] px-[5px] bg-black" placeholder="Price" onChange={(e) => setServicePrice(e.target.value)}/>
              </div>
              <textarea rows={5} className="mt-3 w-full p-3 font-hel bg-black text-white" onChange={(e) => setServiceDescription(e.target.value)}></textarea>
            </div>
          </div>
          <div className="text-center">
            <button className="mt-2 w-[140px] rounded-full bg-transparent py-[12px] text-base font-medium text-white transition" style={{ border: '1px solid white' }}
              onClick={() => {handleRegisterService()}}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
