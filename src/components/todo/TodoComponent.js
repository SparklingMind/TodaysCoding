import React, { useState, useEffect } from "react";
import { apiInstance } from "../../utils/api";
import CategoryList from "./CategoryList";
import CategoryModal from "./CategoryModal";
import {
  TodoContainer,
  ModalOverlay,
  ModalContent,
  CategoryIcon,
} from "./TodoStyles";

function TodoComponent() {
  const [data, setData] = useState([]); // get으로 받아온 데이터(카테고리 조회)
  const [_id, _setId] = useState([]); //서버에서 온 _id값 저장할 상태
  const [_name, _setName] = useState([]); //카테고리 이름을 저장할 상태
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false); // 카테고리 모달의 열림/닫힘 상태를 관리

  // GET 요청을 보내고 데이터를 받아옴
  useEffect(() => {
    //기존에 저장된 이모지 get요청
    apiInstance
      .get("/api/todos/20230809", {})
      .then((response) => {
        console.log(response);
        setData(response.data); // get 데이터를 상태에 저장
        // if (response.data && response.data.length > 0) {
        //   _setId(() => {
        //     const _idArr = [];
        //     for (let i = 0; i < data.length; i++) {
        //       _idArr.push(data[i]._id); //서버에서 온 _id값 배열로 저장
        //     }
        //     return _idArr;
        //   });
        //   _setName(() => {
        //     const nameArr = [];
        //     for (let i = 0; i < data.length; i++) {
        //       nameArr.push(data[i].name); //서버에서 온 _id값 배열로 저장
        //     }
        //     return nameArr;
        //   });
        // }
      })

      .catch((error) => {
        console.error("데이터를 가져오는 중에 오류가 발생했습니다.:", error);
      });
  }, []);

  //모달창
  // 하위 컴포넌트로 전달할 함수
  const handleDataFromChild = (data) => {
    // 받은 데이터를 상태에 업데이트
    setIsCategoryModalOpen(data);
  };

  return (
    <TodoContainer style={{ float: "left" }}>
      <CategoryIcon
        src="/CategorySetting.png"
        onClick={() => setIsCategoryModalOpen(true)}
      />
      {isCategoryModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CategoryModal
              sendDataToParent={handleDataFromChild}
            ></CategoryModal>
          </ModalContent>
        </ModalOverlay>
      )}

      <CategoryList data={data} />
    </TodoContainer>
  );
}

export default TodoComponent;
