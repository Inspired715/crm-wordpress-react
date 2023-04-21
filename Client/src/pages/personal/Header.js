import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  const gotoHome = () => {
    navigate('/');
  }

  return (
    <div className='row space-between header-layout'>
      <div className='w-317'>
        <img src={logo} alt="gateway landing logo" onClick={gotoHome}/>
      </div>
    </div>
  );
}

export default Header;
