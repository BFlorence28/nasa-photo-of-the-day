import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// import "styled";
// import { Button } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


// const ButtonOne = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   margin-left: 350px;
//   padding: 0.25em 1em;
//   `;

  const ButtonOne = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  margin-left: 350px;
  padding: 0.25em 1em;
  `;

// const Img = styled.img`
//   width: 100%;
//   height: auto;
// `;

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
        {/* <Img> */}
        <img src={data.url} alt="Nasa pictures of the galaxy"/>
        {/* <h1>{data.title}</h1> */}
        {/* <ButtonOne>WOULD YOU LIKE TO KNOW MORE: </ButtonOne> <p>{data.explanation}</p> */}
        <h4>Image taken on {data.date}</h4>
        {/* </Img> */}

  <div>
    <Button color="palevioletred" id="toggler" 
        style={{ 
          marginBottom: '1rem',
          marginLeft: '400px',
          border: '2px solid palevioletred',
          background: 'transparent',
          borderRadius: '3px',
          }}>
      CLICK TO LEARN MORE!!!
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
        <h1>{data.title}</h1>
        <p>{data.explanation}</p>
        {/* <h4>Image taken on {data.date}</h4> */}
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>

      </Container>
    </NasaBackground>
  );
}



export default App;
