import React, { useState } from "react"; 
import MyPageStyles from "./MyPage.styles";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const nav = useNavigate()
    const handleUserInfo = () => {
        nav("/mypage/userinfo")
    }
    const handleAnnouncement = () => {
        nav("/mypage/announcement")
    }
    const handleVersion = () => {
        nav("/mypage/version")
    }

    return ( 
        <div>
            <MyPageStyles.UpperContainer>
                <img id="logoImage" src="/logo.jpg" alt="로고" />
                <h1>오늘도 코딩</h1>
            </MyPageStyles.UpperContainer>
            <MyPageStyles.LowerContainer>
                <MyPageStyles.ProfileWrapper>
                    <img id="profileImage" src="/profile.jpg" alt="유저 프로필"/>
                    <span id="userName">홍길동(아무개)</span>
                </MyPageStyles.ProfileWrapper>
            </MyPageStyles.LowerContainer>
            <MyPageStyles.MainContainer>
                <MyPageStyles.UpperLine></MyPageStyles.UpperLine>
                    <MyPageStyles.ListWrapper>
                        <ul>
                            <li onClick={handleUserInfo}>회원 정보 수정</li>
                            <MyPageStyles.UnderLine />
                            <li onClick={handleAnnouncement}>공지사항</li>
                            <MyPageStyles.UnderLine />
                            <li onClick={handleVersion}>버전</li>
                            <MyPageStyles.UnderLine />
                            <li>로그아웃</li>
                        </ul>
                    </MyPageStyles.ListWrapper>
                    <MyPageStyles.SplitLine/>
            </MyPageStyles.MainContainer>

        </div>
    );
};

export default MyPage