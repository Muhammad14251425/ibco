import React, { useState, useEffect } from 'react';

function Timer({ duration = 0 }) {
  const [hours, setHours] = useState(Math.floor(duration / 3600));
  const [minutes, setMinutes] = useState(Math.floor((duration % 3600) / 60));
  const [seconds, setSeconds] = useState(duration % 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
        return;
      }

      // Decrement and handle transitions correctly
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 0) {
              setHours((prevHours) => prevHours - 1);
              return 59;
            } else {
              return prevMinutes - 1;
            }
          });
          return 59;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, [duration]); // The effect re-runs when `duration` changes

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return (
    <div className="timer-container text-2xl">
      <span className="bg-gray-200 px-3 py-1 rounded-md">{formattedHours}</span>
      <span className="mx-1">:</span>
      <span className="bg-gray-200 px-3 py-1 rounded-md">{formattedMinutes}</span>
      <span className="mx-1">:</span>
      <span className="bg-gray-200 px-3 py-1 rounded-md">{formattedSeconds}</span>
    </div>
  );
}

export default Timer;
