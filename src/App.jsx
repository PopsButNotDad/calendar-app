import React, { useState, useEffect } from 'react';



function App() {
  const cd = new Date();
  const date = `${cd.getMonth()+1}/${cd.getDate()}/${cd.getFullYear()}`;

  console.log(cd.getMonth());




  return (
    <div className="App">
      <header className="App-header">
        <h1>National Holiday Calendar for USA</h1>
        <button >Left Big Arrow</button>
        <button >Left Small Arrow</button>
          <select name="months" className="monthPicker">
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
        <button >Right Small Arrow</button>
        <button >Right Big Arrow</button>
        <p> Current Date: {date} </p>
      </header>
    </div>
  );
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
