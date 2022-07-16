import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "green" }}>React Hook List</h1>
      <hr />
      <ul>
        <li>
          <Link to="/react-hook">React Hook</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
