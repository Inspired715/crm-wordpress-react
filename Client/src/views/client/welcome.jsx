import top from 'assets/img/layout/top.png'
import bottom from 'assets/img/layout/bottom.png'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cogoToast from '@successtar/cogo-toast';
import axios from "axios";
import api_url from "constant";

export default function Welcome() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if(location.state === null)
      navigate('/');
    else
      setEmail(location.state?.email);
  }, [location, navigate]);

  const welcome = () => {
    const account = { 
      email: email
    };
    axios.post(`${api_url}/welcome`, account)
    .then(response => {
      if(response.data.status === 0){
        cogoToast.success(response.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      else
        cogoToast.error(response.data.message);
    });
  }

  return (
    <div className="w-90p p-[20px] h-90p sm:h-80p rounded-[50px] m-auto flex flex-col justify-between bg-white" style={{maxWidth:'860px'}}>
      <div className="flex justify-end mt-[-60px]">
        <img src={top} className="h-[125px] xs:h-fit xl:h-fit" alt="gateway welcome"/>
      </div>
      <div className="flex items-center flex-col gap-5">
        <label className="text-[40px] xs:text-[60px] font-fsb">WELCOME</label>
        <label className="text-[18px] xs:text-[30px]">LET’S MANAGE YOUR SALES</label>
        <button className="col-span-1 rounded-full text-white h-[45px] sm:h-[55px] sm:w-[280px] w-[195px] font-bold bg-yellow" onClick={() => {welcome()}}>
          LET'S GO
        </button>
      </div>
      <div>
        <img src={bottom} className="h-[125px] xs:h-fit xl:h-fit" alt="gateway welcome"/>
      </div>
    </div>
  );
}
