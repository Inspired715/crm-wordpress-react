import refresh from 'assets/img/layout/refresh.png'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

export default function Verifyemail() {
  const [vnum1, setVnum1] = useState('');
  const [vnum2, setVnum2] = useState('');
  const [vnum3, setVnum3] = useState('');
  const [vnum4, setVnum4] = useState('');
  const [vnum5, setVnum5] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if(location.state === null)
      navigate('/');
    else
      setEmail(location.state?.email);
  }, [location, navigate]);

  const sendCode = () => {
    const account = { 
      email: email
    };
    axios.post(`${api_url}/sendCode`, account)
    .then(response => {
      if(response.data.status === 0){
        cogoToast.success(response.data.message);
      }
      else
        cogoToast.error(response.data.message);
    });
  }

  const verifyCode = () => {
    let verify_num = vnum1 + vnum2 + vnum3 + vnum4 + vnum5;
    if(verify_num.length !== 5)
      return;

    const account = { 
      email: email,
      verifyCode : verify_num
    };

    axios.post(`${api_url}/verify`, account)
    .then(response => {
      if(response.data.status === 0){
        cogoToast.success(response.data.message);
        setTimeout(() => {
          navigate("/sales", {
            state: {
              email:email,
              token:verify_num
            }
          });
        }, 2000);
      }
      else
        cogoToast.error(response.data.message);
    });
  }

  return (
    <div className="w-90p p-[20px] h-90p sm:h-80p sm:p-[70px] rounded-[50px] m-auto bg-white" style={{maxWidth:'860px', overflow:'auto'}}>
      <div className="text-center mb-[10px] sm:mb-[50px]">
        <label className="font-bold text-[30px]">
          VERIFY EMAIL
        </label>
      </div>
      <div className="flex flex-col w-full">
        <label className="text-[18px] mb-3">
          ENTER CODE
        </label>
        <div className="sm:px-[30px]">
          <div className="flex gap-1">
            <input
              type="text"
              placeholder=""
              id="vnum1"
              onChange={(e) => {setVnum1(e.target.value); if(e.target.value !=='')document.getElementById('vnum2').focus()}}
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
            <input
              type="text"
              placeholder=""
              id="vnum2"
              onChange={(e) => {setVnum2(e.target.value);if(e.target.value !=='')document.getElementById('vnum3').focus()}}
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
            <input
              type="text"
              placeholder=""
              id="vnum3"
              onChange={(e) => {setVnum3(e.target.value);if(e.target.value !=='')document.getElementById('vnum4').focus()}}
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
            <input
              type="text"
              placeholder=""
              id="vnum4"
              onChange={(e) => {setVnum4(e.target.value);if(e.target.value !=='')document.getElementById('vnum5').focus()}}
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
            <input
              type="text"
              placeholder=""
              id="vnum5"
              onChange={(e) => setVnum5(e.target.value)}
              maxLength={1}
              className="text-center rounded-[15px] border bg-white/0 p-3 text-[18px] w-[50px] h-[60px]"/>
          </div>
          <label className="text-[18px] flex items-center h-[80px] font-hel">
            You should receive an email from us with a verification code
          </label>
          <div className="flex">
              <img className="w-[50px] h-[50px]" src={refresh} alt="gateway verifyemail" style={{cursor:'grabbing'}} onClick={() => sendCode()}/>
              <div className="grid px-[15px]">
                <label className="font-hel">Not seeing your verification code? </label>
                <label className="font-hel">Send new code</label>
              </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[10px] sm:mt-[50px]">
          <button className="col-span-1 rounded-full h-[50px] sm:h-[60px]" style={{border:'1px solid black'}} onClick={() => navigate("/sign")}>
            BACK
          </button>
          <button className="col-span-1 rounded-full text-white h-[50px] sm:h-[60px] font-bold bg-yellow" onClick={() => verifyCode()}>
            VERIFY
          </button>
        </div>
      </div> 
    </div>
  );
}