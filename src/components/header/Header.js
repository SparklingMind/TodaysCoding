import React from "react";
import "./Header.css";
// import { VscAccount } from "react-icons/vsc";
function Header() {
  return (
    <div className="headerWrap">
      <img className="logo" src="/feed-logo.png" alt="logo" />
      <div className="userWrap">
      <div className="personUser">
        <img className="profile-icon" src="profile-icon.png" alt="profile-icon" />
          <span className="userName">me</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
