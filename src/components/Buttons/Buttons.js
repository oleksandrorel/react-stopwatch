import React from 'react';
import './Buttons.scss';

export const Buttons = ({
  time,
  stopwatchOn,
  onStart,
  onStop,
  onWait,
  onReset
}) => (
  <div class="Stopwatch-Buttons">
    {!stopwatchOn
      ? (
          <button
            type="button"
            className="Stopwatch-Button"
            onClick={onStart}
          >
            {time ? 'Resume' : 'Start'}
          </button>
      )
      : (
        <>
          <button
            type="button"
            className="Stopwatch-Button"
            onClick={onStop}
          >
            Stop
          </button>

          <button
            type="button"
            className="Stopwatch-Button"
            onClick={onWait}
          >
            Wait
          </button>
        </>
      )}

    {time !== 0 && (
      <button
        type="button"
        className="Stopwatch-Button"
        onClick={onReset}
      >
        Reset
      </button>
    )}

</div>
);
