import Header from "./Header"
import gateway from '../../assets/gateway.png'
import top from '../../assets/top.png'
import bottom from '../../assets/bottom.png'
import { Button  } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";

function Welcome() {
  let navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;

  const api_welcome = () => {
    fetch('https://3.141.36.138:4000/welcome', { 
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email
      })
    })
    .then((response) => response.json())
    .then(res => {
      if(res.status === 0){
        localStorage.setItem('gateway_user_info', JSON.stringify(res.user));
        navigate(`/dashboard/home`);
      }else{
        alert(res.message);
      }
    });
  }

  return (
    <>
      <Header />
      <div className="account main">
        <div className="col-sm-10 h-full">
          <img className="gateway" src={gateway} alt="gateway agency"/>
        </div>
        <div className="w-full account-modal">
          <div className="account-form">
            <div className="w-full image-fit">
              <img src={top} className="img-welcome" alt="gateway welcome"/>
            </div>
            <div className="text-center">
              <h1 className="font-60">WELCOME</h1>
              <h5 className="font-22">LET’S MANAGE YOUR SALES</h5>
              <Button onClick={() => api_welcome()} className="btn-sign height-63 w-350 mt-5">
                let’s go
              </Button>
            </div>
            <img src={bottom} className="img-welcome" alt="gateway welcome"/>
          </div>
        </div>
      </div> 
    </>
    
  );
}

export default Welcome;
