import React from "react";
import "../styles/flipCard.css";

const FlipCard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-20">
      <div className="flip-card">
        <div className="flip-card__front-side">Front</div>
        <div className="flip-card__back-side">Back</div>
      </div>
    </div>
  );
};

export default FlipCard;
