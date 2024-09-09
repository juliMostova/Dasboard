import React from 'react';
import './CardsStyle.css';
import { LayoutGroup } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";




function Cards({barValue,title,value,png}) {
  return (
    <LayoutGroup>
      <div className='card'>
         <div className='circleBar'>
                  <CircularProgressbar className='circle-Icon' value={barValue}
                   text={`${barValue}%`}
            /> 
    </div>
        <div className='ditail'>
        <span>{title}</span>
        <span>{value}$</span>
        </div>
<span className='png'>{png}</span>

      </div>
    </LayoutGroup>
  );
}

export default Cards;
