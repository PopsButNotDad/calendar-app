import React from "react";
import "./styles.css";

function DayComponent(props) {
  const daysContainer = [];

  for (let i = 0; i < 42; i++) {
    daysContainer.push({
      number: `${i}`,
    });
  }

  startDays();

  return (
    <div className="days-tain">
      {daysContainer.map((day) => (
        <div className="day-ind">
          <h2>{day.inline}</h2>
        </div>
      ))}
    </div>
  );

  //helper function
  function startDays() {
    let j = 1;
    for (let i = props.startDay; i <= daysContainer.length; i++) {
      if (j <= props.lastDay) {
        daysContainer[i].inline = j;
        j++;
      }
    }
  }
}

export default DayComponent;
