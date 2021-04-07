import React from "react";

export default function FormattedTime(props) {
  let time = (props.data.date + props.data.timezone) * 1000;
  let formattedTime = new Date(time);
  let currentTime = formattedTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return <div className='formattedTime'>{currentTime}</div>;
}
