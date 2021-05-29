import React from 'react';
import './Watch.scss';

export const Watch = ({ time }) => (
  <div className="Stopwatch-Time Time">
    <span className="Time-Value">
      {('0' + Math.floor(time / 3600) % 60).slice(-2) + ':'}
    </span>
    <span className="Time-Value">
      {('0' + Math.floor(time / 60) % 60).slice(-2) + ':'}
    </span>
    <span className="Time-Value">
      {('0' + time % 60).slice(-2)}
    </span>
  </div>
);
