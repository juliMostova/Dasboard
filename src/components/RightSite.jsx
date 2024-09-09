import React, { useState } from "react";
import Reminders from "./Reminders";
import { BsPencil } from "react-icons/bs";
import Diagram from "./Diagram";

function RightSite() {
  const [isOpenPencil, setIsOpenPencil] = useState(false);

  return (
    <div className="right-site" style={{ position: "relative" }}>
      <h3 style={{marginTop:'10px'}}>Site Visit</h3>
      <Diagram/>
      <div
        className="info_block"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <h3>Notes</h3>
        <BsPencil
          className="byPencil"
          onClick={() => setIsOpenPencil(!isOpenPencil)}
          style={{ cursor: "pointer",color:'green',fontWeight:' bolder' }}
        />
      </div>

      <div
        className="notes"
        style={{
          width: "98%",
          height: "50%",
          borderRadius: "10px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <Reminders
          isOpenPencil={isOpenPencil}
          setIsOpenPencil={setIsOpenPencil}
        />
      </div>
    </div>
  );
}

export default RightSite;
