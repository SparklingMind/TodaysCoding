import React from "react";
import styled from "styled-components";

function Diary() {
  return (
    <Wrapper>
      <button type="button">글쓰기</button>
      <DiaryList>
        <DiaryListItem>
          <h3>제목</h3>
          <p>글 내용 미리보기</p>
        </DiaryListItem>
        <DiaryListItem>
          <h3>제목</h3>
          <p>
            We had a good thing going lately Might not have always been a fairy
            tale But you know and I know That they ain't real I'll take the
            truth over the story
          </p>
        </DiaryListItem>
      </DiaryList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 30%;
  height: 100vh;
  padding: 16px;
  box-sizing: border-box;
  background: #f1f1f1;
`;

const DiaryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DiaryListItem = styled.li`
  border: 1px solid #333;
  border-radius: 10px;
  height: 150px;
  padding: 0px 20px;
  margin-bottom: 20px;
`;

export default Diary;
