import React from "react";

export default function FormattedDate(props) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];

  return (
    <div className='formattedDate'>
      {day} {date} {month}
    </div>
  );
}
