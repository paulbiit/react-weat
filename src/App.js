import React from 'react';

// eslint-disable-next-line
const apiWeatKey = {
  key: "ecafc943dd32c2ba10f8bbf388da6aab",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (d) => {
    console.log('Date is ' + d);
    let months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday"];
    
    let wday = days[d.getDay()];
    let wdate = d.getDate();

    let wmonth = months[d.getMonth()];
    let wyear = d.getFullYear();

    // eslint-disable-next-line no-template-curly-in-string
    return `${wday} ${wdate} ${wmonth} ${wyear}`
}

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
        </div>
        <div className="location-box">
          <div className="location">Helsinki, Finland</div>
          <div className="weather-date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temperature">15 C</div>
          <div className="weatherDesc">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
