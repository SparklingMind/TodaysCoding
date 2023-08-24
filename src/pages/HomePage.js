import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Logo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30vh;
`

const UpperContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 30px;
margin: 20px 0 40px;

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
justify-content: center;
font-size: 18px;
letter-spacing: 1.1px;
font-weight: 600;

    .loginBtn {
        margin-right: 20px;
    }
`

const HomePage = () => {
    const navigate = useNavigate(); 

    const handleLogin = () => {
        navigate("/login"); 
    }
    const handleSignUp = () => {
        navigate("/signup")
    }
    return (
        <div>
            <Logo><img src="/logo.jpg" /></Logo>
            <UpperContainer>
                <h1>오늘도 코딩</h1>
            </UpperContainer>
             <LowerContainer> 
                <Button variant="secondary" className="loginBtn" onClick={handleLogin}>로그인</Button>{' '}
                <Button variant="secondary" className="signUpBtn" onClick={handleSignUp}>회원가입</Button>{' '}
             </LowerContainer>
        </div>
    )
}


export default HomePage