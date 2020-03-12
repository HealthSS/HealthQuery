import React, { useState, useEffect } from 'react';
import AnimatedPie from './PieChart.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PieChartStyles.css';

const PieChart = () => {
  // Get Data
  const [sourceAPIData, setSourceAPIData] = useState(null);

  function getData() {
    fetch('/coroni', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => setSourceAPIData(response))
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  // Responsive Charts
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const updateWindowDimensions = () => {
    const dimensionsObject = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    setWindowDimensions(dimensionsObject);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
  }, []);

  const chartSize = windowDimensions.width / 3.3;

  // Data Logic
  const dataFilter = (keySelection, data) => {
    if (!data) return;

    const filteredDataArray = data.reduce((acc, curr) => {
      acc.push({ city: curr.city, value: curr[keySelection] });
      return acc;
    }, []);

    return filteredDataArray;
  };

  const Confirmed = dataFilter('confirmed', sourceAPIData);

  const Recovered = dataFilter('recovered', sourceAPIData);

  const Active = dataFilter('active', sourceAPIData);

  const Deaths = dataFilter('deaths', sourceAPIData);

  const [swapData, setSwapData] = useState(null);
  let initialSwapData = [
    { data: Confirmed, title: 'Confirmed' },
    { data: Active, title: 'Active' },
    { data: Recovered, title: 'Recovered' }
  ];

  let shiftSwapData = () => {
    setSwapData(lastSwapData => {
      let arrayClone = JSON.parse(JSON.stringify(lastSwapData));
      let removed = arrayClone.shift();
      arrayClone.push(removed);

      return arrayClone;
    });
  };

  // If the data has loaded and we have not yet saved it to state, then save the data to state
  if (sourceAPIData && !swapData) {
    setSwapData(initialSwapData);
  }

  // Don't render if swapData does not exist
  if (!swapData) return <></>;
  return (
    <div>
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-center">
          <button className="swapButton" onClick={shiftSwapData}>
            Swap Charts
          </button>
        </div>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={swapData[0].data}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
              title={swapData[0].title}
            />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={swapData[1].data}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
              title={swapData[1].title}
            />
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-6 d-flex justify-content-center">
            <AnimatedPie
              data={swapData[2].data}
              width={chartSize}
              height={chartSize}
              innerRadius={(chartSize / 2) * 0.5}
              outerRadius={chartSize / 2}
              title={swapData[2].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
