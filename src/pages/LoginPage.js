import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import LoginFailModal from "../components/LoginFailModal";
import LoginErrorModal from "../components/LoginErrorModal";
import axios from "axios";

const Logo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20vh;
`

const UpperContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 40px; /* 여기서 수정 */

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
`;

const LowerContainer = styled.div`
    width: 15%;
    margin: 0 auto;
`
const ButtonContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`

const LoginPage = () => {
  const navigate = useNavigate();
  const handleHome= () => {
    navigate("/")
}
 
const [id, setId] = useState("");
const [password, setPassword] = useState("");

const idInput = useRef();
useEffect(() => {
    idInput.current.focus()
}, [])

//모달
const [failModal, setFailModal] = useState(false);
const [errorModal, setErrorModal] = useState(false);

const handleLogin = () => {

    const url = "http://34.64.151.119/api/auth/login"
    const requestData = {
        id: id,
        password: "password"
    }
    
    axios.post(url, requestData)
    .then((response) => {
        if(!response.data.errorMessage)
        setId("")
        setPassword("")
        setFailModal(false)
        setErrorModal(false)
        console.log("로그인 성공:", response.data)
    })
    .catch((error) => {
        setErrorModal(true)
    })
  }


    return(
        <div>
            <Logo><img src="/logo.jpg" /></Logo>
            <UpperContainer>
                <h1 onClick={handleHome}>오늘도 코딩</h1>
            </UpperContainer>
            <LowerContainer>
            <FloatingLabel controlId="floatingInput" label="아이디" className="mb-3">
                <Form.Control type="text" placeholder="" ref={idInput} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="비밀번호">
                <Form.Control type="password" placeholder="" />
            </FloatingLabel>
            </LowerContainer>
            <ButtonContainer>
                <Button id="loginButton"variant="primary" onClick={handleLogin}>로그인</Button>
            </ButtonContainer>
            <LoginFailModal show={failModal} onHide={() => setFailModal(false)}/>
            <LoginErrorModal show={errorModal} onHide={() => setErrorModal(false)}/>
        </div>
    )
}

export default LoginPage