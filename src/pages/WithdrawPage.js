import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import WithdrawCheckModal from "../components/WithdrawCheckModal"
import WithdrawFailModal from "../components/WithdrawFailModal"
import WithdrawCompleteModal from "../components/WithdrawCompleteModal";
import axios from "axios"

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 0 auto;
  width: 100%;
  min-width: 950px;
`;

const Logo = styled.div`
  display: flex;
  width: 40%; 
  margin: 10vh auto;
  align-items: center;

  img {
    width: 40px;
    margin-right: 10px;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Message = styled.div`
  width: 40%;
  margin: 0 auto 100px;
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  span {
    letter-spacing: 1.1px;  
    font-weight: 500;
    color: #202020;
    letter-spacing: 1.2px;
  }
`

const Terms = styled.div`
  display: flex;
  margin: 0 auto;
  width: 40%;
  align-items: center;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`

const MainContents = styled.div`

`
const Title = styled.div`
    width: 20%;

    h3 {
        font-weight: 600;
        display: flex;
        font-size: 18px;
        margin-left: 30px;
        margin-bottom: 0;
        letter-spacing: 1px;
      } 
`
const VerticalBar = styled.div`
  border-left: 1px solid gray;
  width: 5%; 
  height: 70px;
`;

const Box1 = styled.div`
  display: flex;
  border-top: 1px solid black;
  width: 40%;
  height: 70px;
  margin: 30px auto 0;
  align-items: center;

  span {
    font-weight: 600;
    color: #666666;
    letter-spacing: 1.2px;
  }

`

const Box2 = styled.div`
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 40%;
  height: 70px;
  margin: 0 auto;
  align-items: center;

  span {
    font-weight: 600;
    color: #666666;
    letter-spacing: 1.2px;
  }
`

const LowerContainer = styled.div`
  display: flex;
  width: 40%;
  margin: 50px auto;
  align-items: center;

  .check {
    width: 15px;
    height: 15px;
    border-radius: 100px;
    margin-right: 10px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto;
  width: 40%;
`

const Buttons = styled(Button)`
  margin-right: 20px;
  margin-left: 20px;
`

const WithdrawPage = () => {
  const nav = useNavigate()
  const handleBack = () => {
    nav(-1)
  }

  const [clicked, setClicked] = useState(false)
  const [checkModal, setCheckModal] = useState(false)
  const [failModal, setFailModal] = useState(false)
  const [completeModal, setCompleteModal] = useState(false)

  const handleWithdraw = () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.delete("http://34.64.151.119/api/users", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log("회원 탈퇴 성공:", response.data);
        setCompleteModal(true)
      })
      .catch((error) => {
        console.error("회원 탈퇴 오류:", error);
      });
    }
    else {
      console.log("올바른 경로가 아닙니다.")
    }
  };

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleCheckModal = () => {
    if(!clicked) setFailModal(true)
    else {
     setCheckModal(true)
    }
  }

  return (
    <Container>
        <Logo>
          <img src="logo.jpg" />
          <h1>오늘도 코딩</h1>
        </Logo>
        <Message>
            <h2>탈퇴 안내</h2>
            <span>회원탈퇴를 진행하기 전에 아래 항목을 꼭 확인해주세요.</span>
        </Message>
        <Terms>
            <img src="check_black.png" />
            <span>탈퇴 후 개인정보는 모두 삭제됩니다.</span>
        </Terms>
        <MainContents>
            <Box1>
               <Title>
                   <h3>회원 활동내역</h3>
               </Title>
            <VerticalBar />
                <span>회원이 작성한 일지 및 todo리스트 등 활동내역 삭제</span>
            </Box1>
            <Box2>
                <Title>
                    <h3>프로필 정보</h3>
                </Title>
                <VerticalBar />
                <span>이메일 주소, 아이디, 비밀번호 정보 삭제</span>
            </Box2>
        </MainContents>
        <LowerContainer>
            <input type="checkbox" className="check" onClick={handleClick}/>
            <span>안내사항을 모두 확인하였으며 이에 동의합니다.</span>
        </LowerContainer>
        <ButtonContainer>
            <Buttons variant="secondary" onClick={handleBack}>뒤로가기</Buttons>{' '}
            <Buttons variant="danger" onClick={handleCheckModal}>회원탈퇴</Buttons>{' '}
        </ButtonContainer>
        <WithdrawCheckModal show={checkModal} onHide={() => setCheckModal(false)} onWithdraw={handleWithdraw} />
        <WithdrawFailModal show={failModal} onHide={() => setFailModal(false)} />
        <WithdrawCompleteModal show={completeModal} onHide={() => setCompleteModal(false)} />
    </Container>
  );
};

export default WithdrawPage;