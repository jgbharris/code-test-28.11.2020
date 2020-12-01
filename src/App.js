import React, { useState } from "react";
import JSONPretty from "react-json-pretty";
import Header from "./Header.js";
import "react-json-pretty/themes/monikai.css";
import "./styles.css";
/* eslint-disable no-unused-expressions */

export default function App() {
  const [input, setInput] = useState(0);

  console.log(input);

  //Added more trades into array to manually test

  let trades = [
    { "trade-id": "FERG" },
    { "trade-id": "FERG" },
    { "trade-id": "BARC" },
    { "trade-id": "VOD" },
    { "trade-id": "VOD" },
    { "trade-id": "MSFT" },
    { "trade-id": "MSFT" },
    { "trade-id": "MSFT" }
  ];

  let tradeIdArray = [];
  let filteredArray = [];

  trades.forEach((trade) => tradeIdArray.push(trade["trade-id"]));

  function getOccurrence(array, value) {
    let count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  }

  for (let i = 0; i < tradeIdArray.length; i++) {
    let result = getOccurrence(tradeIdArray, tradeIdArray[i]);
    result > input ? null : filteredArray.push(tradeIdArray[i])
  };



  let newTrades = filteredArray.map(function (elem) {
    return {
      "trade-id": elem
    };
  });

  let JSONPrettyMon = require("react-json-pretty/dist/monikai");

  return (
    <div className="App">
      <Header
        title="Trade Filter" />

      <div className="integer-input-container">
        <h2>Integer input</h2>
        <input className="integer-input" onChange={(event) => setInput(event.target.value)} />
      </div>

      <h2 className="section-title">Trades:</h2>
      <JSONPretty
        id="json-pretty"
        style={{
          fontSize: "1.1em",
          display: "inline",
          marginRight: "30px"
        }}
        data={trades}
        theme={JSONPrettyMon}
        mainStyle="padding:1em"
        valueStyle="font-size:1.5em"
      ></JSONPretty>

      <h2 className="section-title">Filtered Trades:</h2>
      <JSONPretty
        id="json-pretty"
        style={{
          fontSize: "1.1em"
        }}
        data={newTrades}
        theme={JSONPrettyMon}
        mainStyle="padding:1em"
        valueStyle="font-size:1.5em"
      ></JSONPretty>

    </div>
  );
}
