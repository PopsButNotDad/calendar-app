import React, { useState, useEffect } from "react";
import DayComponent from "./DayComponent";
import DayHeader from "./DayHeader";
import "./styles.css";

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
  const YEARS = yearGenerator(50, 50);
  let [startYear, setStartYear] = useState(50);
  let [curMonth, setCurMonth] = useState(cd.getMonth());

  const [holiday, setHolidays] = useState([]);

  //specifically for the drop down, not for the functionality
  const [month, setMonth] = useState(MONTHS[curMonth]);
  //specifically for the drop down, not for the functionality
  const [year, setYear] = useState(YEARS[startYear]);

  const daysInCurMonth = getDaysInMonth(curMonth + 1, startYear);
  //need to get what day of the week the selected month starts on.
  const startDay = new Date(year + "-" + (curMonth + 1) + "-1").getDay();

  const lastDay = getLastDay(year, curMonth);

  //enables change through buttons but inteferes through change on drop down
  useEffect(() => {
    setMonth(MONTHS[curMonth]);
  }, [curMonth]);

  useEffect(() => {
    setYear(YEARS[startYear]);
  }, [startYear, YEARS]);

  useEffect(() => {
    requestHolidays();
  }, [year, startYear]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="h-Buttons">
        <div className="title">
          <h1>National Holiday Calendar for USA</h1>
        </div>
        <div className="btns">
          <button onClick={() => decrementMonth()}>
            {MONTHS[curMonth - 1]}
          </button>
          <p>
            {" "}
            {month}, {year}{" "}
          </p>
          <button onClick={() => incrementMonth()}>
            {MONTHS[curMonth + 1]}
          </button>
        </div>
      </div>
      <DayHeader />
      <DayComponent
        year={year}
        month={curMonth}
        holiday={holiday}
        curDay={cd.getDate() + 1}
        numOfDays={daysInCurMonth}
        startDay={startDay}
        lastDay={lastDay}
      />
    </div>
  );

  //--------------------------helper functions---------------------------------
  function yearGenerator(x, y) {
    let arr = [];
    for (let i = cd.getFullYear() - x; i <= cd.getFullYear() + y; i++) {
      arr.push(i);
    }
    return arr;
  }

  //January is index 1
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  function getLastDay(y, m) {
    return new Date(y, m + 1, 0).getDate();
  }

  function incrementMonth() {
    if (curMonth === 11) {
      setCurMonth(0);
      setStartYear((startYear += 1));
    } else {
      setCurMonth((curMonth += 1));
    }
    // setYear(YEARS[startYear]);
    // setMonth(MONTHS[curMonth]);
  }

  function decrementMonth() {
    if (curMonth === 0) {
      setCurMonth(11);
      setStartYear((startYear -= 1));
    } else {
      setCurMonth((curMonth -= 1));
      setMonth(MONTHS[curMonth]);
    }
    // setYear(YEARS[startYear]);
    // setMonth(MONTHS[curMonth]);
  }

  async function requestHolidays() {
    const res = await fetch(
      `https://date.nager.at/api/v3/PublicHolidays/${year}/US`
    );

    const json = await res.json();

    setHolidays(json);
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

fix bug with small arrow button so it loops around to previous month previous year when hit back on january
  and vice versa on hitting forward on december ---- done

build actual calendar space 
  need to label the days properly at the top of the columns, then will be finished. ---- DONE

fix bug where numerical year/month doesnt change when selecting from drop down menu

fix bug with certain holidays not being on the correct day.

fix bug with current day highlighting only the current day and not that day every month.

populate calendar with holiday information ---- KINDA DONE

  // function findYearIndex(arr) {
  //   let x = 0;
  //   for (let i = 0; i <= arr.length; i++) {
  //     if (year === arr[i]) {
  //       x = i;
  //     }
  //   }

  //   return x;
  // }

  // function findMonthIndex(arr) {
  //   let x = 0;
  //   for (let i = 0; i <= arr.length; i++) {
  //     if (month === arr[i]) {
  //       x = i;
  //     }
  //   }
  //   setCurMonth(x + 1);
  // }

POTENTIAL DROP DOWN
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


OTHER NOTES

API HAS INCORRECT DATA, SAYS CHRISTMAS IS ON THE 26TH. MAKE NOTE OF THIS IN THE INTERVIEW. 
*/
