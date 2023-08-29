import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ categories }) {
  console.log("카테고리:", categories);

  const _categories = []; //서버 측 name
  const _id = []; //서버 측 _id
  for (let i of categories) {
    _categories.push(i.name);
    _id.push(i._id);
  }

  console.log("카테고리리스트", _categories);

  return (
    <div>
      <CategoryItem key={_id} name={_categories} />
    </div>
  );
}

export default CategoryList;
