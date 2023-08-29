import React from 'react';

function TodoItem({ todo }) {
  // todo prop을 통해 전달받은 할 일 항목의 내용을 화면에 표시한다.
  // 해당 컴포넌트는 리스트의 각 항목을 대표하며, 각 항목의 내용을 div 요소 안에 출력한다.
  return <div>{todo.text}</div>;
}

export default TodoItem;
