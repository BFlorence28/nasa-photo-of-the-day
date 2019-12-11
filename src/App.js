import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState("Data")

  useEffect(() => {
    const fetchData = () => {
      axios
      .get("https://api.nasa.gov/planetary/apod?api_key=a6etMgp6umDLNczKiXvadyCNtnlYogALargYgT0p")
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => console.log("Error message", error));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <img src={data.url} alt="Nasa pictures of the galaxy"/>
        <h1>{data.title}</h1>
      <p>WOULD YOU LIKE TO KNOW MORE: {data.explanation}</p>
      <h4>Image taken on {data.date}</h4>
      </div>
    </div>
  );
}

export default App;
