import React, { useState } from "react";
import Reminders from "./Reminders";
import { BsPencil } from "react-icons/bs";
import Diagram from "./Diagram";
import "./RightSiteStyle.css";

function RightSite() {
  const [isOpenPencil, setIsOpenPencil] = useState(false);

  return (
    <div className="right-site" style={{ position: "relative" }}>
      <h3 style={{ marginTop: "10px" }}>Site Visit</h3>
      <Diagram />
      <div
        className="info_block"
        
      >
        <h3>Notes</h3>
        <BsPencil
          className="byPencil"
          onClick={() => setIsOpenPencil(!isOpenPencil)}
        />
      </div>

      <div className="notes">
        <Reminders
          isOpenPencil={isOpenPencil}
          setIsOpenPencil={setIsOpenPencil}
        />
      </div>
    </div>
  );
}

export default RightSite;
