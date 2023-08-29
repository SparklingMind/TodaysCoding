import { MyPageStyle } from "./MyPage.style";
import { ROUTE } from "../../routes/routes";
import { Link } from "react-router-dom";

const MyPage = () => {
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
            <Link to={ROUTE.USERINFO.link}>
              <li>회원정보</li>
            </Link>
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
