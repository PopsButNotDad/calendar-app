import React, { useState, useEffect } from "react";
import DayComponent from "./DayComponent";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  const cd = new Date();
  const date = `${cd.getMonth() + 1}/${cd.getDate()}/${cd.getFullYear()}`;
  const YEARS = yearGenerator();

  let [startYear, setStartYear] = useState(50);
  let [curMonth, setCurMonth] = useState(cd.getMonth());
  const [month, setMonth] = useState(MONTHS[curMonth]);
  const [year, setYear] = useState(YEARS[startYear]);

  const daysInCurMonth = getDaysInMonth(curMonth + 1, startYear);
  //need to get what day of the week the selected month starts on.

  useEffect(() => {
    setMonth(MONTHS[curMonth]);
  }, [curMonth]);

  useEffect(() => {
    setYear(YEARS[startYear]);
  }, [startYear]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="hButtons">
        <h1>National Holiday Calendar for USA</h1>
        <button onClick={() => setStartYear((startYear -= 1))}>
          Left Big Arrow
        </button>
        <button onClick={() => setCurMonth((curMonth -= 1))}>
          Left Small Arrow
        </button>
        <select
          id="month"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
          onBlur={(e) => {
            setMonth(e.target.value);
          }}
        >
          <option />
          {MONTHS.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          id="year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
          onBlur={(e) => {
            setYear(e.target.value);
          }}
        >
          <option />
          {YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button onClick={() => setCurMonth((curMonth += 1))}>
          Right Small Arrow
        </button>
        <button onClick={() => setStartYear((startYear += 1))}>
          Right Big Arrow
        </button>
        <p> Current Date: {date} </p>
      </div>
      <DayComponent curDay={cd.getDate()} numOfDays={daysInCurMonth} />
    </div>
  );

  //helper functions
  function yearGenerator() {
    let arr = [];
    for (let i = cd.getFullYear() - 50; i <= cd.getFullYear() + 50; i++) {
      arr.push(i);
    }
    return arr;
  }

  //January is index 1
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
}

export default App;

// Calendar app structure

// single page app

// <-- holding div -->

//   big arrow | lil arrow | Month | Year | lil arrow | big arrow

//   <-- day label holding div -->

//     sunday | monday | tuesday | wednesday | thursday | friday | saturday

//   <-- close day label holding div -->

//   <-- calendar boxes holding div -->

//   SHOULD PROBABLY ONLY RENDER THE ONES WITHIN THAT MONTH AND GREY OUT THE OTHERS

//     | |   | |   | |   | |   | |   | |   | |
//     | |   | |   | |   | |   | |   | |   | |
//     | |   | |   | |   | |   | |   | |   | |
//     | |   | |   | |   | |   | |   | |   | |
//     | |   | |   | |   | |   | |   | |   | |
//     | |   | |   | |   | |   | |   | |   | |

//   <-- close calendar boxes holding div -->

// <-- close holding div -->

/* NOTES BELOW

get buttons and initial data working ---- done

access country location via IP, provide option to choose as well 

--- build actual calendar space ---

build day components or populate the day spaces another way

populate calendar with holiday information

*/
