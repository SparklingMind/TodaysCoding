import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import EmojiPicker from "emoji-picker-react";
import "./CalendarFunc.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiMehBlank } from "react-icons/bi";
import axios from "axios";

function CalendarFunc({ sendDataToParent }) {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2OWE2Y2VmYTZmNjdiZjc0MTZhYzAiLCJpYXQiOjE2OTI4MzQ0NTQsImV4cCI6MTcwMDYxMDQ1NH0.IXDlGN3E_OmlKteegULvlDtMsyb_wF59_vJgH6LJuww";
  const [value, onChange] = useState(new Date());
  const [clickedDate, setClickedDate] = useState(); // 선택한 날짜를 저장할 상태
  const [selectedEmoji, setSelectedEmoji] = useState(); //선택한 이모지를 저장할 상태
  const [showPicker, setShowPicker] = useState(false);
  const [dateList, setDateList] = useState([]);
  const [emojiList, setEmojiList] = useState([]);
  const activeDate = moment(value).format("YYYYMMDD"); // 클릭한 날짜 (년-월-일))
  const endOfMonth = moment(activeDate).endOf("month").format("YYYYMMDD"); //클릭한 날짜 달의 마지막날짜
  const startOfMonth = moment(activeDate).startOf("month").format("YYYYMMDD"); //매월 1일

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

  //기존에 저장된 이모지 get요청
  axios.get("http://34.64.151.119/api/days/imogies", {
    params: {
      startDate: startOfMonth,
      endDate: endOfMonth,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // 클라이언트에서 선택한 날짜와 이모지를 서버로 전송
  const sendDataToServer = async (clickedDate, selectedEmoji) => {
    if (clickedDate && selectedEmoji) {
      setDateList((prevDateList) => [...prevDateList, clickedDate]); //중복값 저장 가능
      setEmojiList((prevEmojiList) => [...prevEmojiList, selectedEmoji]);
      // POST 요청 전송
      const test = {
        date: clickedDate,
        emoji: selectedEmoji,
      };
      try {
        const response = await axios.patch(
          "http://34.64.151.119/api/days",
          test,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(clickedDate);
        console.log(response.data); //응답 데이터를 설정
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 각 날짜별로 이모지 추가
  const addEmoji = ({ date }) => {
    const EmojiDateAdded = []; //추가된 이모지 날짜
    for (let i = 0; i < dateList.length; i++) {
      if (dateList[i] === moment(date).format("YYYYMMDD")) {
        EmojiDateAdded.push(
          <div key={dateList[i]} className="savedEmoji">
            {emojiList[i]}
          </div>
        );
      }
    }
    return <div>{EmojiDateAdded}</div>;
  };

  // console.log(dateList, emojiList);
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
        tileContent={addEmoji}
      />
      {/* 임시 데이터 전송 버튼 */}
      <button onClick={() => sendDataToServer(clickedDate, selectedEmoji)}>
        Send Data to Server
      </button>
    </div>
  );
}

export default CalendarFunc;
