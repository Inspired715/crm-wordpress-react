import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { brandText } = props;

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
    </nav>
  );
};

export default Navbar;
