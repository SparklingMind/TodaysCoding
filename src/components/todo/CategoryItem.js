import React, { useState } from "react";
import TodoInput from "./TodoInput";
import styled from "styled-components";

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

const TodoContent = styled.div`
  display: flex;
  align-items: center;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-family: "fontMedium";
`;

// CategoryItem 컴포넌트 정의
function CategoryItem({ category, categories, setCategories }) {
  // 할 일 입력 부분을 보여줄지 결정하는 변수
  const [isInputVisible, setInputVisible] = useState(false);
  // 수정 중인 할 일의 인덱스와 텍스트를 저장하는 상태 변수
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  // 체크박스를 클릭했을 때 할 일의 완료 상태를 바꾸는 함수
  const handleCheck = (index) => {
    setCategories((prevCategories) => {
      return prevCategories.map((cat) => {
        if (cat.name === category.name) {
          const updatedTodos = cat.todos.map((todo, todoIndex) => {
            if (todoIndex === index) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          });

          updatedTodos.sort((a, b) => {
            if (a.completed !== b.completed) {
              return a.completed ? 1 : -1;
            }
            // 원래 순서대로 정렬 (undefined 값 처리 추가)
            return (a.originalIndex || 0) - (b.originalIndex || 0);
          });

          return { ...cat, todos: updatedTodos };
        } else {
          return cat;
        }
      });
    });
  };

  // "수정" 버튼 클릭시 수정 모드로 진입
  // 할 일의 텍스트와 해당 항목의 인덱스를 상태에 저장
  const handleStartEditing = (index, text) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  // 수정된 내용을 저장하고 수정 모드를 종료하는 함수
  const handleEdit = (index) => {
    setEditingIndex(null);
    setCategories((prevCategories) => {
      return prevCategories.map((cat) => {
        if (cat.name === category.name) {
          const updatedTodos = [...cat.todos];
          updatedTodos[index].text = editingText;
          return { ...cat, todos: updatedTodos };
        } else {
          return cat;
        }
      });
    });
    setEditingText("");
  };

  // "삭제" 버튼을 클릭했을 때 해당 할 일 항목을 삭제하는 함수
  const handleDelete = (index) => {
    setCategories((prevCategories) => {
      return prevCategories.map((cat) => {
        if (cat.name === category.name) {
          const updatedTodos = [...cat.todos];
          updatedTodos.splice(index, 1);
          return { ...cat, todos: updatedTodos };
        } else {
          return cat;
        }
      });
    });
  };

  return (
    <CategoryItemContainer>
      <CategoryHeader>
        <CategoryTitle>{category.name}</CategoryTitle>
        {/* "+" 버튼 클릭으로 isInputVisible의 값을 반전
        새로운 할 일을 입력할 수 있는 부분을 표시하거나 숨김 */}
        <Button onClick={() => setInputVisible(!isInputVisible)}>➕</Button>
      </CategoryHeader>

      {/* isInputVisible 상태가 true일 경우에만 TodoInput 컴포넌트를 표시 */}
      {isInputVisible && (
        <TodoInput
          category={category}
          categories={categories}
          setCategories={setCategories}
          setInputVisible={setInputVisible}
        />
      )}

      {/* map 함수를 사용해 각 할 일 항목을 순회하며 UI 요소 생성 */}
      <ul style={{ paddingLeft: "20px" }}>
        {category.todos.map((todo, index) => (
          <TodoItem key={index} completed={todo.completed}>
            <TodoContent>
              {/* 체크박스 클릭시 handleCheck 함수 실행 */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheck(index)}
                style={{ marginRight: "20px" }}
              />

              {/* 수정 중인 항목이면 입력 필드 표시, 그렇지 않으면 텍스트 표시 */}
              {editingIndex === index ? (
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                todo.text
              )}
            </TodoContent>

            {/* 수정 버튼과 삭제 버튼 표시 */}
            <span>
              {editingIndex === index ? (
                <Button onClick={() => handleEdit(index)}>저장</Button>
              ) : (
                <Button onClick={() => handleStartEditing(index, todo.text)}>
                  수정
                </Button>
              )}

              <Button onClick={() => handleDelete(index)}>삭제</Button>
            </span>
          </TodoItem>
        ))}
      </ul>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
