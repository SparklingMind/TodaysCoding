import React from "react";
import CalendarFunc from "../../components/calendar/CalendarFunc";
import Header from "../../components/header/Header.js";
import DiaryHome from "../../components/diary/DiaryHome";
import TodoComponent from "../../components/todo/TodoComponent";

function Home() {
  return (
    <div>
      <Header></Header>
      <CalendarFunc></CalendarFunc>
      <TodoComponent></TodoComponent>
      <DiaryHome></DiaryHome>
    </div>
  );
}

export default Home;
