import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import SignUpButton from "../components/SignUpButton";
import DuplicateIdModal from "../components/DuplicateIdModal"
import SignUpCompleteModal from "../components/SignUpCompleteModal";

const UpperContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 100px;
margin-top: 10vh;

    h1 {
        font-size: 45px;
        letter-spacing: 0px;
        cursor: pointer;
        &:hover {
          color: gray;
          transition: color 0.3s ease;
      }
    }    
    
    h1 > a {
        text-decoration: inherit;
        color: inherit;
    }
`
const LowerContainer = styled.div`
display: flex;
flex-direction: column;
`
const Sign = styled.span`
display: flex;
justify-content: center;
width: 70%;
font-size: 20px;
font-weight: 600;
`

const Underline = styled.div`
border-top: 2px solid gray;
width: 40%;
margin: 20px auto;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .idLabel, .pwdLabel, .pwdConfirmLabel, .emailLabel {
        display: flex;
        margin-left: 10px;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 600;
        color: gray;
    } 
    
    #userIdInput {
      display: flex;
      width: 75%;
      margin-right: 10px;
    }

    .customInput::placeholder {
        font-size: 12px;
    }

    .form {
      margin: 0 auto;
      width: 20%;
      position: relative;
    }
    .customInput {
      max-width: 100% !important;
    }
`
const IdContainer = styled.div`
display: flex;
  #customButton {
    font-weight:500
  }
`

const ButtonContainer = styled.div`
  margin-top: 20px;
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const VerifyPwd = styled.div`
    color: red;
    font-size: 12px;
    margin: 5px 10px auto;
`



const SignUpPage = () => {
  const navigate = useNavigate();
  const handleHome= () => {
    navigate("/")
}
  const [pwd, setPwd] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")
  const [email, setEmail] = useState('');
  const [isEmailValid, setEmailValid] = useState(true);
  const [idCheckModal, setidCheckModal] = useState(false);
  const [signUpModal, setsignUpModal] = useState(false);

  const handlePassWord = (event) => {
    setPwd(event.target.value)
  }

  const handleConfirmPassWord = (event) => {
    setConfirmPwd(event.target.value);
  }

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setEmailValid(emailPattern.test(inputEmail));
  };

 
    return (
    <div>
        <UpperContainer>
            <h1 onClick={handleHome}>오늘도 코딩</h1>
        </UpperContainer>
        <LowerContainer>
            <Sign>회원가입</Sign>
            <Underline></Underline>
        </LowerContainer>
        <MainContainer>
            <Form className="form">
                <Form.Group className="idInput">
                    <Form.Label className="idLabel">아이디</Form.Label>
                    <IdContainer>
                        <Form.Control id="userIdInput"className="customInput" type="text" placeholder="아이디" />
                        <Button id="idCheckButton"variant="primary" onClick={() => setidCheckModal(true)}>
                          중복 확인
                        </Button>
                      </IdContainer>
                </Form.Group>
                <Form.Group className="pwdInput">
                    <Form.Label className="pwdLabel">비밀번호</Form.Label>
                    <Form.Control className="customInput" type="password" placeholder="비밀번호" 
                    onChange={handlePassWord}/>
                </Form.Group>
                <Form.Group className="pwdInput">
                    <Form.Label className="pwdConfirmLabel">비밀번호 확인</Form.Label>
                    <Form.Control className="customInput" type="password" placeholder="비밀번호 확인" 
                    onChange={handleConfirmPassWord}/>
                    {
                      pwd === confirmPwd? "" : <VerifyPwd>비밀번호가 일치하지 않습니다.</VerifyPwd>
                    }
                </Form.Group>
                <Form.Group className="emailInput">
                    <Form.Label className="emailLabel">이메일</Form.Label>
                    <Form.Control className="customInput" type="email" placeholder="이메일" 
                    onChange={handleEmailChange}/>
                    {
                      isEmailValid? "" : "<VerifyEmail>이메일 형식이 올바르지 않습니다.</VerifyEmail>"
                    }
                </Form.Group>
                <ButtonContainer>
                <Button id="SignUpButton"variant="primary" onClick={() => setsignUpModal(true)}>가입하기</Button>
               </ButtonContainer>
            </Form>
        </MainContainer>
          <DuplicateIdModal show={idCheckModal} onHide={() => setidCheckModal(false)}/>
          <SignUpCompleteModal show={signUpModal} onHide={() => setsignUpModal(false)}/>
    </div>
    )
}

export default SignUpPage