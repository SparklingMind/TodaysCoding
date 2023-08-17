import React from "react";
import styled from "styled-components";

function Diary() {
  return (
    <Wrapper>
      <DiaryWriteBtn type="button">글쓰기</DiaryWriteBtn>
      <DiaryList>
        <DiaryListItem>
          <DiaryListTitle>제목</DiaryListTitle>
          <p>글 내용 미리보기</p>
        </DiaryListItem>
        <DiaryListItem>
          <DiaryListTitle>제목</DiaryListTitle>
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

const DiaryWriteBtn = styled.button`
  float: right;
`;

const DiaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 50px;
  overflow: hidden;
`;

const DiaryListItem = styled.li`
  border: 1px solid #333;
  border-radius: 15px;
  height: 150px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const DiaryListTitle = styled.h4`
  font-family: "fontMedium";
  margin-bottom: 10px;
`;

export default Diary;
