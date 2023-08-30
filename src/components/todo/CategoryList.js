import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ data }) {
  return (
    <div>
      {data.map((category, index) => (
        <CategoryItem
          key={category.categoryId}
          name={category.categoryName}
          todos={category.todos}
        />
      ))}
    </div>
  );
}

export default CategoryList;
