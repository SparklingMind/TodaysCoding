import React from "react";
import CalendarFunc from "../components/CalendarFunc";
import Header from "../components/Header.js";
import DiaryHome from "../components/DiaryHome";
import TodoComponent from "../TodoComponent";

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
