import React from "react";
import "../styles/TimerDisplay.scss";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  timeLeft: TimeLeft;
}

const TimerDisplay: React.FC<Props> = ({ timeLeft }) => {
  return (
    <div className="timer-display">
      <div className="time-unit">
        <span className="number">{timeLeft.days}</span>
        <p>DAYS</p>
      </div>
      <div className="time-unit">
        <span className="number">{timeLeft.hours}</span>
        <p>HOURS</p>
      </div>
      <div className="time-unit">
        <span className="number">{timeLeft.minutes}</span>
        <p>MINUTES</p>
      </div>
      <div className="time-unit">
        <span className="number">{timeLeft.seconds}</span>
        <p>SECONDS</p>
      </div>
    </div>
  );
};

export default TimerDisplay;
