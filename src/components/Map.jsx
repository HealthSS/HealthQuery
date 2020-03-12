import React, { useState } from 'react';
// import Container from './container.jsx'
import heatMap from "../styles/heatMap.png";
export default function Map(props) {

    return (
        <div>
          <div id="mapSection">
              <img id='heatMap' src={heatMap} alt="heatmap"/>

            <div id="mapBox">
              <h1>text box</h1>
            </div>
          </div>
        </div>
    )
}