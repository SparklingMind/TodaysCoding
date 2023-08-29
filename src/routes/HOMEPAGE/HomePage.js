import React from "react"
import { useNavigate } from "react-router-dom"
import HomePageStyles from "./HomePage.styles"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <HomePageStyles.Logo><img src="/logo.jpg" /></HomePageStyles.Logo>
            <HomePageStyles.UpperContainer>
                <h1>오늘도 코딩</h1>
            </HomePageStyles.UpperContainer>
             <HomePageStyles.LowerContainer> 
                <Button variant="secondary" className="loginBtn" onClick={handleLogin}>로그인</Button>{' '}
                <Button variant="secondary" className="signUpBtn" onClick={handleSignUp}>회원가입</Button>{' '}
             </HomePageStyles.LowerContainer>
        </div>
    )
}


export default HomePage