/* eslint-disable */
import logo from "assets/img/layout/logo.png"
import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import SidebarCard from "components/sidebar/components/SidebarCard";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>
      <div className={`mx-[30px] mt-[30px] flex items-center`}>
        <img src={logo} className={'w-[175px]'}/>
      </div>
      <div className="mt-[10px] mb-7 h-px" />
        <ul className="mb-auto pt-1">
          <Links routes={routes} />
        </ul>
        <div className="flex justify-center">
          <SidebarCard />
        </div>
    </div>
  );
};

export default Sidebar;
