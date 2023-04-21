import logo from '../../assets/logo.png'
import bg from '../../assets/bg.png'
import { Button } from 'react-bootstrap';
import Chevron from 'react-chevron'
import { useNavigate } from "react-router-dom";

function Landing() {
  let navigate = useNavigate();

  const gotoPage = (path) => {
    navigate(path);
  }

  return (
    <>
    <div className='row space-between header-layout'>
      <div className='w-317'>
        <img src={logo} alt="gateway landing logo" onClick={() => gotoPage('/')}/>
      </div>
      <div className='w-230'>
        <Button variant="outline-primary" className='btn-sign' onClick={() => gotoPage('/login')}>SIGN IN&nbsp;&nbsp;<Chevron direction={'right'}/></Button>
        <Button variant="text" onClick={() => gotoPage('/account')}>CREATE ACCOUNT</Button>
      </div>
    </div>
    <div className='row space-center'>
      <img src={bg} className='landing' alt='gateway background'/>
    </div>
    <div className='row'>
      <label className='footer'>gatewayagency.co</label>
    </div>
    </>
  );
}

export default Landing;
