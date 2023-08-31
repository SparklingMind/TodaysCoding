import styled from "styled-components";
// styled-components를 사용해 각 UI 요소의 스타일 정의
export const CategoryItemContainer = styled.div`
  margin-top: 20px;
`;

export const CategoryHeader = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  background-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CategoryTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  font-family: "fontMedium";
  font-weight: 600;
`;

export const Button = styled.button`
  background-color: transparent;
  font-faminly: "fontLight";
  margin-left: 5px;
  font-size: 10pt;
  border: none;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #555;
  }
`;
