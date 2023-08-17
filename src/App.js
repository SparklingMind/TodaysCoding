import "./App.css";
import "./CalendarFunc";
import CalendarFunc from "./CalendarFunc";
import Header from "./Header";
import Nav from "./Nav";
import DiaryWrite from "./components/DiaryWrite";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CalendarFunc></CalendarFunc>
      <DiaryWrite></DiaryWrite>
      <Nav></Nav>
    </div>
  );
}

export default App;
