import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import LoginButton from "../components/LoginButton";

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
    return(
        <div>
            <Logo><img src="/logo.jpg" /></Logo>
            <UpperContainer>
                <h1 onClick={handleHome}>오늘도 코딩</h1>
            </UpperContainer>
            <LowerContainer>
            <FloatingLabel controlId="floatingInput" label="아이디" className="mb-3">
                <Form.Control type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="비밀번호">
                <Form.Control type="password" placeholder="" />
            </FloatingLabel>
            </LowerContainer>
            <ButtonContainer>
                <LoginButton />
            </ButtonContainer>
        </div>
    )
}

export default LoginPage