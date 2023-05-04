import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = () => {
    const account = { 
      email: email,
      password: password
    };
    
    axios.post(`${api_url}/login`, account)
    .then(response => {
      console.log('response', response);
      if(response.data.status === 0){
        cogoToast.success(response.data.message);
        let session = {
          email: response.data.email,
          avatar: response.data.avatar,
          token: response.data.token,
          name: response.data.name,
          phone: response.data.phone
        };

        localStorage.setItem('gatewayagency', JSON.stringify(session));

        setTimeout(() => {
          navigate("/admin/home", {
            state: {
              email:email
            }
          });
        }, 2000);
      }
      else{
        cogoToast.error(response.data.message);
      }
    });
  }

  return (
    <div className="w-90p p-[20px] h-90p sm:h-80p sm:p-[70px] rounded-[50px] m-auto bg-white" style={{maxWidth:'860px', overflow:'auto'}}>
      <div className="text-center mb-[10px] sm:mb-[50px]">
        <label className="font-bold text-[21px] sm:text-[30px]">
          LOGIN YOUR GATEWAY ACCOUNT
        </label>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center flex-col w-full">
          <label className="text-[18px] mb-3">
            EMAIL ADDRESS
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="rounded-[30px] border bg-white/0 p-3 text-[17px] h-[50px] sm:h-[60px]" onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div className="flex justify-center flex-col w-full">
          <label className="text-[18px] mb-3">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-[30px] border bg-white/0 p-3 text-[17px] h-[50px] sm:h-[60px]" onChange={(e) => {setPassword(e.target.value)}}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[10px]">
          <button className="col-span-1 rounded-full h-[50px] sm:h-[60px]" style={{border:'1px solid black'}} onClick={() => { navigate('/')}}>
            BACK
          </button>
          <button className="col-span-1 rounded-full text-white h-[50px] sm:h-[60px] font-bold bg-yellow" onClick={() => {login()}}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>      
  );
}
