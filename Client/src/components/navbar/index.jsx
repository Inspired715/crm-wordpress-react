import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const { brandText } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("gatewayagency");
    navigate("/login");
  }

  return (
    <nav className="pt-5 top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div>
        <p className="shrink text-[33px]">
          <Link
            to="#"
            className="font-bold"
          >
            {brandText}
          </Link>
        </p>
      </div>
      <div>
        <p onClick={() => {handleLogout()}} className="font-bold">SIGN OUT</p>
      </div>
    </nav>
  );
};

export default Navbar;
