import React from "react";
import SignUp from "./signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
