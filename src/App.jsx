import React, { useState, useEffect } from 'react';


const MONTHS = ['January','February','March','April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



function App() {
  const cd = new Date();
  const date = `${cd.getMonth()+1}/${cd.getDate()}/${cd.getFullYear()}`;
  const YEARS = yearGenerator();
  
  let [startYear, setStartYear] = useState(50);
  let [curMonth, setCurMonth] = useState(cd.getMonth());
  const [month, setMonth] = useState(MONTHS[curMonth]);
  const [year, setYear] = useState(YEARS[startYear]);

  useEffect(() => {
    setMonth(MONTHS[curMonth]);
  }, [curMonth]);

  useEffect(() => {
    setYear(YEARS[startYear]);
  }, [startYear, YEARS]);


  return (
    <div className="App">
      <header className="App-header">
        <div className='hButtons'>
        <h1>National Holiday Calendar for USA</h1>
        <button onClick={() => setStartYear(startYear-=1)}>Left Big Arrow</button>
        <button onClick={() => setCurMonth(curMonth-=1)} >Left Small Arrow</button>
        <label htmlFor='Month' > Month </label>
          <select
            id='month'
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
            onBlur={(e) => {
              setMonth(e.target.value);
            }}
          >
            <option />
            {MONTHS.map((month)=> (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <label htmlFor='Year'> Year </label>
          <select
            id='year'
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
            onBlur={(e) => {
              setYear(e.target.value);
            }}
          >
            <option />
            {YEARS.map((year)=> (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        <button onClick={() => setCurMonth(curMonth+=1)}>Right Small Arrow</button>
        <button onClick={() => setStartYear(startYear+=1)}>Right Big Arrow</button>
        <p> Current Date: {date} </p>
        </div>
      </header>
    </div>
  );

  //helper functions
function yearGenerator(){
  let arr = [];
  for(let i = (cd.getFullYear() - 50); i <= (cd.getFullYear() + 50); i++){
    arr.push(i);
  }
  return arr;
  
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
