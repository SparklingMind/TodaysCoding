import React, { useState } from "react";
import { ModalOverlayStyles, ModalContentStyles } from "./CategoryModalStyles";

function CategoryModal() {
  return (
    <ModalOverlayStyles>
      <ModalContentStyles>
        <div>
          <input placeholder="새 카테고리" />
          <button>카테고리 추가</button>
        </div>
        <button>닫기</button>
      </ModalContentStyles>
    </ModalOverlayStyles>
  );
}

export default CategoryModal;
