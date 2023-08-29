import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/nav/Nav.js";
import { ROUTE_ARR } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {ROUTE_ARR.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            );
          })}
        </Routes>

        <Nav></Nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
