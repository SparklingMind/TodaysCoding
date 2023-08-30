import React, { useState, useEffect } from "react";
import { MyPageStyle } from "./MyPage.style";
import { ROUTE } from "../../routes/routes";
import { Link } from "react-router-dom";
import { apiInstance } from "../../utils/api";
import Nav from "../../components/nav/Nav";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
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
  console.log(data);

  const nav = useNavigate();
  const handleHome = () => {
    nav("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    handleHome();
  };

  return (
    <div>
      <MyPageStyle.UpperContainer>
        <img id="logoImage" src="/main-logo.png" alt="로고" />
      </MyPageStyle.UpperContainer>
      <MyPageStyle.LowerContainer>
        <MyPageStyle.ProfileWrapper>
          <img id="profileImage" src={"/profile.jpg"} />
          {/* 데이터가 있으면 name표시 */}
          <span id="userName">
            {data?.name}({data?.nickname})
          </span>
        </MyPageStyle.ProfileWrapper>
      </MyPageStyle.LowerContainer>
      <MyPageStyle.MainContainer>
        <MyPageStyle.UpperLine />
        <MyPageStyle.ListWrapper>
          <ul>
            <Link to={ROUTE.USERINFO.link}>
              <li>회원정보</li>
            </Link>
            <MyPageStyle.UnderLine />
            <li>공지사항</li>
            <MyPageStyle.UnderLine />
            <li>버전</li>
            <MyPageStyle.UnderLine />
            <li>설정</li>
            <MyPageStyle.UnderLine />
            <li onClick={handleLogout}>로그아웃</li>
          </ul>
        </MyPageStyle.ListWrapper>
      </MyPageStyle.MainContainer>
      <Nav></Nav>
    </div>
  );
};

export default MyPage;
