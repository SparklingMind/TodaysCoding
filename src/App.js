import "./App.css";
import "./CalendarFunc";
import CalendarFunc from "./CalendarFunc";
import Header from "./Header";
import Nav from "./Nav";
import DiaryView from "./components/DiaryView";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CalendarFunc></CalendarFunc>
      <DiaryView></DiaryView>
      <Nav></Nav>
    </div>
  );
}

export default App;
