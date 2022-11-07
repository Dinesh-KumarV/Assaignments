import React, { Component, useState } from "react";
import "../styles/App.css";

const Project = ({ name, description }) => {
  return (
    <>
      <h1 data-ns-test="project-name">{name}</h1>
      <p data-ns-test="project-description">{description}</p>
    </>
  );
};

const App = () => {
  return (
    <>
      <Project name={"Zomato"} description={"To build a Zomato clone"} />
      <Project name={"Netflix"} description={"To build a Netflix clone"} />
    </>
  );
};

export default App;
