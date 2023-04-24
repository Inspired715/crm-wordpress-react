import Header from "./Header"
import gateway from '../../assets/gateway.png'
import { Button, Form  } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Salesrepresentative() {
  let navigate = useNavigate();
  const location = useLocation();
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const email = location.state.email;
  const token = location.state.token;

  const gotoPage = (path) => {
    navigate(path, {
      state:{
        email:email
      }
    });
  }

  const api_update_name = () => {
    if(first === "" || last === "")
      return;
    fetch('https://api.gatewayagency.co/update', { 
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        token:token,
        first:first,
        last: last
      })
    })
    .then((response) => response.json())
    .then(res => {
      if(res.status === 0){
        navigate(`/welcome`, {
          state: {
            email: email,
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
          <h1 className="font-22">SALES REPRESENTATIVE</h1>
            <Form.Group className="mb-3 mt-with-percent">
              <Form.Label className="font-15 mb-3 mt-3">FIRST NAME</Form.Label>
              <Form.Control type="text" className="form-label-family" placeholder="smith" onChange={(e) => setFirst(e.target.value)}/>
              <Form.Label className="font-15 mb-3 mt-3">LAST NAME</Form.Label>
              <Form.Control type="text" className="form-label-family" placeholder="Smith" onChange={(e) => setLast(e.target.value)}/>
            </Form.Group>
            <div className="space-between mt-5">
              <Button variant="text" onClick={() => gotoPage('/verifyemail')} className="btn-back">
                Back
              </Button>
              <Button onClick={() => api_update_name()} className="btn-sign">
                CONTINUE
              </Button>
            </div>
          </Form>
        </div>
      </div> 
    </>
    
  );
}

export default Salesrepresentative;
