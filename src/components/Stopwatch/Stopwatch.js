import React, { useState, useEffect } from 'react';
import { Buttons } from '../Buttons';
import { Watch } from '../Watch';
import './Stopwatch.scss';

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [stopwatchOn, setStopwatchOn] = useState(false);

  useEffect(() => {
    let timerId = null;

    if (stopwatchOn) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(timerId);
    }

    return () => (
      clearInterval(timerId)
    )
  }, [stopwatchOn])

  const onStart = () => {
    setStopwatchOn(true);
  }

  const onStop = () => {
    setStopwatchOn(false);
    setTime(0);
  }

  const customDoubleClick = () => {
    let clickCount = 0;
    let singleClickTimer;

    return () => {
      clickCount++;

      if (clickCount === 1) {
        singleClickTimer = setTimeout(() => {
          clickCount = 0;
        }, 300);
      } else {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        setStopwatchOn(false);
      }
    }
  }

  const onWait = customDoubleClick();

  const onReset = () => {
    setTime(0);
  }

  return (
    <div className="Stopwatch">
      <h1 className="Stopwatch-Title">
        React Stopwatch
      </h1>
      <Watch time={time} />
      <Buttons
        time={time}
        stopwatchOn={stopwatchOn}
        onStart={onStart}
        onStop={onStop}
        onWait={onWait}
        onReset={onReset}
      />
  
    </div>
  );
}
