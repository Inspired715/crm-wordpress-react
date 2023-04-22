import React, { useState } from 'react';
import Header from "./Header"
import gateway from '../../assets/gateway.png'
import { Button, Form  } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Account() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setComfirm] = useState('');

  const gotoPage = (path) => {
    navigate(path);
  }

  const validation = () => {
    let result = 0;
    if((email !== "") && (confirm !== "") && (password !== "") && (password === confirm))
      result = 1;

    return result;
  }

  const api_sign_up = () => {
    let result = validation();
    if(result){
      fetch('https://3.141.36.138:4000/signup', { 
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password:password
        })
      })
      .then((response) => response.json())
      .then(res => {
        if(res.status === 0){
          navigate(`/verifyemail`, {
            state: {
              email: email,
            }
          });
        }else{
          alert(res.message);
        }
      });
    }
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
          <h1 className="font-22">Create Your Gateway Account</h1>
            <Form.Group className="mb-3 mt-5">
              <Form.Label className="font-15 mb-3 mt-3">Email address</Form.Label>
              <Form.Control type="email" className="form-label-family" placeholder="Email Address"  onChange={(e) => setEmail(e.target.value)}/>
              <Form.Label className="font-15 mb-3 mt-3">Create Password</Form.Label>
              <Form.Control type="password" className="form-label-family" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
              <Form.Label className="font-15 mb-3 mt-3">Comfirm Password</Form.Label>
              <Form.Control type="password" className="form-label-family" placeholder="Password"  onChange={(e) => setComfirm(e.target.value)}/>
            </Form.Group>
            <div className="space-between mt-5">
              <Button variant="text" onClick={() => gotoPage('/login')} className="btn-back height-63">
                Back
              </Button>
              <Button className="btn-sign height-63" onClick={() => api_sign_up()} >
                CONTINUE
              </Button>
            </div>
          </Form>
        </div>
      </div> 
    </>
    
  );
}

export default Account;
