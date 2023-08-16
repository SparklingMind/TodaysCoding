import "./App.css";
import "./CalendarFunc";
import CalendarFunc from "./CalendarFunc";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CalendarFunc></CalendarFunc>
      <Nav></Nav>
    </div>
  );
}

export default App;
