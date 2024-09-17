"use client";
import React from "react";
import "@/styles/flipcard.css";

const FlipCard = ({
  front = "front",
  back = "back",
  front_style = "bg-white text-slate-600 shadow-lg ",
  back_style = "bg-white text-slate-600 shadow-lg",
  card_style = "w-[500px] h-[280px]",
}) => {
  return (
    <div className={`flip-card ${card_style}`}>
      <div className={`flip-card__front-side ${front_style}`}>
        <div className="text-base text-center font-bold p-2">{front}</div>
      </div>
      <div className={`flip-card__back-side ${back_style}`}>
        <div className="text-base text-center p-2">{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;
