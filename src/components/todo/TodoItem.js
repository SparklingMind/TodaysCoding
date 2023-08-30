import React, { useState } from "react";
import { TodoContent, TodoFunc, Button } from "./Styles/TodoItemStyles";
import { apiInstance } from "../../utils/api";

function TodoItem({ _id, text }) {
  //사용자가 등록한 todo 목록
  const [todoList, setTodoList] = useState(text);
  const [fetchedTodo, setFetchedTodo] = useState(); //투두 수정 요청을 통해 받아온 데이터 저장할 상태
  const [error, setError] = useState(null);

  //patch요청보내는 함수
  const sendTodoListToServer = async () => {
    // todo수정
    const todoChange = {
      text: todoList,
      completed: true,
    };
    try {
      const response = await apiInstance.patch(`/api/todos/${_id}`, todoChange);

      if (response.status >= 200 && response.status < 300) {
        // 서버 응답이 성공인 경우
        setFetchedTodo(response.data); // 받아온 데이터를 상태에 업데이트
      } else {
        // 서버 응답이 실패인 경우
        setError("Failed to fetch data");
      }
      console.log(fetchedTodo); //응답 데이터를 설정
    } catch (error) {
      console.error("에러발생:", error);
    }
  };

  //del요청 보내는 함수
  const deleteTodoListToServer = async () => {
    // todo삭제
    const todoChange = {
      completed: true,
    };
    try {
      const response = await apiInstance.patch(`/api/todos/${_id}`, todoChange);

      if (response.status >= 200 && response.status < 300) {
        // 서버 응답이 성공인 경우
        setFetchedTodo(response.data); // 받아온 데이터를 상태에 업데이트
      } else {
        // 서버 응답이 실패인 경우
        setError("Failed to fetch data");
      }
      console.log(fetchedTodo); //응답 데이터를 설정
    } catch (error) {
      console.error("에러발생:", error);
    }
  };

  return (
    <div>
      <TodoContent>
        <input type="checkbox" style={{ marginRight: "20px" }} />
        <input onChange={(e) => setTodoList(e.target.value)} value={todoList} />
      </TodoContent>
      <TodoFunc>
        <span>
          <Button onClick={sendTodoListToServer}>수정</Button>
          <Button onClick={deleteTodoListToServer}>삭제</Button>
        </span>
      </TodoFunc>
    </div>
  );
}

export default TodoItem;
