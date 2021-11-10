import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main id="home">
      <Link className="link" to="/m1"><span>M1</span></Link>
      <Link className="link" to="/m2"><span>M2</span></Link>
      <Link className="link" to="/m3"><span>M3</span></Link>
    </main>
  )
}

export default Home;
