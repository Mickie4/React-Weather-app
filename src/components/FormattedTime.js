import React from "react";

export default function FormattedTime(props) {
  let currentTime = props.date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return <div className='formattedTime'>{currentTime}</div>;
}
