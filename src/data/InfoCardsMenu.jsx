import { BsCashCoin } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";

import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/plus.png';

export const InfoCardsMenu = [
    {
        title:'Total Sales',
        barValue:55,
        value:'48,540',
         png:<BsCashCoin/>,
    },
    {
        title:'Site Visit',
        barValue:38,
        value:'16,678',
       png:<IoPersonAddOutline/>,
    },
    {
        title:'Searches',
        barValue:78,
        value:'78,856',
      png:<RiUserSearchLine/>,
    },
   
];

export const usersInfo = [
    {
        name:'John Travolta',
        noti:'bought 4 tickets',
        time:' 45 min ago',
        img:img1,
    },
    {
        name:'Lili Bell',
        noti:'bought 1 tecket',
        time:' 15 min ago',
        img:img2,
    },
    {
        name:'Zack Moore',
        noti:'bought 2 tickets',
        time:' 30 min ago',
        img:img3,
    },
    {
        name:'More',
        noti:'New User',
        time:' ',
        img:img4,
    },

]