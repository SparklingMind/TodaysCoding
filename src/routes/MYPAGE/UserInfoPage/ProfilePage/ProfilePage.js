import React, { useState, useEffect } from 'react';
import { ProfilePageStyle } from "./ProfilePage.style"
import { Link } from 'react-router-dom';
import axios from "axios"



const ProfilePage = () => {



  return (
    <ProfilePageStyle.Container>
      <ProfilePageStyle.Header>
        <Link to="/mypage/userInfo">
          <ProfilePageStyle.Button>뒤로가기</ProfilePageStyle.Button>
        </Link>
        <ProfilePageStyle.Title>프로필</ProfilePageStyle.Title>
        <ProfilePageStyle.Button>저장</ProfilePageStyle.Button>
      </ProfilePageStyle.Header>
      <ProfilePageStyle.ProfileImageContainer>
        <ProfilePageStyle.CameraIcon>📷</ProfilePageStyle.CameraIcon>
      </ProfilePageStyle.ProfileImageContainer>
      <ProfilePageStyle.Input
        type="text"
        placeholder="닉네임"

      />
      <ProfilePageStyle.Textarea
        rows="4"
        placeholder="자기소개"

      ></ProfilePageStyle.Textarea>
    </ProfilePageStyle.Container>
  );
};

export default ProfilePage;
