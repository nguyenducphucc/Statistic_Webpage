import React, { useState, useEffect } from "react";
import "../App.css";
import "../input.css";

function FunctionsSection({ numbersArray }) {
  const [mean, setMean] = useState(0);
  const [median, setMedian] = useState(0);
  const [mode, setMode] = useState(0);
  const [range, setRange] = useState(0);
  const [variance, setVariance] = useState(0);
  const [sampleVariance, setSampleVariance] = useState(0);
  const [standardDeviation, setStandardDeviation] = useState(0);
  const [coefficientOfVariation, setCoefficientOfVariation] = useState(0);

  useEffect(() => {
    fetch("/mean", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbersArray),
    })
      .then((response) => response.json())
      .then((data) => setMean(data));
  }, [numbersArray]);

  useEffect(() => {
    fetch("/median", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbersArray),
    })
      .then((response) => response.json())
      .then((data) => setMedian(data));
  }, [numbersArray]);

  useEffect(() => {
    fetch("/mode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbersArray),
    })
      .then((response) => response.json())
      .then((data) => setMode(data));
  }, [numbersArray]);

  useEffect(() => {
    fetch("/range", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbersArray),
    })
      .then((response) => response.json())
      .then((data) => setRange(data));
  }, [numbersArray]);

  useEffect(() => {
    fetch("/variance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbersArray),
    })
      .then((response) => response.json())
      .then((data) => setVariance(data));
  }, [numbersArray]);

  useEffect(() => {
    fetch("/sample_variance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbersArray),
    })
      .then((response) => response.json())
      .then((data) => setSampleVariance(data));
  }, [numbersArray]);

  useEffect(() => {
    fetch("/standard_deviation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbersArray),
    })
      .then((response) => response.json())
      .then((data) => setStandardDeviation(data));
  }, [numbersArray]);

  useEffect(() => {
    fetch("/coefficient_of_variation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbersArray),
    })
      .then((response) => response.json())
      .then((data) => setCoefficientOfVariation(data));
  }, [numbersArray]);

  const sortArray = (arr) => {
    let res = "[";

    const sortArr = numbersArray.sort((a, b) => {
      if (isNaN(a)) return 1;
      if (isNaN(b)) return -1;
      return a - b;
    });

    for (let i = 0; i < sortArr.length; i++) {
      if (isNaN(sortArr[i]) || sortArr[i] < 0) continue;
      res += res.length > 1 ? ", " : "";
      res += sortArr[i].toString();
    }

    res += "]";
    return res;
  };
  const boldTextStyle = {fontWeight: 'bold'};
  return (
    <div className="functions-section">
      <h1 className="functions-title">Functions</h1>
      <h3 style={boldTextStyle}>
        Processed array (negative number and non-number excluded):{" "}
        {sortArray(numbersArray)}
      </h3>
      <h3 style={boldTextStyle}>Measures of Location:</h3>
      <ul>
        <li>Mean: {mean}</li>
        <li>Median: {median}</li>
        <li>Mode: {mode}</li>
        {/* <li>Range: {range}</li> */}
        <h2 style={boldTextStyle}>Measures of Variability</h2>
        <li>Variance: {variance}</li>
        <li>Sample Variance: {sampleVariance}</li>
        <li>Standard Deviation: {standardDeviation}</li>
        <li>Coefficient of Variation: {coefficientOfVariation}</li>
      </ul>
    </div>
  );
}

export default FunctionsSection;
