import "./App.css";
import { Route, Routes,useLocation } from "react-router-dom";
import React,{useState} from "react";
import Dashboard from "./components/pages/Dashboard";
import Products from "./components/pages/Products";
import Users from "./components/pages/Users";
import Sales from "./components/pages/Sales";
import Orders from "./components/pages/Orders";
import Analytics from "./components/pages/Analytics";
import Settings from "./components/pages/Settings";
import Celendar from "./components/pages/Celendar";

import SideBar from "./components/SideBar";
import RightSite from "./components/RightSite";







function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 const location = useLocation();

 const hideRightSiteOnPages = [
  "/users", "/products",
  "/settings","/analytics",
  "/orders","/sales","/celendar"
];
  return (
    <div className="app">
       <div className={`app_glass${isSidebarOpen ? '':'collapsed'}`}>
        <SideBar/>

     
        <div className="main_content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/celendar" element={<Celendar />} />
          </Routes>
        </div>

      {!hideRightSiteOnPages.includes(location.pathname) &&  <RightSite />}
   </div>
    </div>
  );
}

export default App;
