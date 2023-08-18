import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import EmojiPicker from "emoji-picker-react";
import "./CalendarFunc.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CalendarFunc() {
  const [value, onChange] = useState(new Date());
  const activeDate = moment(value).format("YYYY-MM-DD"); // 클릭한 날짜 (년-월-일))
  const todayDate = moment().format("YYYY-MM-DD"); //오늘 날짜
  const endOfMonth = moment(activeDate).endOf("month").format("YYYY-MM-DD"); //클릭한 날짜 달의 마지막날짜
  const startOfMonth = moment(activeDate).startOf("month").format("YYYY-MM-DD"); //매월 1일
  //나중에 데이터 받을 수 있으면 지울 변수
  const dayList = [
    "2023-08-01",
    "2023-08-02",
    "2023-08-10",
    "2023-08-11",
    "2023-08-13",
  ];
  //각 날짜별로 이모지 추가
  const addEmoji = ({ date }) => {
    const EmojiDateAdded = []; //추가된 이모지 날짜
    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
    if (dayList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      EmojiDateAdded.push(
        <div className="savedEmoji">{selectedEmojiSave}</div>
      );
    }
    return <div>{EmojiDateAdded}</div>;
  };

  const [selectedEmoji, setSelcectedEmoji] = useState();
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject, e) => {
    setSelcectedEmoji(emojiObject);
    setShowPicker(false);
  };

  const EmojiData = ({ selectedEmoji }) => {
    return <div>{selectedEmoji.emoji}</div>;
  };

  const selectedEmojiSave = selectedEmoji
    ? selectedEmoji && <EmojiData selectedEmoji={selectedEmoji}></EmojiData>
    : "🫥";

  return (
    <div className="wrap">
      <div className="EmojiSelection">
        <span style={{ fontSize: 50 }}>{selectedEmojiSave}</span>
        <button onClick={() => setShowPicker(!showPicker)}> + </button>
        {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
      </div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en"
        formatDay={(locale, date) => moment(date).format("D")}
        tileContent={addEmoji}
      />
    </div>
  );
}

export default CalendarFunc;
