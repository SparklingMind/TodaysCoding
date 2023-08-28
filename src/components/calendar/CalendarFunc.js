import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import EmojiPicker from "emoji-picker-react";
import "./CalendarFunc.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiMehBlank } from "react-icons/bi";
import { apiInstance } from "../../utils/api";

function CalendarFunc({ sendDataToParent }) {
  const [value, onChange] = useState(new Date());
  const [clickedDate, setClickedDate] = useState(); // 선택한 날짜를 저장할 상태
  const [selectedEmoji, setSelectedEmoji] = useState(); //선택한 이모지를 저장할 상태
  const [showPicker, setShowPicker] = useState(false);
  const [dateList, setDateList] = useState([]);
  const [emojiList, setEmojiList] = useState([]);
  const endOfMonth = moment(clickedDate).endOf("month").format("YYYYMMDD"); //클릭한 날짜 달의 마지막날짜
  const startOfMonth = moment(clickedDate).startOf("month").format("YYYYMMDD"); //매월 1일
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(); // patch로 받아온 데이터(선택한 날짜에 저장된 이모지)
  const [data, setData] = useState([]); // get으로 받아온 데이터(달력 전체의 날짜와 이모지 배열)

  //이모지 클릭하면 나타나게 하는 함수
  const onEmojiClick = (emojiObject, e) => {
    setSelectedEmoji(emojiObject.emoji);
    setShowPicker(false);
  };
  //선택된 이모지, 선택이 아무것도 안되었으면 <BiMehBlank />
  const selectedEmojiSave = selectedEmoji ? selectedEmoji : <BiMehBlank />;
  //클라이언트가 클릭한 날짜 clickedDate에 저장
  const saveDate = (date) => {
    const onClickDayClickedDate = moment(date).format("YYYYMMDD");
    setClickedDate(onClickDayClickedDate);
    // 클릭한 날짜를 상위 컴포넌트로 전달
    sendDataToParent(onClickDayClickedDate);
  };

  // GET 요청을 보내고 데이터를 받아옴
  useEffect(() => {
    //기존에 저장된 이모지 get요청
    apiInstance
      .get("/api/days/imogies", {
        params: {
          startDate: startOfMonth,
          endDate: endOfMonth,
        },
      })
      .then((response) => {
        setData(response.data); // get 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중에 오류가 발생했습니다.:", error);
      });
  }, []); // 컴포넌트가 마운트될 때만 실행

  // 클라이언트에서 선택한 날짜와 이모지를 서버로 전송
  const sendDataToServer = async (clickedDate, selectedEmoji) => {
    setLoading(true);
    setError(null);

    if (clickedDate && selectedEmoji) {
      // setDateList((prevDateList) => [...prevDateList, clickedDate]); //중복값 저장 가능
      // setEmojiList((prevEmojiList) => [...prevEmojiList, selectedEmoji]);

      // patch 요청 전송
      const test = {
        date: clickedDate,
        emoji: selectedEmoji,
      };
      try {
        const response = await apiInstance.patch("/api/days", test, {});

        if (response.status >= 200 && response.status < 300) {
          // 서버 응답이 성공인 경우
          setFetchedData(response.data); // 받아온 데이터를 상태에 업데이트
        } else {
          // 서버 응답이 실패인 경우
          setError("Failed to fetch data");
        }
        console.log(fetchedData); //응답 데이터를 설정
      } catch (error) {
        // 예외 처리
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
      console.error(error);
    }
  };
  // sendDataToServer()를 원하는 시점에 호출하여 데이터를 받아옵니다.
  useEffect(() => {
    sendDataToServer(clickedDate, selectedEmoji);
  }, [selectedEmoji]); // data가 변경될 때마다 호출

  // 각 날짜별로 이모지 추가
  // const addEmoji = ({ date }) => {
  //   const EmojiDateAdded = []; //추가된 이모지 날짜
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].date === moment(date).format("YYYYMMDD")) {
  //       EmojiDateAdded.push(
  //         <div key={data[i].date} className="savedEmoji">
  //           {data[i].emoji}
  //         </div>
  //       );
  //     }
  //   }
  //   return <div>{EmojiDateAdded}</div>;
  // };
  console.log(data);

  return (
    <div className="wrap" style={{ float: "left" }}>
      <div className="EmojiSelection">
        <span style={{ fontSize: 50 }}>{selectedEmojiSave}</span>
        <button onClick={() => setShowPicker(!showPicker)}> + </button>
        {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
      </div>
      <Calendar
        onClickDay={saveDate}
        onChange={onChange}
        value={value}
        locale="en"
        formatDay={(locale, date) => moment(date).format("D")}
        // tileContent={fetchedData.emoji}
      />
      {/* 임시 데이터 전송 버튼 */}
      {/* <button onClick={() => sendDataToServer(clickedDate, selectedEmoji)}>
        Send Data to Server
      </button> */}
    </div>
  );
}

export default CalendarFunc;
