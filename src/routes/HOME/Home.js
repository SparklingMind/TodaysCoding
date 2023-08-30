import React, { useState } from "react";
import Header from "../../components/header/Header";
import CalendarFunc from "../../components/calendar/CalendarFunc.js";
import DiaryHome from "../../components/diary/DiaryHome";
import TodoComponent from "../../components/todo/TodoComponent";
import styled from "styled-components";
import axios from "axios";
import Nav from "../../components/nav/Nav";

const AppSections = styled.div`
  margin-bottom: 100px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  gap: 16px; // 간격 조절

  > div {
    flex: 1;
    background: #fff; // 배경색

    &:not(:last-child) {
      border-right: 1px solid #ccc; // 구분선
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

  //선택한 날짜 로컬스토리지에 저장
  const dateInSessionStorage = sessionStorage.getItem("clickedDate");
  const [date, setDate] = useState(
    dateInSessionStorage ? dateInSessionStorage : formattedToday
  );

  // 하위 컴포넌트로 전달할 함수
  const handleDataFromCalendarFunc = (data) => {
    setDate(data); // 받은 데이터를 상태에 업데이트
    sessionStorage.setItem("clickedDate", data);
  };

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

      <Nav />
    </div>
  );
}
export default Home;
