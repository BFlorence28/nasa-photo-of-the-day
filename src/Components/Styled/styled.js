// import React from "react";
import styled from "styled-components";

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

export default styled