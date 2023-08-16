import React from "react";
import styled from "styled-components";
import "./DiaryView.css";

// 마크다운 에디터
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";

function DiaryView() {
  return (
    <section>
      <h2>제목</h2>
      <Viewer
        height="500px"
        initialValue={"에디터 뷰어로 글 내용 불러오기"}
      ></Viewer>
      <div className="diary-view-btns">
        <button type="button">뒤로가기</button>
        <button type="submit">수정</button>
      </div>
    </section>
  );
}

export default DiaryView;
