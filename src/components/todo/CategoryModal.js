import React, { useState, useEffect } from "react";
import { ModalOverlayStyles, ModalContentStyles } from "./CategoryModalStyles";

function CategoryModal({ sendDataToParent }) {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(); //TodoComponent로 넘길 값
  const [newCategory, setNewCategory] = useState(""); //사용자가 추가하는 새 카테고리 input 값

  //모달창 닫기
  const handleButtonClick = () => {
    // 하위 컴포넌트에서 상위 컴포넌트로 데이터 전달
    console.log(newCategory, "뉴카테고리 확인");
    setIsCategoryModalOpen(!isCategoryModalOpen);
    sendDataToParent(isCategoryModalOpen);
  };

  return (
    <ModalOverlayStyles>
      <ModalContentStyles>
        <div>
          <input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="새 카테고리"
          />
          <button onClick={handleButtonClick}>카테고리 추가</button>
        </div>
        <button onClick={handleButtonClick}>닫기</button>
      </ModalContentStyles>
    </ModalOverlayStyles>
  );
}

export default CategoryModal;
