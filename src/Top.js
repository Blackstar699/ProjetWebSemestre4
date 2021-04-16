import React from "react";
import "./Top.css";
import logo from "./img/logo.png";
import disconnect from "./img/disconnect.png";

function Top() {
    return (
    <nav className="top_black">
      <div className="top_contents">
        <img className="top_logo" src={logo} alt=""/>
        <img className="top_disconnect" src={disconnect} onClick="" alt=""/>
      </div>
    </nav>
  );
}

export default Top;
