import React from "react"
import UserInfoPageStyle from "./UserInfoPage.style"
import styled from "styled-components"

const UpperContainer = styled.div`
margin: 10vh auto;
width: 70%;
display: flex;
flex-direction: column;
align-items: center;

#logoImage {
    width: 50px;
    height: 50px;
}

h1 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 30px;
    cursor: pointer;
}
`

const LowerContainer = styled.div`
    width: 40%;
    margin: 0 auto;

    h3 {
        font-size: 20px;
        font-weight: 600;
    }
`

const Underline = styled.div`
border-top: 2px solid gray;
width: 40%;
margin: 20px auto;
`

const SplitLine = styled.div`
height: 1px;
width: 100%;
border-top: 1px solid gray;
`
const MainContainer = styled.div``
const UserInfoPage = () => {
    return (
        <div>
            <UpperContainer>
                <img id="logoImage" src="/logo.jpg" alt="로고" />
                <h1>오늘도 코딩</h1>
                <Underline />
            </UpperContainer>
            <LowerContainer>
                <h3>회원 정보 수정</h3>
                <SplitLine ></SplitLine>
            </LowerContainer>
            <MainContainer>
            </MainContainer>
        </div>
    )
}

export default UserInfoPage