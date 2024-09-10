import React, { useEffect, useState } from "react";
import "./SideBarStyle.css";
import { IoAppsSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { PiNotebookThin } from "react-icons/pi";
import { IoTrendingUp } from "react-icons/io5";
import { BsTicketDetailed } from "react-icons/bs";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";
import { GoReport } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { IoArrowUndoOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

function SideBar() {
  const [isOpenPannel, setIsOpenPannel] = useState(false);
  const [isMoonOpen,setIsMoonOpen] = useState(false);

  useEffect(() => {
    function changeSizePannel() {
      if (window.innerWidth <= 576) {
        setIsOpenPannel(true);
      } else {
        setIsOpenPannel(false);
      }
    }

    window.addEventListener("resize", changeSizePannel);

    changeSizePannel();

    return () => {
      window.removeEventListener("resize", changeSizePannel);
    };
  }, []);

  const menuSideBar = [
    {
      path: "/",
      name: "Dashboard",
      img: <IoAppsSharp />,
    },
    {
      path: "/users",
      name: "Users",
      img: <IoPersonOutline />,
    },

    {
      path: "/history",
      name: "History",
      img: <PiNotebookThin />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      img: <IoTrendingUp />,
    },

    {
      path: "/tickets",
      name: "Tickets",
      img: <BsTicketDetailed />,
    },
    {
      path: "/celendar",
      name: "Celendar",
      img: <HiOutlineCalendarDays />,
    },
    {
      path: "/reports",
      name: "Reports",
      img: <GoReport />,
    },
    {
      path: "/settings",
      name: "Settings",
      img: <LuSettings />,
    },
  ];
const toggleTheme = () =>{
  setIsMoonOpen(prev =>{
    const newTheme = !prev;
    if(newTheme){
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }else{
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
    return newTheme;
  });
}
  return (
    <div
      className="sideBar-container"
      style={{ width: isOpenPannel ? "50px" : "180px" }}
    >
      {menuSideBar.map((item, id) => (
        <NavLink to={item.path} key={id} className="link" active="active">
          <div className="menuIcon">{item.img}</div>
          <div
            className="menu"
            style={{ display: isOpenPannel ? "none" : "block" }}
          >
            {item.name}
          </div>
        </NavLink>
      ))}
      <IoArrowUndoOutline
        style={{ fontSize: "28px", position: "absolute", right: "5px" }}
        onClick={() => setIsOpenPannel(!isOpenPannel)}
      />
            <div className='changeColorSite'onClick={toggleTheme} >
            <span className={`sun ${isMoonOpen ? "activeSun" : ""}`}><GoSun /></span>
            <span className={`moon ${isMoonOpen ? "activeMoon" : ""}`}><IoMoonOutline /></span>  
</div>
  
           </div>
  );
}

export default SideBar;
