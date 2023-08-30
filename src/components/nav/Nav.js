import React from "react";
import "./Nav.css";
import { BiCart, BiHomeAlt, BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/routes";

function Nav() {
  return (
    <div className="navWrap">
      <Link to={ROUTE.HOME.link}>
        <div className="feed">
          <BiHomeAlt></BiHomeAlt>
          <span>피드</span>
        </div>
      </Link>
      <Link to={ROUTE.STORE.link}>
      <div className="store">
        <BiCart></BiCart>
        <span>스티커샵</span>
      </div>
      </Link>
      
      <Link to={ROUTE.MYPAGE.link}>
        <div className="myPage">
          <BiSolidUser></BiSolidUser>
          <span>My</span>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
