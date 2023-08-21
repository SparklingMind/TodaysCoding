import React, { useState } from "react";
import "./Search.css";
function Search() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="searchWrap">
      <div className="searchCenter">
        <form action="" method="" name="search">
          <input className="inputBoxSize" type={Text}></input>
        </form>
        <div className="searchNavbar">
          <div className="searchTodo">할일</div>
          <div className="searchDiary">일지</div>
        </div>
      </div>

      <div className="searchContent">
        <div>☑️todo</div>
        <div>☑️todo</div>
        <div>☑️todo</div>
        <div>☑️todo</div>
        <div>☑️todo</div>
      </div>
    </div>
  );
}

export default Search;
