import React from "react";
import "./styles.css";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function DayHeader() {
  return (
    <div className="day-head">
      {DAYS.map((e) => (
        <div className="day-head-ind">
          <h3>{e}</h3>
        </div>
      ))}
    </div>
  );
}

export default DayHeader;
