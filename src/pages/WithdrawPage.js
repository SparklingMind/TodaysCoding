import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import WithdrawPageStyles from "./WithdrawPage.styles"
import WithdrawCheckModal from "../components/WithdrawCheckModal"
import WithdrawFailModal from "../components/WithdrawFailModal"
import WithdrawCompleteModal from "../components/WithdrawCompleteModal";
import axios from "axios"

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
    <WithdrawPageStyles.Container>
        <WithdrawPageStyles.Logo>
          <img src="logo.jpg" />
          <h1>오늘도 코딩</h1>
        </WithdrawPageStyles.Logo>
        <WithdrawPageStyles.Message>
            <h2>탈퇴 안내</h2>
            <span>회원탈퇴를 진행하기 전에 아래 항목을 꼭 확인해주세요.</span>
        </WithdrawPageStyles.Message>
        <WithdrawPageStyles.Terms>
            <img src="check_black.png" />
            <span>탈퇴 후 개인정보는 모두 삭제됩니다.</span>
        </WithdrawPageStyles.Terms>
        <WithdrawPageStyles.MainContents>
            <WithdrawPageStyles.Box1>
               <WithdrawPageStyles.Title>
                   <h3>회원 활동내역</h3>
               </WithdrawPageStyles.Title>
            <WithdrawPageStyles.VerticalBar />
                <span>회원이 작성한 일지 및 todo리스트 등 활동내역 삭제</span>
            </WithdrawPageStyles.Box1>
            <WithdrawPageStyles.Box2>
                <WithdrawPageStyles.Title>
                    <h3>프로필 정보</h3>
                </WithdrawPageStyles.Title>
                <WithdrawPageStyles.VerticalBar />
                <span>이메일 주소, 아이디, 비밀번호 정보 삭제</span>
            </WithdrawPageStyles.Box2>
        </WithdrawPageStyles.MainContents>
        <WithdrawPageStyles.LowerContainer>
            <input type="checkbox" className="check" onClick={handleClick}/>
            <span>안내사항을 모두 확인하였으며 이에 동의합니다.</span>
        </WithdrawPageStyles.LowerContainer>
        <WithdrawPageStyles.ButtonContainer>
            <WithdrawPageStyles.Buttons variant="secondary" onClick={handleBack}>뒤로가기</WithdrawPageStyles.Buttons>{' '}
            <WithdrawPageStyles.Buttons variant="danger" onClick={handleCheckModal}>회원탈퇴</WithdrawPageStyles.Buttons>{' '}
        </WithdrawPageStyles.ButtonContainer>
        <WithdrawCheckModal show={checkModal} onHide={() => setCheckModal(false)} onWithdraw={handleWithdraw} />
        <WithdrawFailModal show={failModal} onHide={() => setFailModal(false)} />
        <WithdrawCompleteModal show={completeModal} onHide={() => setCompleteModal(false)} />
    </WithdrawPageStyles.Container>
  );
};

export default WithdrawPage;