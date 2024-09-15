"use client";
import React from "react";
import "../styles/flipCard.css";

const FlipCard = ({
  front = "front",
  back = "back",
  front_style = "bg-white text-slate-600",
  back_style = "bg-white text-slate-600",
  card_style = "w-[500px] h-[280px]",
}) => {
  return (
    <div className={`flip-card ${card_style}`}>
      <div className={`flip-card__front-side ${front_style}`}>{front}</div>
      <div className={`flip-card__back-side ${back_style}`}>{back}</div>
    </div>
  );
};

export default FlipCard;
