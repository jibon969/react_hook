import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home/Home";
import ReactHook from "../page/Hook/ReactHook";
const HandleRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-hook" element={<ReactHook />} />
      </Routes>
    </>
  );
};

export default HandleRouter;
