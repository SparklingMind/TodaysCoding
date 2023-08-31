import React, { useEffect, useState } from "react";
import { TodoContent, TodoFunc, Button } from "./Styles/TodoItemStyles";
import { apiInstance } from "../../utils/api";

function TodoItem({ _id, text }) {
  console.log("TodoItem", _id);
  //사용자가 등록한 todo 목록
  const [todoList, setTodoList] = useState(text);
  const [fetchedTodo, setFetchedTodo] = useState(); //투두 수정 요청을 통해 받아온 데이터 저장할 상태
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false); // 투두 체크 여부 판단
  const [checkboxId, setCheckboxId] = useState(); //{_id:~,checked:ture}

  //patch요청보내는 함수
  const sendTodoListToServer = async () => {
    // todo수정
    const todoChange = {
      text: todoList,
      completed: checked,
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
  const deleteTodoListToServer = () => {
    if (window.confirm("할 일 목록을 삭제하시겠습니까?")) {
      alert("삭제되었습니다.");
      // del요청 할 일 삭제
      apiInstance
        .delete(`/api/todos/${_id}`, {})
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("데이터를 가져오는 중에 오류가 발생했습니다.:", error);
        });
    } else {
      alert("취소합니다.");
    }
  };

  //체크박스 체크하면 체크박스 해당 투두 아이디와 체크여부 변경하는 함수
  const checkHandled = () => {
    setChecked((prevChecked) => !prevChecked);
    setCheckboxId({ _id: _id, checked: checked });
  };

  //체크박스 여부가 변경되면 todo 수정 요청 보내기
  useEffect(() => {
    sendTodoListToServer();
  }, [checked]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TodoContent>
        <input
          type="checkbox"
          checked={checked}
          _id={_id}
          onChange={checkHandled}
          style={{ marginRight: "20px" }}
        />
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
