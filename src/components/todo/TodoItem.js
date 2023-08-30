import React from "react";
import styled from "styled-components";

const TodoContent = styled.div`
  display: flex;
  align-items: center;
`;

const TodoFunc = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-family: "fontMedium";
`;

const Button = styled.button`
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

function TodoItem({ text }) {
  return (
    <div>
      <TodoContent>
        <input type="checkbox" style={{ marginRight: "20px" }} />
        <input type="text" value={text} />
      </TodoContent>
      <TodoFunc>
        <span>
          <Button>수정</Button>
          <Button>삭제</Button>
        </span>
      </TodoFunc>
    </div>
  );
}

export default TodoItem;
