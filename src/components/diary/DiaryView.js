import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiInstance } from "../../utils/api";
import "./DiaryView.css";

//마크다운 에디터
import MDEditor from "@uiw/react-md-editor";

function DiaryView() {
  //게시글 아이디
  const postId = useLocation().state.postId;

  const [post, setPost] = useState({
    diaryTitle: "",
    diaryContent: "",
  });

  const viewDiary = async () => {
    try {
      const res = await apiInstance.get(`/api/posts/${postId}`);
      setPost({ diaryTitle: res.data.title, diaryContent: res.data.content });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    viewDiary();
  }, []);

  return (
    <section className="diary-view-wrap">
      <div className="diary-view-box">
        <h2 className="diary-view-title">{post.diaryTitle}</h2>
        <MDEditor.Markdown
          className="diary-viewer"
          source={post.diaryContent}
        />
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
