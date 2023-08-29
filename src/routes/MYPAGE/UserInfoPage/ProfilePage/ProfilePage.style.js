import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 30px;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  flex-grow: 2;
  font-family: fontMedium;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ProfileImageContainer = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #e0e0e0;
  position: relative;
  left: 15px;
  margin-bottom: 30px;
`;

const CameraIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 40%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 40%;
  padding: 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  resize: vertical;
`;

export const ProfilePageStyle = {
    Container,
    Header,
    Title,
    Button,
    ProfileImageContainer,
    CameraIcon,
    Input,
    Textarea
}