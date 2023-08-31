import React, { useEffect } from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ data }) {
  console.log("data", data);

  return (
    <div>
      {data.map((category, index) => (
        <CategoryItem
          key={category.categoryId}
          categroyId={category.categoryId}
          name={category.categoryName}
          todos={category.todos}
        />
      ))}
    </div>
  );
}

export default CategoryList;
