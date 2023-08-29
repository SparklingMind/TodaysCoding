import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import CalendarFunc from "../../components/calendar/CalendarFunc.js";
import DiaryHome from "../../components/diary/DiaryHome";
import TodoComponent from "../../components/todo/TodoComponent";
import styled from 'styled-components';
import axios from "axios";



const AppSections = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  gap: 16px;  // 간격 조절

  > div {
    flex: 1;
    background: #fff;  // 배경색

    &:not(:last-child) {
      border-right: 1px solid #ccc;  // 구분선
    }
  }
`;



function Home() {
  //날짜 초깃값(오늘) 불러오기
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const formattedToday = year + month + day;
  const [date, setDate] = useState(formattedToday);

  // 상위 컴포넌트의 상태와 상태 변경 함수
  const [clickedDate, setClickedDate] = useState();
  // 하위 컴포넌트로 전달할 함수
  const handleDataFromCalendarFunc = (data) => {
    setClickedDate(data); // 받은 데이터를 상태에 업데이트
  };

  useEffect(() => {
    if (clickedDate !== undefined) {
      setDate(clickedDate);
    }
  }, [clickedDate]);

  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2OWE2Y2VmYTZmNjdiZjc0MTZhYzAiLCJpYXQiOjE2OTI4MzQ0NTQsImV4cCI6MTcwMDYxMDQ1NH0.IXDlGN3E_OmlKteegULvlDtMsyb_wF59_vJgH6LJuww";
  axios.get("http://34.64.151.119/api/days/records", {
    params: {
      date: clickedDate,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return (
    <div>
      <Header></Header>
      {/* 하위 컴포넌트에 함수를 props로 전달 */}
      <AppSections>
        <CalendarFunc
          sendDataToParent={handleDataFromCalendarFunc}
          style={{ flex: 1 }}
        />
        <CalendarFunc
          sendDataToParent={handleDataFromCalendarFunc}
          style={{ flex: 1 }}
        />
        {/* <TodoComponent clickedDate={date} style={{ flex: 1 }} /> */}
        <DiaryHome date={date} style={{ flex: 1.2 }} />
      </AppSections>
    </div>
    
  );
}
export default Home;
