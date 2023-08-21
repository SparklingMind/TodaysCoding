import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import EmojiPicker from "emoji-picker-react";
import "./CalendarFunc.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiMehBlank } from "react-icons/bi";

function CalendarFunc() {
  const [value, onChange] = useState(new Date());
  const activeDate = moment(value).format("YYYYMMDD"); // 클릭한 날짜 (년-월-일))
  const todayDate = moment().format("YYYYMMDD"); //오늘 날짜
  const endOfMonth = moment(activeDate).endOf("month").format("YYYYMMDD"); //클릭한 날짜 달의 마지막날짜
  const startOfMonth = moment(activeDate).startOf("month").format("YYYYMMDD"); //매월 1일
  const [clickedDate, setClickedDate] = useState(); // 선택한 날짜를 저장할 상태
  const [selectedEmoji, setSelectedEmoji] = useState(); //선택한 이모지를 저장할 상태
  const [showPicker, setShowPicker] = useState(false);
  const [dataToSave, setDataToSave] = useState(); //사용자가 저장한 날짜와 이모지 데이터
  //이모지 클릭하면 나타나게 하는 함수
  const onEmojiClick = (emojiObject, e) => {
    setSelectedEmoji(emojiObject.emoji);
    setShowPicker(false);
  };
  //선택된 이모지, 선택이 아무것도 안되었으면 <BiMehBlank />
  const selectedEmojiSave = selectedEmoji ? selectedEmoji : <BiMehBlank />;
  //클라이언트가 클릭한 날짜 clickedDate에 저장
  const saveDate = (date) => {
    const clickedDate = moment(date).format("YYYYMMDD");
    setClickedDate(clickedDate);
  };
  // 클라이언트에서 선택한 날짜와 이모지를 서버로 전송
  const sendDataToServer = (clickedDate, selectedEmoji) => {
    if (clickedDate && selectedEmoji) {
      const dataToSend = {
        date: clickedDate,
        emoji: selectedEmoji,
      };
      setDataToSave(dataToSend);
    }
    return dataToSave;
  };

  //각 날짜별로 이모지 추가
  const addEmoji = ({ date }) => {
    const EmojiDateAdded = []; //추가된 이모지 날짜
    if (dataToSave && dataToSave.date === moment(date).format("YYYYMMDD")) {
      EmojiDateAdded.push(
        <div key={dataToSave.date} className="savedEmoji">
          {dataToSave.emoji}
        </div>
      );
    }
    return <div>{EmojiDateAdded}</div>;
  };

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
