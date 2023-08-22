import React, { useState } from 'react';  
import styled from 'styled-components';  

// 입력 필드와 저장 버튼을 포함하는 컨테이너의 스타일 설정
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

// 할 일을 입력하는 텍스트 필드의 스타일 설정
const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// 저장 버튼의 스타일 설정
const SaveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #888;
  margin-left: 10px;
  &:hover {
    color: #555;
  }
`;

function TodoInput({ category, categories, setCategories, setInputVisible }) {
  // 현재 입력된 할 일의 상태를 관리하는 state. 초기값은 빈 문자열.
  const [newTodo, setNewTodo] = useState('');

  // '저장' 버튼을 클릭할 때 실행되는 함수
  const handleSaveClick = () => {
    // setCategories를 사용하여 현재 categories의 상태를 업데이트한다.
    setCategories(prevCategories => {
      // map 함수를 사용하여 각 카테고리를 순회하며,
      // 현재 선택된 카테고리와 일치하는 경우 해당 카테고리의 할 일 목록을 업데이트한다.
      return prevCategories.map(cat => {
        if (cat.name === category.name) {
          const updatedTodos = [
            ...cat.todos, 
            { 
              text: newTodo, 
              completed: false,
              originalIndex: cat.todos.length  // 현재 todos의 길이를 이용하여 unique한 originalIndex 값을 생성
            }
          ];
          // 일치하는 카테고리의 경우, 업데이트된 할 일 목록으로 카테고리 데이터를 반환
          return { ...cat, todos: updatedTodos };
        } else {
          // 일치하지 않는 카테고리는 그대로 반환
          return cat;
        }
      });
    });
    // 할 일을 추가한 후, 입력 필드를 초기화하고 입력 컴포넌트를 숨긴다.
    setNewTodo('');
    setInputVisible(false);
  };

  // 사용자의 입력을 받아오고, '저장' 버튼을 통해 할 일을 저장하는 UI를 반환
  return (
    <InputContainer>
      <Input
        type="text"
        value={newTodo} // 입력 필드의 값은 newTodo state에 연결
        onChange={e => setNewTodo(e.target.value)} // 사용자 입력시 newTodo 상태 업데이트
        placeholder="새로운 할 일을 입력하세요"
      />
      <SaveButton onClick={handleSaveClick}>저장</SaveButton>
    </InputContainer>
  );
}


export default TodoInput;