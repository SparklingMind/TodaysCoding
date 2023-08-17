import React from "react";
import styled from "styled-components";
import "./DiaryView.css";

// 마크다운 에디터
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";

function DiaryView() {
  const editorHtml = `<h1><strong>Hook</strong></h1><p><br></p>`;

  return (
    <section>
      <h2>제목</h2>
      <Viewer height="500px" initialValue={editorHtml}></Viewer>
      <div className="diary-view-btns">
        <button type="button">뒤로가기</button>
        <button type="submit">수정</button>
        <button type="submit">삭제</button>
      </div>
    </section>
  );
}

export default DiaryView;
