import logo from 'assets/img/layout/logo.png';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/home') {
      setVisible(true);
    } else {
      setVisible(false)
    }
  }, [location]);

  const gotoPage = (path) => {
    navigate(path);
  }

  return (
    <>
      <div className={visible?'grid grid-cols-1 gap-1 sm:grid-cols-2 bg-white':'grid grid-cols-1 gap-1 bg-white'}>
        <div className='w-[285px] py-[10px] px-[20px] col-span-1'>
          <img src={logo} alt="gateway landing logo" onClick={() => gotoPage('/home')}/>
        </div>
        <div className="flex justify-center flex-col mx-[25px] gap-1 col-span-1 items-center sm:items-end pt-[20px]">
          {visible ?
          <>
            <button className="rounded-full text-white h-[33px] w-[165px] bg-yellow" onClick={() => gotoPage('/login')}>
              SIGN IN
            </button>
            <label className="w-[165px] text-center"
              onClick={() => gotoPage('/sign')}
            >
              CREATE ACCOUNT
            </label>
          </>
          :
          <></>}
        </div>
    </div>
    </>
  );
}

export default Header;