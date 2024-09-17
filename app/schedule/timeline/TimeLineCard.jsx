import React from "react";
import CardContent from "./CardContent";

const TimeLineCard = ({ time = "29 AUG 2024", children }) => {
  return (
    <div class="p-5 border rounded-lg bg-gray-800 border-gray-700 max-w-[800px] w-5/6">
      <time class="text-2xl font-semibold  text-white">{time}</time>
      <ol class="mt-3 divide-y  divide-gray-700">{children}</ol>
    </div>
  );
};

export default TimeLineCard;
