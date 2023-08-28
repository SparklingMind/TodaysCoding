import React from "react";
import CategoryItem from "./CategoryItem";

// CategoryList 컴포넌트 정의
// 카테고리 목록을 표시하고 각 카테고리 항목에 대한 정보를 CategoryItem 컴포넌트에 전달하는 역할을 한다.
function CategoryList({ categories, setCategories }) {
  return (
    <div>
      {/* 
      categories prop을 통해 전달받은 카테고리 배열을 map 함수를 사용해 순회한다.
      각 카테고리 항목마다 CategoryItem 컴포넌트를 생성하고, 필요한 props를 전달한다.
      */}
      {categories.map((category) => (
        // 각 카테고리의 id를 React에서 요구하는 고유 키로 사용한다.
        // 이 키는 React가 각 항목을 식별하고, 재렌더링을 효율적으로 수행하기 위한 목적으로 사용된다.
        <CategoryItem
          category={category}
          categories={categories}
          setCategories={setCategories}
          accessToken={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2OWE2Y2VmYTZmNjdiZjc0MTZhYzAiLCJpYXQiOjE2OTI4MzQ0NTQsImV4cCI6MTcwMDYxMDQ1NH0.IXDlGN3E_OmlKteegULvlDtMsyb_wF59_vJgH6LJuww"}
        />
      ))}
    </div>
  );
}

export default CategoryList;
