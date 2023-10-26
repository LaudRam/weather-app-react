import React from "react";

export default function FormattedDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  // console.log(props.date);
// const dates = new Date(props.date);
// console.log(dates.getDate())

let now = new Date();
let day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
day = days[day];

  // let day = days[props.date.getDay()];
  // let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  // let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {hours}:{minutes} {day}
    </div>
  );
}