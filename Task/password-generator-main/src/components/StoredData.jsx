import React from "react";
import "./StoredData.css";
const StoredData = ({ storedData }) => {
  return (
    <div className="mainCont">
      {storedData.map((val) => (
        <li key={Math.random()}>{val}</li>
      ))}
    </div>
  );
};

export default StoredData;
