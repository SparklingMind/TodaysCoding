import styled from "styled-components"

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

const HomePageStyles = {
    Logo,
    UpperContainer,
    LowerContainer
}

export default HomePageStyles