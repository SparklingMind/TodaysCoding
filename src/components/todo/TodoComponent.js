import React, { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
import CategoryModal from "./CategoryModal";
import {
  TodoContainer,
  ModalOverlay,
  ModalContent,
  CategoryIcon,
} from "./TodoStyles";
import axios from "axios";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2OWE2Y2VmYTZmNjdiZjc0MTZhYzAiLCJpYXQiOjE2OTI4MzQ0NTQsImV4cCI6MTcwMDYxMDQ1NH0.IXDlGN3E_OmlKteegULvlDtMsyb_wF59_vJgH6LJuww";

function TodoComponent({ clickedDate }) {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  console.log("tododata", categories);
  useEffect(() => {
    const fetchData = async () => {
      if (clickedDate) {
        try {
          const response = await axios.get(
            `http://34.64.151.119/api/days/records?date=${clickedDate}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log("response", response);
          setCategories(response.data.todos);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      }
    };

    fetchData();
  }, [clickedDate]);

  //   {
  //     // 카테고리와 할 일(todo) 데이터의 초기 상태 설정
  //     // 각 카테고리는 이름(name)과 해당 카테고리 내의 할 일 목록(todos)을 포함한다.
  //     // 할 일은 text, completed 상태와 원래의 위치를 나타내는 originalIndex를 포함한다.
  //     name: "자바스크립트",
  //     todos: [
  //       { text: "프로미스 이해하기", completed: false, originalIndex: 0 },
  //       { text: "비동기 처리 방법 배우기", completed: false, originalIndex: 1 },
  //       { text: "ES6+ 문법 익히기", completed: false, originalIndex: 2 },
  //     ],
  //   },
  //   {
  //     name: "리액트",
  //     todos: [
  //       { text: "Hooks 사용법 학습하기", completed: false, originalIndex: 0 },
  //       { text: "리액트 라우터 도입하기", completed: false, originalIndex: 1 },
  //       {
  //         text: "컴포넌트 최적화 방법 알아보기",
  //         completed: false,
  //         originalIndex: 2,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <TodoContainer style={{ float: "left" }}>
      <CategoryIcon
        src="/CategorySetting.png"
        onClick={() => setIsCategoryModalOpen(true)}
      />{" "}
      {/*카테고리 설정 아이콘을 클릭하면 모달이 열린다.*/}
      {isCategoryModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CategoryModal
              categories={categories}
              setCategories={setCategories}
              onClose={() => setIsCategoryModalOpen(false)}
              accessToken={accessToken}
              clickedDate={clickedDate}
            />
          </ModalContent>
        </ModalOverlay>
      )}
      {/* CategoryList 컴포넌트에 카테고리 데이터와 해당 데이터를 수정할 수 있는 함수를 props로 전달 */}
      <CategoryList categories={categories} setCategories={setCategories} />
    </TodoContainer>
  );
}

export default TodoComponent;
