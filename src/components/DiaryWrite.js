import React, { useRef } from "react";
import "./DiaryWrite.css";

// 마크다운 에디터
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

function DiaryWrite() {
  //글 제목
  const titleRef = useRef();

  //글 내용
  const contentRef = useRef();

  // [등록] 버튼 클릭 시
  const handleSubmitBtn = (e) => {
    e.preventDefault();

    //글 제목을 string으로 저장
    console.log(titleRef.current?.value);

    //글 내용을 HTML 태그 형태로 저장
    console.log(contentRef.current?.getInstance().getHTML());
  };

  return (
    <section style={{ float: "right" }} className="diary-write-wrap">
      <input className="diary-title" ref={titleRef}></input>
      <Editor
        height="500px"
        initialEditType="wysiwyg"
        ref={contentRef}
      ></Editor>
      <div className="diary-write-btns">
        <button type="button">취소</button>
        <button type="submit" onClick={handleSubmitBtn}>
          등록
        </button>
      </div>
    </section>
  );
}

export default DiaryWrite;
