import React from "react";
import "./styles.css";

function DayComponent(props) {
  const daysContainer = [];

  const holidayObj = props.holiday;

  //console.log(holidayObj);

  for (let i = 0; i < 42; i++) {
    daysContainer.push({
      number: `${i}`,
      dat: -1,
    });
  }

  startDays();
  //insertHolidays();

  return (
    <div className="days-tain">
      {daysContainer.map((day) => (
        <div className="day-ind">
          <h2>{day.inline}</h2>
          <p>{day.info}</p>
        </div>
      ))}
    </div>
  );

  //helper functions
  function startDays() {
    let j = 1;
    for (let i = props.startDay; i <= daysContainer.length; i++) {
      if (j <= props.lastDay) {
        daysContainer[i].inline = j;
        daysContainer[i].dat = `${props.year}-${minTwoDigits(
          props.month + 1
        )}-${minTwoDigits(j)}`;
        j++;
      }
    }
  }

  function insertHolidays() {
    for (let i = props.startDay; i <= daysContainer.length; i++) {
      for (let j = 0; j <= holidayObj.length; i++) {
        console.log(daysContainer[i].dat);
        //console.log(holidayObj[j].date);
        // if (daysContainer[i].dat === holidayObj[j].date) {
        //   daysContainer.info = `${holidayObj.name}`;
        // }
      }
    }
  }

  function minTwoDigits(n) {
    if (typeof n === "number") {
      return (n < 10 ? "0" : "") + n;
    } else {
      let x = Math.floor(n);
      return (x < 10 ? "0" : "") + x;
    }
  }
}

export default DayComponent;
