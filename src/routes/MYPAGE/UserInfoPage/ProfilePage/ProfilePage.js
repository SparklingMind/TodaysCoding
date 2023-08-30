import React, { useState, useEffect } from 'react';
import { ProfilePageStyle } from "./ProfilePage.style"
import { Link } from 'react-router-dom';
import axios from "axios"



const ProfilePage = () => {
  
  const token = localStorage.getItem("token");
  const url = `http://34.64.151.119/api/users`;

  const [data, setData] = useState({
    nickname: "",
    aboutMe: "",
 })

 useEffect(() => {
  axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      const { nickname, aboutMe } = response.data;
      setData({ nickname, aboutMe });
    })
    .catch((error) => {
      console.error("에러 발생", error);
    });
}, []);

const handleSave = () => {
  axios.patch(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log("유저 정보가 변경되었습니다");
    })
    .catch((error) => {
      console.error("에러 발생", error);
    });
};

  return (
    <ProfilePageStyle.Container>
      <ProfilePageStyle.Header>
        <Link to="/mypage/userInfo">
          <ProfilePageStyle.Button>뒤로가기</ProfilePageStyle.Button>
        </Link>
        <ProfilePageStyle.Title>프로필</ProfilePageStyle.Title>
        <ProfilePageStyle.Button onClick={handleSave}>저장</ProfilePageStyle.Button>
      </ProfilePageStyle.Header>
      <ProfilePageStyle.ProfileImageContainer>
        <ProfilePageStyle.CameraIcon>📷</ProfilePageStyle.CameraIcon>
      </ProfilePageStyle.ProfileImageContainer>
      <ProfilePageStyle.Input
        type="text"
        placeholder="닉네임"
        value={data.nickname}
        onChange={(e) => setData({ ...data, nickname: e.target.value })} />
      <ProfilePageStyle.Textarea
        rows="4"
        placeholder="자기소개"
        value={data.aboutMe}
        onChange={(e) => setData({ ...data, aboutMe: e.target.value })} />
    </ProfilePageStyle.Container>
  );
};

export default ProfilePage;
