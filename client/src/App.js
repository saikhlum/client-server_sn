import React, { useState, useEffect } from 'react'
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/get")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data.name}</p>
        <p>{data.age}</p>
        <p>{data.gender}</p>
        <p>{data.phone}</p>
        <p>{data.address}</p>
      </header>
    </div>
  );

}

export default App;
