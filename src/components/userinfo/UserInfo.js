import React from "react";
import styled from "styled-components";

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
  display: flex;
  width: 100%;
  margin-top: 30px;
  height: 1px;
  background-color: black;
  
`;


const ListWrapper = styled.div`
  display: flex;
  height: 230px;
  ul {
    margin-top: 30px;
    line-height: 3.5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0 auto;
  }
`;

const UnderLine = styled.div`
  border-bottom: 1px solid #d5d5d5;
  width: 48vw;
`;

const SplitLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid gray;
`;


const UserInfo = () => {
  return (
    <div>
      <UpperContainer>
        <img id="logoImage" src="/logo.jpg" alt="로고" />
        <span>오늘도 코딩</span>
      </UpperContainer>
     
      <MainContainer>
        <UpperLine></UpperLine>
        <ListWrapper>
          <ul>
            <li>프로필</li>
            <UnderLine />
            <li>아이디</li>
            <UnderLine />
            <li>비밀번호 재설정</li>
            <UnderLine />
            <li style = {{color: "red",}}>계정 삭제하기</li>
          </ul>
        </ListWrapper>
        <SplitLine />
      </MainContainer>
    </div>
  );
};

export default UserInfo;
