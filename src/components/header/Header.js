import React, { useState, useEffect } from "react";
import "./Header.css";
import { VscAccount } from "react-icons/vsc";
import { apiInstance } from "../../utils/api";

function Header() {
  const [data, setData] = useState(); //사용자 정보 데이터 상태(이름, 아이디, 비밀번호, 이메일 등등)
  // GET 요청을 보내고 데이터를 받아옴
  useEffect(() => {
    //사용자 정보 조회 get 요청
    apiInstance
      .get("/api/users", {})
      .then((response) => {
        setData(response.data); // get 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중에 오류가 발생했습니다.:", error);
      });
  }, []);
  return (
    <div className="headerWrap">
      <div className="logo">오늘도 코딩</div>
      <div className="userWrap">
        <div className="personUser">
          <VscAccount style={{ fontSize: 40 }} />
          {/* 데이터가 있으면 name표시 */}
          <span className="userName">{data?.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
