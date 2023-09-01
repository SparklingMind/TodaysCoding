import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Title = styled.h2`
  text-align: center;
  flex-grow: 2;
  font-family: fontMedium;
`;

const Spacer = styled.div`
  background-color: transparent;
  width: 55.3px;
`;

const UpperContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  #logoImage {
    width: 50px;
    height: 50px;
  }

  span {
    margin-top: 10px;
    font-weight: 600;
  }
`;

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 50%;
`;

const UpperLine = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 1px;
  background-color: black;
  
`;


const ListWrapper = styled.div`
  
  height: 180px;
  ul {
    line-height: 3.5;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0 auto;
    width: 100%;
  }
`;

const UnderLine = styled.div`
  border-bottom: 1px solid #d5d5d5;
  width: 100%;
`;

const SplitLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid gray;
`;

const StyledLink = styled(Link)`
  text-decoration: none;  // 밑줄 제거
  color: inherit;  // 부모 요소의 색상을 상속받음
  &:hover {
    text-decoration: none;  // 마우스 오버 시 밑줄이 나타나지 않도록 설정
  }
`;

const UserInfo = () => {
  return (
    <Container>
      <Header>
      <Link to="/mypage">
        <Button>뒤로가기</Button>
      </Link>
        <Title>회원정보</Title>
        <Spacer />
      </Header>
      <UpperContainer>
        <img id="logoImage" src="/logo.jpg" alt="로고" />
        <span>오늘도 코딩</span>
      </UpperContainer>
     
      <MainContainer>
        <UpperLine></UpperLine>
        <ListWrapper>
          <ul>
            <li><StyledLink to="/mypage/userInfo/profile">프로필</StyledLink></li>
            <UnderLine />
            <li>비밀번호 재설정</li>
            <UnderLine />
            <li style = {{color: "red",}}>계정 삭제하기</li>
          </ul>
        </ListWrapper>
        <SplitLine />
      </MainContainer>
      </Container>
    
  );
};

export default UserInfo;
