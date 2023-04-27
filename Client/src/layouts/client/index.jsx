import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "routes.js";
import Header from "components/header/Header"
import { useEffect, useState } from "react";
import bgHome from "assets/img/layout/bgHome.png"
import bgGeneral from "assets/img/layout/bgGeneral.png"

export default function ClientLayout() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    if(location.pathname === '/home'){
      setIsHome(true);
    }else{
      setIsHome(false);
    }
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  
  return (
    <>
    <Header/>
    {
      isHome?
      <div className="w-full flex justify-center absolute flex-col" style={{height:'calc(100vh - 158px)'}}>
        <img alt="Gateway background" className="m-auto" src={bgHome}/>      
      </div>
      :
      <div className="w-full absolute bg-yellow" style={{height:'calc(100vh - 93px)'}}>
        <img alt="Gateway background" className="h-full" src={bgGeneral}/>      
      </div>
    }
    <div className="relative" style={{height:'calc(100vh - 93px)'}}>
      <div className="w-full h-full flex">
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Navigate to="/home" replace />}/>
        </Routes>
      </div>    
    </div>
    </>
  );
}
