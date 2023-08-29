import styled from "styled-components";

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
`;
const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Sign = styled.span`
  display: flex;
  justify-content: center;
  width: 70%;
  font-size: 20px;
  font-weight: 600;
`;

const Underline = styled.div`
  border-top: 2px solid gray;
  width: 40%;
  margin: 20px auto;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .idLabel,
  .pwdLabel,
  .pwdConfirmLabel,
  .emailLabel {
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
    margin: 0 auto 200px;
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
`;
const IdContainer = styled.div`
  display: flex;
  #customButton {
    font-weight: 500;
  }
`;

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
`;
const VerifyEmail = styled.div`
  color: red;
  font-size: 12px;
  margin: 5px 10px auto;
`;

const SignUpPageStyles = {
  UpperContainer,
  LowerContainer,
  Sign,
  Underline,
  MainContainer,
  IdContainer,
  ButtonContainer,
  VerifyEmail,
  VerifyPwd,
};

export default SignUpPageStyles;
