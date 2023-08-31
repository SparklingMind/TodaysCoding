import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { apiInstance } from "../../utils/api";
import {
  CategoryItemContainer,
  CategoryHeader,
  CategoryTitle,
  Button,
} from "./Styles/CategoryItemStyles";
function CategoryItem({ name, todos, categroyId, clickedDate }) {
  console.log("categoryItems", todos);
  const [clickedCheck, setClickedCheck] = useState(false); //+버튼 클릭할때 값 상태
  const [todos_id, setTodos_id] = useState(); //todos의 id 값만 내보낼 값
  const [categoryDelete, setCategoryDelete] = useState(false); //카테고리 삭제 후 저장되는 데이터 상태

  //+버튼 클릭하면 TodoInput 창 띄우고, todos에 있는 _id 값 props로 내보내기
  const newTodo = () => {
    setClickedCheck(!clickedCheck);
    for (let i = 0; i < todos.length; i++) {
      setTodos_id(todos[i]._id);
    }
  };

  //-버튼 클릭하면 경고창 띄우고 카테고리 뭉텅이 삭제
  const deleteCategory = () => {
    if (
      window.confirm(
        "카테고리 목록을 삭제하시겠습니까?\n포함되어 있던 할일들은 모두 사라집니다."
      )
    ) {
      alert("삭제되었습니다.");
      // del요청 카테고리 삭제
      apiInstance
        .delete(`/api/users/categories/${categroyId}`, {})
        .then((response) => {
          console.log(response);
          setCategoryDelete(true); // 카테고리 삭제 상태를 업데이트
        })
        .catch((error) => {
          console.error("데이터를 가져오는 중에 오류가 발생했습니다.:", error);
        });
    } else {
      alert("취소합니다.");
    }
  };

  //사용자가 투두 새 등록을 하고 저장을 누르면 !clickedCheck
  // 하위 컴포넌트로 전달할 함수
  const handleDataFromChild = (data) => {
    // 받은 데이터를 상태에 업데이트
    setClickedCheck(data);
  };

  return (
    <CategoryItemContainer>
      <CategoryHeader>
        <CategoryTitle>{name}</CategoryTitle>
        <Button onClick={newTodo}>할일추가➕</Button>
        <Button onClick={deleteCategory}>목록삭제➖</Button>
      </CategoryHeader>
      {clickedCheck === true ? (
        <TodoInput
          sendDataToParent={handleDataFromChild}
          categroyId={categroyId}
          clickedDate={clickedDate}
        />
      ) : null}
      <ul style={{ paddingLeft: "10px" }}>
        {todos.map((todo) => (
          <TodoItem clickedDate={clickedDate} _id={todo._id} text={todo.text} />
        ))}
      </ul>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
