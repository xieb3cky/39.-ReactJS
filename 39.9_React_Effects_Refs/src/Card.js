import React, { useState } from "react";
import './Card.css';

/**Render single card from deck */
function Card({ img, code }) {

    const [{ angle, randomX, randomY }] = useState({
        angle: Math.random() * 90 - 45,
        randomX: Math.random() * 40 - 20,
        randomY: Math.random() * 40 - 20,
    })


    let transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`

    return <img className="Card" src={img} alt={code} style={{ transform }} />;
}
export default Card;

