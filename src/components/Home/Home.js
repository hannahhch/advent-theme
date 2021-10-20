import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main class="home">
      <Link className="link" to="/m1">M1</Link>
      <Link className="link" to="/m2">M2</Link>
    </main>
  )
}

export default Home;