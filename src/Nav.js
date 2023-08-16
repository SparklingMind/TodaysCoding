import React from "react";
import "./Nav.css";
import { BiCart, BiHomeAlt, BiSearchAlt2, BiSolidUser } from "react-icons/bi";

function Nav() {
  return (
    <div style={{ clear: "both" }} className="navWrap">
      <div className="feed">
        <BiHomeAlt></BiHomeAlt>
        <span>피드</span>
      </div>
      <div className="search">
        <BiSearchAlt2></BiSearchAlt2>
        <span>검색</span>
      </div>
      <div className="store">
        <BiCart></BiCart>
        <span>상점</span>
      </div>
      <div className="myPage">
        <BiSolidUser></BiSolidUser>
        <span>My</span>
      </div>
    </div>
  );
}

export default Nav;
