import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css";

function Soda() {
  return (
    <div className="Soda"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/soda-cans-set-cold-fruit-drinks-various-flavors_107791-7641.jpg?w=1380&t=st=1665776463~exp=1665777063~hmac=8bfc5fe7b5cc39bcfca13f5d96ade7e8eeb2f8ff468896e94e2fe50095c86422)"
      }}>
      <span>
        <h1>Soda</h1>
        <h4><Link to="/">Back</Link></h4 >
      </span>
    </div >

  );
}

export default Soda;
