import React from "react";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import Cards from "../Cards";
import { InfoCardsMenu } from "../../data/InfoCardsMenu";
import Users from "./Users";
import Table from '../Table';
import './DashBoardStyle.css';

function Dashboard() {
  return (
    <div className="dashboard">
      {/* <div className='changeColorSite'>
<div><GoSun/></div>
<div><IoMoonOutline/></div>
      </div>  */}
      <h3 className="title">Analytics</h3>
      <div className="cards">
        {InfoCardsMenu &&
          InfoCardsMenu.map((card, id) => (
            <Cards
              key={id}
              barValue={card.barValue}
              value={card.value}
              title={card.title}
              png={card.png}
            />
          ))}
      </div>
      <h3 className="title">New Users</h3>
      <div className="users">
<Users/>
      </div>
      <h3 className="title">
        Recent Orders</h3>
      <div className="table">
<Table/>
      </div>
    </div>
  );
}

export default Dashboard;
