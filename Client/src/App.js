import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Landing from "./pages/personal/Landing";
import Account from "./pages/personal/Account";
import Salesrepresentative from "./pages/personal/Salesrepresentative";
import Verifyemail from "./pages/personal/Verifyemail";
import Welcome from "./pages/personal/Welcome";
import Dashhome from "./pages/dashboard/Dashhome";
import Dashsales from "./pages/dashboard/Dashsales";
import Dashres from "./pages/dashboard/Dashres";
import Dashacct from "./pages/dashboard/Dashacct";
import Dashbalance from "./pages/dashboard/Dashbalance";
import Login from './pages/personal/Login';
import { useNavigate, useLocation } from "react-router-dom";
// eslint-disable-next-line

const WrapApp = () => {
  return (
    <Router>
        <App />
    </Router>
  )
}

const App = () => {
  let email = JSON.parse(localStorage.getItem('gateway_user_info'))?.email;
  const { pathname } = useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    if (!email){
      if (pathname !== '/' && pathname !== '/login') {
        navigate('/login');
      }
    }
  }, [pathname, email, navigate])

  return (pathname !== '/' && pathname !== '/login' && !email) ? (<></>) : (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/account" element={<Account />} />
      <Route exact path="/verifyemail" element={<Verifyemail />} />
      <Route exact path="/sales" element={<Salesrepresentative />} />
      <Route exact path="/welcome" element={<Welcome />} />
      <Route path="/dashboard/home" element={<Dashhome />} />
      <Route path="/dashboard/sales" element={<Dashsales />} />
      <Route path="/dashboard/res" element={<Dashres />} />
      <Route path="/dashboard/acct" element={<Dashacct />} />
      <Route path="/dashboard/balance" element={<Dashbalance />} />
    </Routes>
  )
}

export default WrapApp
