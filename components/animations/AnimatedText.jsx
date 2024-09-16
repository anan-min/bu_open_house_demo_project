"use client";
import { useEffect, useRef } from "react";

const AnimatedText = ({
  text,
  className,
  direction = "forward",
  style = "bounce",
}) => {
  const textRef = useRef(null);
  const animationClass =
    {
      bounce: "animate-bounce",
      flip: "animate-flip",
      spin: "animate-spin",
    }[style] || "";

  // this set delay for each letter depending on index
  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");
    const totalLetters = letters.length;

    letters.forEach((letter, index) => {
      const delay =
        direction === "backward"
          ? (totalLetters - index - 1) * 0.1
          : index * 0.1;
      letter.style.animationDelay = `${delay}s`;
    });
  }, [text, direction]);

  // this create blank char
  // and set bounce to all of them
  return (
    <h1 ref={textRef} className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`letter inline-block ${animationClass} ${className}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
