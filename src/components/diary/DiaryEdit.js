import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { apiInstance } from "../../utils/api";
import "./DiaryWrite.css";

//마크다운 에디터
import MDEditor from "@uiw/react-md-editor";
// import { FileDrop } from 'react-file-drop'

function DiaryWrite() {
  //날짜
  const date = useLocation().state.date;

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

    //글 제목을 string으로 저장
    const diaryTitle = titleRef.current?.value;

    async function writeDiary() {
      try {
        // POST 요청은 body에 실어 보냄
        await apiInstance.post("/api/posts", {
          date: date,
          title: diaryTitle,
          content: diaryContent,
        });
      } catch (e) {
        console.error(e);
      }
    }

    writeDiary();

    //수정 완료한 글로 이동
    // navigate("/DiaryView");
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
