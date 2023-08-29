import React, { useState } from "react";
import { ModalOverlayStyles, ModalContentStyles } from "./CategoryModalStyles";
import axios from 'axios';
function CategoryModal({ categories, setCategories, onClose, accessToken, clickedDate}) {
  // 카테고리 추가를 위한 상태
  const [newCategory, setNewCategory] = useState(""); // 새 카테고리 이름 입력을 위한 상태
  const [editingCategory, setEditingCategory] = useState(null); // 현재 편집 중인 카테고리를 관리하는 상태
  const [newCategoryName, setNewCategoryName] = useState(""); // 편집 중인 카테고리의 새로운 이름을 관리하는 상태

  async function handleAddCategory() {
    if (newCategory) {
      try {
        const response = await axios.post(`http://34.64.151.119/api/todos/?date=${clickedDate}`, 
          { name: newCategory },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          }
        );
        if (response.data) {
          setCategories([...categories, response.data]);
          setNewCategory("");
        }
      } catch (error) {
        console.error("Error adding category:", error.response.data);
      }
    }
}


  // 카테고리를 편집 모드로 변경하기 위한 함수
  function handleEdit(category) {
    setEditingCategory(category);
    setNewCategoryName(category.name);
  }

  // 편집된 카테고리를 저장하기 위한 함수
  async function handleSaveEditedCategory() {
    try {
      const response = await axios.patch(`http://34.64.151.119/api/categories/${editingCategory._id}`, 
        { name: newCategoryName },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.data) {
        const updatedCategories = categories.map((cat) =>
          cat._id === editingCategory._id ? response.data : cat
        );
        setCategories(updatedCategories);
        setEditingCategory(null); // 편집 모드 종료
      }
    } catch (error) {
      console.error("Error updating category:", error.response.data);
    }
}


  // 카테고리를 삭제하기 위한 함수
  async function handleDelete(category) {
    try {
      const response = await axios.delete(`http://34.64.151.119/api/categories/${category._id}`, 
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        }
      );
      if (response.status === 200) {
        const filteredCategories = categories.filter((cat) => cat._id !== category._id);
        setCategories(filteredCategories);
      }
    } catch (error) {
      console.error("Error deleting category:", error.response.data);
    }
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
          <div key={category._id}>
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
