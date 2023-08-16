import React from "react";
import styled from "styled-components";
import "./DiaryWrite.css";

// 마크다운 에디터
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

function DiaryWrite() {
  return (
    <section>
      <input></input>
      <Editor height="500px" initialEditType="wysiwyg"></Editor>
      <div className="diary-write-btns">
        <button type="button">취소</button>
        <button type="submit">등록</button>
      </div>
    </section>
  );
}

export default DiaryWrite;
