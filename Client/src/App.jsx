import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "layouts/admin";
import ClientLayout from "layouts/client";

const App = () => {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/*" element={<ClientLayout />} />
    </Routes>
  );
};

export default App;
