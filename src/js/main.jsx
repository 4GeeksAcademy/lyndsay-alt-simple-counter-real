import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/SecondsCounter.jsx";
import "../styles/index.css";

let seconds = 0;
let isRunning = true;
let mode = "countup";
let alertAt = null;

const root = ReactDOM.createRoot(document.getElementById("root"));

function render() {
  root.render(
    <SecondsCounter
      seconds={seconds}
      mode={mode}
      isRunning={isRunning}
      onStartCountdown={handleStartCountdown}
      onStop={handleStop}
      onResume={handleResume}
      onReset={handleReset}
      onSetAlert={handleSetAlert}
    />
  );
}

function handleStartCountdown(start) {
  mode = "countdown";
  seconds = start;
  isRunning = true;
  render();
}

function handleStop() {
  isRunning = false;
  render();
}

function handleResume() {
  isRunning = true;
  render();
}

function handleReset() {
  seconds = 0;
  mode = "countup";
  isRunning = true;
  render();
}

function handleSetAlert(time) {
  alertAt = time;
  render();
}

function tick() {
  if (!isRunning) return;

  if (mode === "countup") seconds++;
  if (mode === "countdown" && seconds > 0) seconds--;
  if (mode === "countdown" && seconds === 0) isRunning = false;

  if (alertAt !== null && seconds === alertAt) {
    alert(`⏰ Time reached: ${alertAt} seconds`);
    alertAt = null;
  }

  render();
}

render();
setInterval(tick, 1000);
