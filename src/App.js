import React, { useState } from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import "./styles.css";
/* eslint-disable no-unused-expressions */

export default function App() {
  const [input, setInput] = useState(0);
  console.log(input);
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
    console.log("result")
    console.log(result)
    console.log("input")
    console.log(input)
    console.log("filteredArray")
    console.log(filteredArray)
    result > input ? null : filteredArray.push(tradeIdArray[i])};

  let newTrades = filteredArray.map(function (elem) {
    return {
      "trade-id": elem
    };
  });

  console.log("newTrades");
  console.log(newTrades);

  let JSONPrettyMon = require("react-json-pretty/dist/monikai");

  return (
    <div className="App">
      <h2>Integer input</h2>
      <input onChange={(event) => setInput(event.target.value)} />

      <h2>Trades</h2>
      <JSONPretty
        id="json-pretty"
        style={{
          fontSize: "1.1em",
          // width: "40%",
          display: "inline",
          // float: "left",
          marginRight: "30px"
        }}
        data={trades}
        theme={JSONPrettyMon}
        mainStyle="padding:1em"
        valueStyle="font-size:1.5em"
      ></JSONPretty>
      <h2>Filtered Trades</h2>
      <JSONPretty
        id="json-pretty"
        style={{
          fontSize: "1.1em"
          // width: "40%",
          // display: "inline"
        }}
        data={newTrades}
        mainStyle="padding:1em"
        valueStyle="font-size:1.5em"
      ></JSONPretty>
    </div>
  );
}
