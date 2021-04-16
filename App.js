import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Top from "./Top";
import LoginPage from "./loginPage";

function App(){
  return (
    <div className="app">
      <Top />
      <Banner />
      <Row
        isLargeRow
        title="Action"
        fetchUrl={''}
      />
      <Row
        isLargeRow
        title="Fantastique"
        fetchUrl={''}
      />
      <Row
        isLargeRow
        title="Science-fiction"
        fetchUrl={''}
      />
      <Row
        isLargeRow
        title="Horreur"
        fetchUrl={''}
      />
      <Row
        isLargeRow
        title="Thriller"
        fetchUrl={''}
      />
    </div>
    /*<LoginPage />*/
  );
}

export default App;
