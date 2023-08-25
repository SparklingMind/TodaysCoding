import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DiaryWrite from "./DiaryWrite";
import DiaryList from "./DiaryList";
import "./DiaryHome.css";

//마크다운 에디터
import MDEditor from "@uiw/react-md-editor";

function DiaryHome({ date }) {
  //목록
  const [diaryList, setDiaryList] = useState([]);

  //임시 토큰
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2OWE2Y2VmYTZmNjdiZjc0MTZhYzAiLCJpYXQiOjE2OTI4MzQ0NTQsImV4cCI6MTcwMDYxMDQ1NH0.IXDlGN3E_OmlKteegULvlDtMsyb_wF59_vJgH6LJuww";

  const viewDiaryList = async () => {
    const res = await axios.get(
      `http://34.64.151.119/api/posts/?date=${date}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setDiaryList(res.data);
  };

  //목록 조회 함수 호출
  useEffect(() => {
    viewDiaryList();
  }, [date]);

  return (
    <section className="wrapper">
      <Link to="/DiaryWrite">
        <button className="diary-write-btn" type="button">
          글쓰기
        </button>
      </Link>
      <ul className="diary-list">
        <DiaryList listItemData={diaryList}></DiaryList>
      </ul>
    </section>
  );
}

export default DiaryHome;
