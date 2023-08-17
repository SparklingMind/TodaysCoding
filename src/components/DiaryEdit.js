import React, { useEffect, useRef } from "react";
import "./DiaryWrite.css";

// 마크다운 에디터
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

function DiaryEdit() {
  //글 제목
  const titleRef = useRef();

  //글 내용
  const contentRef = useRef();

  // 기존 작성 내용 표시
  useEffect(() => {
    // 1. DB에서 가져온 HTML이라고 가정
    const contentHtml = "<h1>글 제목</h1> <p>글 내용</p>";

    // 2. Editor DOM 내용에 HTML 주입
    contentRef.current?.getInstance().setHTML(contentHtml);
  }, []);

  // [등록] 버튼 클릭 시
  const handleSubmitBtn = (e) => {
    e.preventDefault();

    //글 제목을 string으로 저장
    console.log(titleRef.current?.value);

    //글 내용을 HTML 태그 형태로 저장
    console.log(contentRef.current?.getInstance().getHTML());
  };

  return (
    <section className="diary-write-wrap">
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

export default DiaryEdit;
