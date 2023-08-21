import React from "react";
import "./DiaryView.css";

//마크다운 에디터
import MDEditor from "@uiw/react-md-editor";

function DiaryView() {
  const diaryTitle = `가져온 제목`;
  const diaryContent = `**content**`;

  return (
    <section className="diary-view">
      <h2 className="diary-view-title">{diaryTitle}</h2>
      <MDEditor.Markdown className="diary-viewer" source={diaryContent} />
      <div className="diary-view-btns">
        <button type="button">목록</button>
        <button type="submit">수정</button>
        <button type="submit">삭제</button>
      </div>
    </section>
  );
}

export default DiaryView;
