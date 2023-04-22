import Header from "./Header"
import gateway from '../../assets/gateway.png'
import refresh from '../../assets/refresh.png'
import { Button, Form  } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Verifyemail() {
  let navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;

  const [num_1, setNum_1] = useState('');
  const [num_2, setNum_2] = useState('');
  const [num_3, setNum_3] = useState('');
  const [num_4, setNum_4] = useState('');
  const [num_5, setNum_5] = useState('');

  const gotoPage = (path) => {
    navigate(path);
  }

  const api_resend_code = () => {
    fetch('https://3.141.36.138:4000/sendCode', { 
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email
      })
    })
    .then((response) => response.json())
    .then(res => {
    });
  }

  const api_verify_email = () => {
    let verifyCode = num_1+num_2+num_3+num_4+num_5;
    fetch('https://3.141.36.138:4000/verify', { 
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        verifyCode:verifyCode
      })
    })
    .then((response) => response.json())
    .then(res => {
        if(res.status === 0){
          navigate('/sales', {
            state:{
              email: email,
              token: verifyCode
            }
          });
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
          <Form className="account-form">
            <h1 className="font-22">VERIFY EMAIL</h1>
            <Form.Group className="mb-3 mt-5">
              <Form.Label className="font-15 mb-3 mt-4">ENTER CODE</Form.Label>
              <div className="flex mb-5 p-l-40">
                <Form.Control type="text" className="form-label-family input-code" maxLength="1" onChange={(e) => setNum_1(e.target.value)}/>
                <Form.Control type="text" className="form-label-family input-code" maxLength="1" onChange={(e) => setNum_2(e.target.value)} />
                <Form.Control type="text" className="form-label-family input-code" maxLength="1" onChange={(e) => setNum_3(e.target.value)} />
                <Form.Control type="text" className="form-label-family input-code" maxLength="1" onChange={(e) => setNum_4(e.target.value)}/>
                <Form.Control type="text" className="form-label-family input-code" maxLength="1" onChange={(e) => setNum_5(e.target.value)} />
              </div>
              <div className="p-l-40">
                <h5 className="mt-5 font-13-hel height-40">You should receive an email from us with <span className="font-bold">a verification code</span></h5>
              </div>
              <div className="flex mt-3 p-l-40">
                  <img className="refresh-btn" src={refresh} alt="gateway verifyemail" onClick={ ()=> api_resend_code()}/>
                  <div className="grid">
                    <label className="font-13-hel">Not seeing your verification code? </label>
                    <label className="font-13-hel">Send new code</label>
                  </div>
              </div>
            </Form.Group>
            <div className="space-between mt-7">
              <Button variant="text" onClick={() => gotoPage('/account')} className="btn-back">
                Back
              </Button>
              <Button onClick={() => api_verify_email()} className="btn-sign">
                verify
              </Button>
            </div>
          </Form>
        </div>
      </div> 
    </>
  );
}

export default Verifyemail;
