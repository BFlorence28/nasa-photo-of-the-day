import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import ".styled.js";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  `;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  height: auto;
  width: 80%;
  padding: 2.5rem;
`;

const NasaBackground = styled.div`
  height: auto;
  width: 100%;
  background-image: linear-gradient(
    to left bottom,
    #00449e,
    #e66465,
    #ff6f67,
    #ff9643,
    #2E8025,
    #f9f871
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    <NasaBackground>
      <Container>
        <img src={data.url} alt="Nasa pictures of the galaxy"/>
        <h1>{data.title}</h1>
        <Button>WOULD YOU LIKE TO KNOW MORE: </Button> <p>{data.explanation}</p>
        <h4>Image taken on {data.date}</h4>
      </Container>
    </NasaBackground>
  );
}

export default App;
