import React from "react";
import "./App.css";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/favourite-lists" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
