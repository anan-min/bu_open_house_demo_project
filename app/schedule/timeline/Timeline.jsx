import React from "react";
import TimelineCard from "../timeline/TimeLineCard";
import CardContent from "../timeline/CardContent";
import CardLine from "../timeline/CardLine";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center p-12 gap-2">
      <TimelineCard time="29 AUG 2024">
        <CardContent />
        <CardContent />
        <CardContent />
      </TimelineCard>
      <CardLine />
      <TimelineCard time="30 AUG 2024">
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
      </TimelineCard>
      <CardLine />
      <TimelineCard time="31 AUG 2024">
        <CardContent />
        <CardContent />
        <CardContent />
      </TimelineCard>
    </div>
  );
};

export default Timeline;
