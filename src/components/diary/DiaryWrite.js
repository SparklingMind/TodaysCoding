import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DiaryWrite.css";

//마크다운 에디터
import MDEditor from "@uiw/react-md-editor";
// import { FileDrop } from 'react-file-drop'

function DiaryWrite() {
  //글 제목
  const titleRef = useRef();

  //글 내용
  const [diaryContent, setdiaryContent] = useState("");

  //리액트 라우터 돔
  const navigate = useNavigate();

  // [취소] 버튼 클릭 시
  const handleCancelBtn = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  // [등록] 버튼 클릭 시
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    //달력 연동한 날짜 받아야 함

    //글 제목을 string으로 저장
    const diaryTitle = titleRef.current?.value;
    console.log(diaryTitle);

    //글 내용을 string으로 저장
    console.log(diaryContent);

    //임시 토큰
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2OWE2Y2VmYTZmNjdiZjc0MTZhYzAiLCJpYXQiOjE2OTI4MzQ0NTQsImV4cCI6MTcwMDYxMDQ1NH0.IXDlGN3E_OmlKteegULvlDtMsyb_wF59_vJgH6LJuww";

    async function writeDiary() {
      try {
        // POST 요청은 body에 실어 보냄
        await axios.post(
          "http://34.64.151.119/api/posts",
          {
            date: "20230821",
            title: diaryTitle,
            content: diaryContent,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("성공");
      } catch (e) {
        console.error(e);
      }
    }

    writeDiary();

    //작성 완료한 글로 이동
    navigate("/DiaryView");
  };

  return (
    <section className="diary-write-wrap">
      <div className="diary-write-box">
        <input className="diary-write-title" ref={titleRef}></input>
        <MDEditor
          height={400}
          value={diaryContent}
          onChange={setdiaryContent}
        />
        <div className="diary-write-btns">
          <button type="button" onClick={handleCancelBtn}>
            취소
          </button>
          <button type="submit" onClick={handleSubmitBtn}>
            등록
          </button>
        </div>
      </div>
    </section>
  );
}

export default DiaryWrite;
