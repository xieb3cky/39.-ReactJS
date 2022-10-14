import React from "react";
import { Link } from "react-router-dom";

import "./Cookies.css";
function Cookies() {
  return (
    <div className="Cookies"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/bitten-cookie-with-chocolate-chips-cartoon-illustration-set-bites-sweet-biscuits-homemade-pastry-with-chocolate-crumbs-isolated-white-background-food-baking-concept_74855-23961.jpg?w=1380&t=st=1665776654~exp=1665777254~hmac=acf4bf788ad3db2a8413a967dbd02b869c2451bf708b1274681887c7993c4e35)"
      }}>
      <span>
        <h1>Cookies</h1>
        <h4><Link to="/">Back</Link></h4 >
      </span>
    </div>
  );
}

export default Cookies;
