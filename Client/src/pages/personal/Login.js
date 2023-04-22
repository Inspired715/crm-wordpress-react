import React, { useState } from 'react';
import Header from "./Header"
import gateway from '../../assets/gateway.png'
import { Button, Form  } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const gotoPage = (path) => {
    navigate(path);
  }

  const api_login = () => {
    if(email === "" || password === "")
      return;
    fetch('http://3.141.36.138:3001/login', { 
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password:password
      })
    })
    .then((response) => response.json())
    .then(res => {
        switch(res.status){
          case 0:
            localStorage.setItem('gateway_user_info', JSON.stringify(res.user));
            navigate('/dashboard/home');
            break;
          case 1:
            alert(res.message);
            break;
          case 2:
            navigate('/account');
            break;
          default:
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
          <h1 className="font-22">Login</h1>
            <Form.Group className="mb-3 mt-5">
              <Form.Label className="font-15 mb-3 mt-3">Email address</Form.Label>
              <Form.Control type="email" className="form-label-family" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
              <Form.Label className="font-15 mb-3 mt-3">Password</Form.Label>
              <Form.Control type="password" className="form-label-family" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <div className="space-between mt-5">
              <Button variant="text" onClick={() => gotoPage('/')} className="btn-back height-63">
                Back
              </Button>
              <Button onClick={() => api_login()} className="btn-sign height-63">
                LOGIN
              </Button>
            </div>
          </Form>
        </div>
      </div> 
    </>
    
  );
}

export default Login;
