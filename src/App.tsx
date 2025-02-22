import React, { useState, useEffect } from "react";
import TimerDisplay from "./components/TimerDisplay";
import DateInput from "./components/DateInput";
import "./styles/App.scss";

const App: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>("2002-11-09");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    let nextBirthday = new Date(birthDate);
    nextBirthday.setFullYear(now.getFullYear());

    if (nextBirthday < now) {
      nextBirthday.setFullYear(now.getFullYear() + 1);
    }

    const difference = nextBirthday.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [birthDate]);

  return (
    <div className="app-container">
      <div className="cyber-grid" />
      <div className="scanner-line" />
      <div className="timer-container">
        <h1 className="title">NEXT BIRTHDAY PROTOCOL</h1>
        <TimerDisplay timeLeft={timeLeft} />
        <DateInput birthDate={birthDate} setBirthDate={setBirthDate} />
      </div>
    </div>
  );
};

export default App;
