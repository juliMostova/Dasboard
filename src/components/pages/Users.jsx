import React from 'react';
import './UsersStyle.css';
import {usersInfo} from '../../data/InfoCardsMenu';



function Users() {
  return (
    <div className='updates'>
 {
  usersInfo.map((user,ind)=>{

  
 
    return(
      <div key={ind} className='infoBlock'>

      <img src={user.img} alt={user.name}/> 
     <div className='ditailInfoUser'>
       <span>{user.name}</span>
       <span>{user.noti}</span>
     </div>
     
     <div className='time'>{user.time}</div>
         </div>
       )}
    )
   
 }
    </div>
  );
}

export default Users;
