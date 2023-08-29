import { MyPageStyle } from "./MyPage.style";
import { useNavigate } from "react-router-dom";

const MyPage = () => {

  const nav = useNavigate()
  const handleUserInfo = () => {
    nav("/mypage/userinfo")
  }
  



  return (
    <div>
      <MyPageStyle.UpperContainer>
        <img id="logoImage" src="/logo.jpg" alt="로고" />
        <span>오늘도 코딩</span>
      </MyPageStyle.UpperContainer>
      <MyPageStyle.LowerContainer>
        <MyPageStyle.ProfileWrapper>
          <img id="profileImage" src="/profile.jpg" />
          <span id="userName">홍길동(아무개)</span>
        </MyPageStyle.ProfileWrapper>
      </MyPageStyle.LowerContainer>
      <MyPageStyle.MainContainer>
        <MyPageStyle.UpperLine />
        <MyPageStyle.ListWrapper>
          <ul>
            <li onClick={handleUserInfo}>회원정보</li>
            <MyPageStyle.UnderLine />
            <li>공지사항</li>
            <MyPageStyle.UnderLine />
            <li>버전</li>
            <MyPageStyle.UnderLine />
            <li>설정</li>
          </ul>
        </MyPageStyle.ListWrapper>
        <MyPageStyle.SplitLine />
      </MyPageStyle.MainContainer>
    </div>
  );
};

export default MyPage;
