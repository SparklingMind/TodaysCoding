import React from "react";
import "./Nav.css";
import { BiCart, BiHomeAlt, BiSearchAlt2, BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navWrap">
      <Link to="/home">
        <div className="feed">
          <BiHomeAlt></BiHomeAlt>
          <span>피드</span>
        </div>
      </Link>
      <Link to={"/search"}>
        <div className="search">
          <BiSearchAlt2></BiSearchAlt2>
          <span>검색</span>
        </div>
      </Link>
      <div className="store">
        <BiCart></BiCart>
        <span>상점</span>
      </div>
      <Link to={"/mypage"}>
        <div className="myPage">
          <BiSolidUser></BiSolidUser>
          <span>My</span>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
