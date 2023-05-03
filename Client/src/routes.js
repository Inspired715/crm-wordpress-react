import React from "react";

// Admin Imports
import MainDashboard from "views/admin/home";
import Sales from "views/admin/sales";
import Resource from "views/admin/resource";
import Account from "views/admin/account";
import Balance from "views/admin/balance";
import Services from "views/admin/services";
import ServiceInfo from "views/admin/serviceinfo";
import Users from "views/admin/users";

import Home from "views/client/home";
import Login from "views/client/login";
import SignUP from "views/client/signup";
import Verifyemail from "views/client/verifyemail";
import SalsInfo from "views/client/saleinfo";
import Welcome from "views/client/welcome";
// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdDesignServices,
  MdCleaningServices,
  MdOutlineVerifiedUser
} from "react-icons/md";

const routes = [
  {
    name: "Home",
    brad: "welcome",
    layout: "/admin",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Services",
    brad: "Services",
    layout: "/admin",
    path: "services",
    icon: <MdDesignServices className="h-6 w-6" />, 
    component: <Services />,
  },
  {
    name: "Sales",
    brad: "Sales",
    layout: "/admin",
    path: "sales",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Sales />,
    secondary: true,
  },
  {
    name: "Users",
    brad: "Users",
    layout: "/admin",
    path: "users",
    icon: <MdOutlineVerifiedUser className="h-6 w-6" />, 
    component: <Users />,
  },
  {
    name: "Service",
    brad: "Services Information",
    layout: "/admin",
    path: "serviceinfo",
    icon: <MdCleaningServices className="h-6 w-6" />, 
    component: <ServiceInfo />,
  },
  {
    name: "Account",
    brad: "your account information",
    layout: "/admin",
    path: "account",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Account />,
  },
  {
    name: "Balance",
    brad: "Balance",
    layout: "/admin",
    path: "balance",
    icon: <MdLock className="h-6 w-6" />, 
    component: <Balance />,
  },
  {
    name: "Resources",
    brad: "Resources",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "resources",
    component: <Resource />,
  },
  {
    name: "Home",
    brad: "Home",
    layout: "/",
    path: "home",
    component: <Home />,
  },
  {
    name: "Login",
    brad: "Login",
    layout: "/",
    path: "login",
    component: <Login />,
  },
  {
    name: "Sign",
    brad: "Sign",
    layout: "/",
    path: "sign",
    component: <SignUP />,
  },
  {
    name: "Verify",
    brad: "Verify",
    layout: "/",
    path: "verifyemail",
    component: <Verifyemail />,
  },
  {
    name: "Sales",
    brad: "Sales",
    layout: "/",
    path: "sales",
    component: <SalsInfo />,
  },
  {
    name: "Welcome",
    brad: "Welcome",
    layout: "/",
    path: "welcome",
    component: <Welcome />,
  }
];
export default routes;
