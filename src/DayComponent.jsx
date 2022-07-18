import React from "react";

function DayComponent(props) {
  const numDaysMonth = [];

  for (let i = 0; i < props.numOfDays; i++) {
    numDaysMonth.push({
      number: `${i + 1}`,
    });
  }

  console.log(numDaysMonth);

  return (
    <div>
      {numDaysMonth.map((day) => (
        <h2 key={day.number}> {day.number} </h2>
      ))}
    </div>
  );
}

export default DayComponent;
