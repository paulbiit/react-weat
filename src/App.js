import React, {useState} from 'react';

// eslint-disable-next-line
const apiWeatKey = {
  key: "ecafc943dd32c2ba10f8bbf388da6aab",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [weather1, setWeather1] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      console.log('Query is ' + query);
      console.log('base is ' + apiWeatKey.base);
      console.log('app id is ' + apiWeatKey.key);
      // api.openweathermap.org/data/2.5/weather?q=Dublin&units=metric&APPID=ecafc943dd32c2ba10f8bbf388da6aab
      fetch(`${apiWeatKey.base}weather?q=${query}&units=metric&APPID=${apiWeatKey.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather1(weather);
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

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
    <div className="Navigation">
      <nav className="nav-main">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Assets</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
    </div>
    <div className={
      (typeof weather.main != "undefined") ?
        ((weather.main.temp < 16) ?
        "App winter" :
  "App") : "App"} >
      <main>

        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a location..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
        <div className="version">
          <h3>Version 0.001</h3>
        </div> 



        {(typeof weather.main != "undefined") ? (
          <div className="weatherSection">
        <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="weather-date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
              <div className="temperature">{Math.round( weather.main.temp )}°c</div>
              <div className="weatherDesc">{weather.weather[0].description}</div>
            </div>
            </div>
        ) : ('')}
        {(typeof weather1.main != "undefined") ? (
          <div className="weatherSection1">
            <p></p>
            <p></p>
        <div className="location-box">
              <div className="location">{weather1.name}, {weather1.sys.country}</div>
          <div className="weather-date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
              <div className="temperature">{Math.round( weather1.main.temp )}°c</div>
              <div className="weatherDesc">{weather1.weather[0].description}</div>
            </div>
            </div>
        ) : ('')}
        


      </main>
    </div>
  );
}

export default App;
