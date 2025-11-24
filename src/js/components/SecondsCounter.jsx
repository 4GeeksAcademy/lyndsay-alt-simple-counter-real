import React from "react";

const SecondsCounter = ({
  seconds,
  mode,
  isRunning,
  onStartCountdown,
  onStop,
  onResume,
  onReset,
  onSetAlert,
}) => {
  const padded = String(seconds).padStart(6, "0");
  const digits = padded.split("");

  const handleCountdownSubmit = (event) => {
    event.preventDefault();
    const value = Number(event.target.elements.startFrom.value);
    onStartCountdown(value);
    event.target.reset();
  };

  const handleAlertSubmit = (event) => {
    event.preventDefault();
    const value = Number(event.target.elements.alertTime.value);
    onSetAlert(value);
    event.target.reset();
  };

  return (
    <div className="counter-page">
      <div className="big-counter">
        <div className="digit icon">
          <i className="fa-regular fa-clock"></i>
        </div>
        {digits.map((d, i) => (
          <div className="digit" key={i}>
            {d}
          </div>
        ))}
      </div>

      <div className="info-row">
        <span>
          Mode:{" "}
          <strong>
            {mode === "countup" ? "Counting Up" : "Counting Down"}
          </strong>
        </span>
        <span>
          Status:{" "}
          <strong style={{ color: isRunning ? "green" : "red" }}>
            {isRunning ? "Running" : "Stopped"}
          </strong>
        </span>
      </div>

      <div className="controls">
        <button onClick={onStop}>Stop</button>
        <button onClick={onResume}>Resume</button>
        <button onClick={onReset}>Reset</button>
      </div>

      <div className="forms">
        <form onSubmit={handleCountdownSubmit} className="small-form">
          <label>
            Countdown from:
            <input type="number" name="startFrom" placeholder="Seconds" />
          </label>
          <button type="submit">Start</button>
        </form>

        <form onSubmit={handleAlertSubmit} className="small-form">
          <label>
            Alert at:
            <input type="number" name="alertTime" placeholder="Seconds" />
          </label>
          <button type="submit">Set Alert</button>
        </form>
      </div>
    </div>
  );
};

export default SecondsCounter;
