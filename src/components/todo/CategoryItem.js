import React, { useState } from "react";
import TodoInput from "./TodoInput";
import styled from "styled-components";
import TodoItem from "./TodoItem";
// styled-components를 사용해 각 UI 요소의 스타일 정의
const CategoryItemContainer = styled.div`
  margin-top: 20px;
`;

const CategoryHeader = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: #eee;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const CategoryTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  font-family: "fontMedium";
  font-weight: 600;
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

function CategoryItem({ name, todos }) {
  console.log("이건뭐지", name, todos);

  const newTodo = () => {
    <TodoItem></TodoItem>;
  };
  return (
    <CategoryItemContainer>
      <CategoryHeader>
        <CategoryTitle>{name}</CategoryTitle>
        <Button onClick={newTodo}>➕</Button>
      </CategoryHeader>

      <ul style={{ paddingLeft: "20px" }}>
        {todos.map((todo) => (
          <TodoItem key={todo._id} text={todo.text} />
        ))}
      </ul>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
