import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MyPage from './pages/MyPage';
import WithdrawPage from './pages/WithdrawPage';
import UserInfoPage from "./pages/UserInfoPage"

function App() {
  return (
    <div className="App">
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/withdrawpage" element={<WithdrawPage />} />
            <Route path="/mypage/userinfo" element={<UserInfoPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
