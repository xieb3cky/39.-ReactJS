import React from "react";
import { Link } from "react-router-dom";
import "./Chips.css";

function Chips() {
  return (
    <div className="Chips"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/chip-bags-collection_1308-775.jpg?w=1380&t=st=1665776741~exp=1665777341~hmac=086b37e88d9ae25983234a2b7e2912673f885ac2abb5dd133ddd5e9be3a9cda8)"
      }}>
      <span>
        <h1>Chips</h1>
        <h4><Link to="/">Back</Link></h4 >
      </span>
    </div>
  );
}

export default Chips;
