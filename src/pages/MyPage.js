import MyPageStyles from "./MyPage.styles"

const MyPage = () => {
    return (
        <div>
            <MyPageStyles.UpperContainer>
                <img id="logoImage" src="/logo.jpg" alt="로고" />
                <span>오늘도 코딩</span>
            </MyPageStyles.UpperContainer>
            <MyPageStyles.LowerContainer>
                <MyPageStyles.ProfileWrapper>
                    <img id="profileImage" src="/profile.jpg" />
                    <span id="userName">홍길동(아무개)</span>
                </MyPageStyles.ProfileWrapper>
            </MyPageStyles.LowerContainer>
            <MyPageStyles.MainContainer>
                <MyPageStyles.UpperLine></MyPageStyles.UpperLine>
                    <MyPageStyles.ListWrapper>
                        <ul>
                            <li>회원정보</li>
                            <MyPageStyles.UnderLine />
                            <li>공지사항</li>
                            <MyPageStyles.UnderLine />
                            <li>버전</li>
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