import React from "react";
import snipper from "../images/snipper.gif";

export default function SnipperItem() {
  return (
    <div className="snipper-main">
      <img className="snipper" src={snipper} alt="snipperimage" />
      <p>Loading...</p>
      
    </div>
  );
}
