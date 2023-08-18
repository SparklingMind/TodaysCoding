import React from "react";
import CalendarFunc from "../components/CalendarFunc";
import Header from "../components/Header.js";
import DiaryWrite from "../components/DiaryWrite";

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <CalendarFunc></CalendarFunc>
      <DiaryWrite></DiaryWrite>
    </div>
  );
}

export default Home;
