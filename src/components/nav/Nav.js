import React from "react";
import "./Nav.css";
import { BiCart, BiHomeAlt, BiSolidUser, BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom"; // useNavigate를 import
import { ROUTE } from "../../routes/routes";

function Nav() {
  const nav = useNavigate(); // 컴포넌트 내부에서 useNavigate 호출
  const handleHome = () => {
    nav("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    handleHome();
  };

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
      <div className="logout" onClick={handleLogout} style={{cursor:"pointer"}}>
        <BiLogOut></BiLogOut>
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Nav;
