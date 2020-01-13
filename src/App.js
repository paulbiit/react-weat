import React from 'react';

// eslint-disable-next-line
const apiWeatKey = {
  key: "ecafc943dd32c2ba10f8bbf388da6aab",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
