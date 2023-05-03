import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import ClientLayout from "layouts/client";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let session = localStorage.getItem('gatewayagency');

  useEffect(() => {
    if(location.pathname.indexOf('admin') >= 0){
      if(!session){
        navigate('/login');
      }
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <Routes>
      {session && <Route path="admin/*" element={<AdminLayout />} />}
      <Route path="/*" element={<ClientLayout />} />
    </Routes>
  );
};

export default App;
