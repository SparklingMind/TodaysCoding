import React, { useState } from "react";
import { InputContainer, Input, SaveButton } from "./Styles/TodoInputStyles";
import { apiInstance } from "../../utils/api";

function TodoInput({ _id, sendDataToParent }) {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(); //카테고리 아이템으로 넘길 값
  const [addTodoList, setAddTodoList] = useState();
  const [fetchedTodo, setFetchedTodo] = useState(); //투두 추가 요청을 통해 받아온 데이터 저장할 상태
  const [error, setError] = useState(null);

  //새로운 등록 input 닫기
  const handleButtonClick = () => {
    // 하위 컴포넌트에서 상위 컴포넌트로 데이터 전달
    setIsCategoryModalOpen(!isCategoryModalOpen);
    sendDataToParent(isCategoryModalOpen);

    //post 요청 보내는 함수
    const addTodoListToServer = async () => {
      // todo 추가
      const todoAdd = {
        date: "20230806",
        completed: false,
        text: addTodoList,
        originalIndex: 0,
      };
      try {
        const response = await apiInstance.post(`/api/todos/${_id}`, todoAdd);
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
    addTodoListToServer();
  };

  return (
    <InputContainer>
      <Input
        onChange={(e) => setAddTodoList(e.target.value)}
        type="text"
        placeholder="새로운 할 일을 입력하세요"
      />
      <SaveButton onClick={handleButtonClick}>저장</SaveButton>
    </InputContainer>
  );
}

export default TodoInput;
