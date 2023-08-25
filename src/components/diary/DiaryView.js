import React, { useState } from "react";
import axios from "axios";
import "./DiaryView.css";

//마크다운 에디터
import MDEditor from "@uiw/react-md-editor";

function DiaryView() {
  const postId = `64e70623f96fe9e693428c65`;
  const [diaryTitle, setDiaryTitle] = useState("");
  const [diaryContent, setDiaryContent] = useState("");

  const viewDiary = async () => {
    const res = await axios.get(`http://34.64.151.119/api/posts/${postId}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2OWE2Y2VmYTZmNjdiZjc0MTZhYzAiLCJpYXQiOjE2OTI4MzQ0NTQsImV4cCI6MTcwMDYxMDQ1NH0.IXDlGN3E_OmlKteegULvlDtMsyb_wF59_vJgH6LJuww`,
      },
    });
    setDiaryTitle(res.data.title);
    setDiaryContent(res.data.content);
    console.log(diaryTitle);
  };

  viewDiary();

  return (
    <section className="diary-view-wrap">
      <div className="diary-view-box">
        <h2 className="diary-view-title">{diaryTitle}</h2>
        <MDEditor.Markdown className="diary-viewer" source={diaryContent} />
        <div className="diary-view-btns">
          <button type="button">목록</button>
          <button type="submit">수정</button>
          <button type="submit">삭제</button>
        </div>
      </div>
    </section>
  );
}

export default DiaryView;
