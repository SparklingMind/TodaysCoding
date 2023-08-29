import React, { useState } from "react";
import { ModalOverlayStyles, ModalContentStyles } from "./CategoryModalStyles";

function CategoryModal({ categories, setCategories, onClose }) {
  // 카테고리 추가를 위한 상태
  const [newCategory, setNewCategory] = useState(""); // 새 카테고리 이름 입력을 위한 상태
  const [editingCategory, setEditingCategory] = useState(null); // 현재 편집 중인 카테고리를 관리하는 상태
  const [newCategoryName, setNewCategoryName] = useState(""); // 편집 중인 카테고리의 새로운 이름을 관리하는 상태

  function handleAddCategory() {
    if (newCategory) {
      setCategories([...categories, { name: newCategory, todos: [] }]);
      setNewCategory("");
    }
  }

  // 카테고리를 편집 모드로 변경하기 위한 함수
  function handleEdit(category) {
    setEditingCategory(category);
    setNewCategoryName(category.name);
  }

  // 편집된 카테고리를 저장하기 위한 함수
  function handleSaveEditedCategory() {
    const updatedCategories = categories.map((cat) =>
      cat === editingCategory ? { ...cat, name: newCategoryName } : cat
    );
    setCategories(updatedCategories);
    setEditingCategory(null); // 편집 모드 종료
  }

  // 카테고리를 삭제하기 위한 함수
  function handleDelete(category) {
    const filteredCategories = categories.filter((cat) => cat !== category); // 삭제하려는 카테고리를 제외한 리스트 생성
    setCategories(filteredCategories);
  }

  // 카테고리의 대표색을 변경하기 위한 함수
  function handleColorChange(e, category) {
    const updatedCategories = categories.map((cat) =>
      cat === category ? { ...cat, color: e.target.value } : cat
    );
    setCategories(updatedCategories);
  }

  return (
    <ModalOverlayStyles>
      <ModalContentStyles>
        {/* 각 카테고리에 대하여 */}
        {/* 카테고리 추가 부분 */}
        <div>
          <input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="새 카테고리"
          />
          <button onClick={handleAddCategory}>카테고리 추가</button>
        </div>
        {categories.map((category) => (
          <div key={category.name}>
            {editingCategory === category ? ( // 편집 중인 카테고리일 경우
              <>
                {/* 새로운 카테고리 이름을 입력하는 필드 */}
                <input
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                />
                {/* 변경된 이름을 저장하는 버튼 */}
                <button onClick={handleSaveEditedCategory}>저장</button>
              </>
            ) : (
              <>
                {/* 카테고리 이름 표시 */}
                <span>{category.name}</span>
                <div className="button-group">
                  {/* 해당 카테고리를 편집 모드로 변경하는 버튼 */}
                  <button onClick={() => handleEdit(category)}>편집</button>
                  {/* 해당 카테고리를 삭제하는 버튼 */}
                  <button onClick={() => handleDelete(category)}>삭제</button>
                  {/* 카테고리 대표색을 선택하는 컬러 피커
                      <input 
                        type="color" 
                        value={category.color || '#FFFFFF'}
                        onChange={(e) => handleColorChange(e, category)}
                      /> */}
                </div>
              </>
            )}
          </div>
        ))}
        {/* 모달을 닫는 버튼 */}
        <button onClick={onClose}>닫기</button>
      </ModalContentStyles>
    </ModalOverlayStyles>
  );
}

export default CategoryModal;
