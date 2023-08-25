import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import IdEmptyModal from "../components/IdEmptyModal";
import IdCheckedModal from "../components/IdCheckedModal";
import IdDuplicatedModal from "../components/IdDuplicatedModal"
import SignUpCompleteModal from "../components/SignUpCompleteModal";
import SignUpFailModal from "../components/SignUpFailModal"
import SignUpErrorModal from "../components/SignUpErrorModal"
import axios from "axios"

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
      width: 70%;
      margin-right: 15px;
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
    #SignUpButton {
      font-size: 16px;
      margin-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
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
const VerifyEmail = styled.div`
color: red;
font-size: 12px;
margin: 5px 10px auto;
`

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleHome= () => {
    navigate("/")
}

const [userData, setUserData] = useState({
  name: "",
  id: "",
  email: "",
  password: ""
})

  const [name, setName] = useState("")
  const [nameCheck, setNameChecked] = useState(false)
  const [id, setId] = useState("")
  const [idChecked, setIdChecked] = useState(false)
  const idInput = useRef();
  useEffect(() => {
      idInput.current.focus()
  }, [])

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordChecked, setPasswordChecked] = useState(false)
  
  const [email, setEmail] = useState('');
  const [emailTested, setEmailTested] = useState(true);
  const [emailChecked, setEmailChecked] = useState(false);
  //모달창 상태
  const [emptyModal, setEmptyModal] = useState(false);
  const [checkedModal, setCheckedModal] = useState(false);
  const [duplicatedModal, setDuplicatedModal] = useState(false);
  const [signUpFailModal, setSignUpFailModal] = useState(false);
  const [signUpErrorModal, setSignUpErrorModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const handleNameCheck = (event) => {
    setName(event.target.value)

    if(name.length >= 2) {
      setNameChecked(true)
    }
  }

  const handleIdCheck = () => {
    const url = `http://34.64.151.119/api/users/register/${id}`;
    const requestData = {
      id: userData.id
    };
    if(id.length == 0) {
      setEmptyModal(true)
      return
    }
    axios.post(url, requestData)
      .then((response) => {
        const responseMessage = response.data.message;
        if (responseMessage === "다른 아이디를 사용해주세요.") {
          setDuplicatedModal(true);
          setIdChecked(false)
        } else {
          setCheckedModal(true);
          setIdChecked(true)
        }
        })
      .catch((error) => {
        setSignUpErrorModal(true)
        console.error("아이디 중복 확인 오류:", error);
      });
  };
  

  const handleId = (event) => {
    setId(event.target.value)
  }

  const handlePassWord = (event) => {
    setPassword(event.target.value)
      if(password === confirmPassword) {
      setPasswordChecked(true)
    }
  }

  const handleConfirmPassWord = (event) => {
    setConfirmPassword(event.target.value);
    if(password === confirmPassword) {
      setPasswordChecked(true)
    }
  }
 
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
  
    if (inputEmail.length >= 8) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      setEmail(inputEmail);
      setEmailTested(emailPattern.test(inputEmail));
    } else {
      setEmail("");
      setEmailTested(true); 
      return
    }
  };

  const isEmailChecked = () => {
    if(email.length >= 8 && emailTested) {
      setEmailChecked(true)
    }
  }

  const handleData = (field, value) => {
    setUserData((datas) => ({
      ...datas,
      [field]: value
    }));
  };
  
  const signUpCheck = () => {
    if(idChecked && passwordChecked && emailChecked) {
      return true
    } else {
      return false
    }
  }
  const handleSignUp = () => {
    const jsonUserData = JSON.stringify(userData);
    console.log(jsonUserData)
    const url = "http://34.64.151.119/api/users/register";
  
    axios
      .post(url, jsonUserData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          setSignUpModal(true);
        } else {
          setSignUpErrorModal(true);
        }
      })
      .catch((err) => {
        console.error("요청 에러", err);
        setSignUpErrorModal(true);
        setSignUpModal(false);
      });
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
                    <Form.Label className="idLabel">이름</Form.Label>
                    <IdContainer>
                        <Form.Control id="userNameInput"className="customInput" type="text" placeholder="이름" ref={idInput} onChange={(event) => {
                          handleNameCheck(event);
                          handleData("name", event.target.value);}}/>
                      </IdContainer>
                </Form.Group>
                <Form.Group className="idInput">
                    <Form.Label className="idLabel">아이디</Form.Label>
                    <IdContainer>
                        <Form.Control id="userIdInput"className="customInput" type="text" placeholder="아이디" ref={idInput} onChange={(event) => {
                          handleId(event);
                          handleData("id", event.target.value);}}/>
                        <Button id="idCheckButton"variant="primary" onClick={handleIdCheck}>
                          중복 확인
                        </Button>
                      </IdContainer>
                </Form.Group>
                <Form.Group className="pwdInput">
                    <Form.Label className="pwdLabel">비밀번호</Form.Label>
                    <Form.Control className="customInput" type="password" placeholder="비밀번호" 
                      onChange={(event) => {
                      handlePassWord(event);
                      handleData("password", event.target.value);}}/>
                </Form.Group>
                <Form.Group className="pwdInput">
                    <Form.Label className="pwdConfirmLabel">비밀번호 확인</Form.Label>
                    <Form.Control className="customInput" type="password" placeholder="비밀번호 확인" 
                    onChange={handleConfirmPassWord}/>
                    {
                      password === confirmPassword? "" : <VerifyPwd>비밀번호가 일치하지 않습니다.</VerifyPwd>
                    }
                </Form.Group>
                <Form.Group className="emailInput">
                    <Form.Label className="emailLabel">이메일</Form.Label>
                    <Form.Control className="customInput" type="email" placeholder="이메일" 
                      onChange={(event) => {
                      handleEmailChange(event);
                      isEmailChecked();
                      handleData("email", event.target.value);}}/>
                    {
                      emailTested? "" : <VerifyEmail>이메일 형식이 올바르지 않습니다.</VerifyEmail>
                    } 
                </Form.Group>
                <ButtonContainer>
                <Button id="SignUpButton"variant="primary" onClick={() => {
                  if(!signUpCheck()) {
                    setSignUpFailModal(true)
                  } else {
                    handleSignUp()
                  }}}>
                    가입하기
                </Button>
               </ButtonContainer>
            </Form>
        </MainContainer>
        <div>
          <IdEmptyModal show={emptyModal} onHide={() => setEmptyModal(false)}/>
          <IdCheckedModal show={checkedModal} onHide={() => setCheckedModal(false)}/>
          <IdDuplicatedModal show={duplicatedModal} onHide={() => setDuplicatedModal(false)}/>
          <SignUpFailModal show={signUpFailModal} onHide={() => setSignUpFailModal(false)}/>
          <SignUpErrorModal show={signUpErrorModal} onHide={() => setSignUpErrorModal(false)}/>
          <SignUpCompleteModal show={signUpModal} onHide={() => setSignUpModal(false)}/>
        </div>
    </div>
    )
}

export default SignUpPage