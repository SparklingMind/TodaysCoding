import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Nav from "./components/Nav.js";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import MyPage from "./components/MyPage";
import Search from "./routes/Search";
import DiaryWrite from "./components/DiaryWrite";
import DiaryView from "./components/DiaryView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/DiaryWrite" element={<DiaryWrite />}></Route>
          <Route path="/DiaryView" element={<DiaryView />}></Route>
        </Routes>
        <Nav></Nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
