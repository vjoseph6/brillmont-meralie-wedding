import { useState, useEffect } from "react";
import "./CountdownTimer.css";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("December 20, 2025 15:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">Join Us for the Upcoming Wedding Of</h2>
      <h3 className="couple-namess">Brillmont & Meralie</h3>

      <div className="countdown-timer">
        <div className="time-unit">
          <div className="time-value">{timeLeft.days}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.hours}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.minutes}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.seconds}</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
