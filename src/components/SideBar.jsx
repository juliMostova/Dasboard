import React, { useState,useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,CalendarDays,
} from "lucide-react";
import "./SideBarStyle.css";

const menuSideBar = [
  { name: "Dasboard", icon: BarChart2, color: "#6366f1", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" }, 
   { name: "Celendar", icon: CalendarDays, color: "#f1df0d", href: "/celendar" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

// useEffect(()=>{
// function ChangeSizeBar(){
//   if(window.innerWidth <= 576){
//     setIsSidebarOpen(false);
//   }else{
//     setIsSidebarOpen(true);
//   }

//   window.addEventListener('resize',ChangeSizeBar);
//   ChangeSizeBar();

//   return () =>{
//     window.removeEventListener('resize',ChangeSizeBar);
//   }

// }
// },[]);



  return (
    <motion.div
      className={`sidebar-container`}
      animate={{ width: isSidebarOpen ? 180 : 80 }}
    >
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="sidebar-button"
        >
          <Menu size={20} />
        </motion.button>

        <nav className="sidebar-nav">
          {menuSideBar.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="sidebar-item">
                <item.icon
                  className="sidebar-icon"
                  size={20}
                  style={{ color: item.color }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="sidebar-text"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;

// import React, { useEffect, useState } from "react";
// import "./SideBarStyle.css";
// import { IoAppsSharp } from "react-icons/io5";
// import { IoPersonOutline } from "react-icons/io5";
// import { PiNotebookThin } from "react-icons/pi";
// import { IoTrendingUp } from "react-icons/io5";
// import { BsTicketDetailed } from "react-icons/bs";
// import { HiOutlineCalendarDays } from "react-icons/hi2";
// import { LuSettings } from "react-icons/lu";
// import { GoReport } from "react-icons/go";
// import { NavLink } from "react-router-dom";
// import { IoArrowUndoOutline } from "react-icons/io5";
// import { GoSun } from "react-icons/go";
// import { IoMoonOutline } from "react-icons/io5";

// function SideBar() {
//   const [isOpenPannel, setIsOpenPannel] = useState(false);
//   const [isMoonOpen,setIsMoonOpen] = useState(false);

//   useEffect(() => {
//     function changeSizePannel() {
//       if (window.innerWidth <= 576) {
//         setIsOpenPannel(true);
//       } else {
//         setIsOpenPannel(false);
//       }
//     }

//     window.addEventListener("resize", changeSizePannel);

//     changeSizePannel();

//     return () => {
//       window.removeEventListener("resize", changeSizePannel);
//     };
//   }, []);

//   const menuSideBar = [
//     {
//       path: "/",
//       name: "Dashboard",
//       img: <IoAppsSharp />,
//     },
//     {
//       path: "/users",
//       name: "Users",
//       img: <IoPersonOutline />,
//     },

//     {
//       path: "/history",
//       name: "History",
//       img: <PiNotebookThin />,
//     },
//     {
//       path: "/analytics",
//       name: "Analytics",
//       img: <IoTrendingUp />,
//     },

//     {
//       path: "/tickets",
//       name: "Tickets",
//       img: <BsTicketDetailed />,
//     },
//     {
//       path: "/celendar",
//       name: "Celendar",
//       img: <HiOutlineCalendarDays />,
//     },
//     {
//       path: "/reports",
//       name: "Reports",
//       img: <GoReport />,
//     },
//     {
//       path: "/settings",
//       name: "Settings",
//       img: <LuSettings />,
//     },
//   ];
// const toggleTheme = () =>{
//   setIsMoonOpen(prev =>{
//     const newTheme = !prev;
//     if(newTheme){
//       document.body.classList.add('light-theme');
//       document.body.classList.remove('dark-theme');
//     }else{
//       document.body.classList.remove('light-theme');
//       document.body.classList.add('dark-theme');
//     }
//     return newTheme;
//   });
// }
//   return (
//     <div
//       className="sideBar-container"
//       style={{ width: isOpenPannel ? "50px" : "180px" }}
//     >
//       {menuSideBar.map((item, id) => (
//         <NavLink to={item.path} key={id} className="link" active="active">
//           <div className="menuIcon">{item.img}</div>
//           <div
//             className="menu"
//             style={{ display: isOpenPannel ? "none" : "block" }}
//           >
//             {item.name}
//           </div>
//         </NavLink>
//       ))}
//       <IoArrowUndoOutline
//         style={{ fontSize: "28px", position: "absolute", right: "5px" }}
//         onClick={() => setIsOpenPannel(!isOpenPannel)}
//       />
//             <div className='changeColorSite'onClick={toggleTheme} >
//             <span className={`sun ${isMoonOpen ? "activeSun" : ""}`}><GoSun /></span>
//             <span className={`moon ${isMoonOpen ? "activeMoon" : ""}`}><IoMoonOutline /></span>
// </div>

//            </div>
//   );
// }

// export default SideBar;

