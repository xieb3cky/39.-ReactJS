import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // Step Two: useFlip
  const [isFacingUp, toggleFlip] = useFlip(true);
  //End Step Two
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
