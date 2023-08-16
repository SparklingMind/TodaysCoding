import React from "react";
import "./Header.css";
import { VscAccount } from "react-icons/vsc";
function Header() {
  return (
    <div className="width">
      <div className="title">오늘도 코딩</div>
      <div className="userWrap">
        <div className="personUser">
          <VscAccount style={{ fontSize: 40 }} />
          <span className="userName">me</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
