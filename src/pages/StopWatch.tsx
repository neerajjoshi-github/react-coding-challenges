import { GrPowerReset } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useEffect, useState } from "react";

const StopWatch = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [milliSeconds, setMilliSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setMilliSeconds((prev) => prev + 1);
    }, 10);

    if (milliSeconds >= 100) {
      setMilliSeconds(0);
      setSeconds((prev) => prev + 1);
    }

    if (seconds >= 60) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }

    if (minutes >= 60) {
      setMinutes(0);
      setHours((prev) => prev + 1);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, milliSeconds, minutes, seconds]);

  const reset = () => {
    if (!isPaused) return;
    setMilliSeconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-10 items-center bg-background-300 backdrop-blur-lg p-4 rounded-lg">
      <h1 className="challenge-heading">Stop Watch</h1>
      <div className="text-5xl sm:text-6xl md:text-8xl font-bold">
        <span>{hours > 9 ? hours : `0${hours}`}</span>
        <span>:{minutes > 9 ? minutes : `0${minutes}`}</span>
        <span>:{seconds > 9 ? seconds : `0${seconds}`}</span>
        <span>:{milliSeconds > 9 ? milliSeconds : `0${milliSeconds}`}</span>
      </div>
      <div className="flex items-center gap-10">
        <button
          onClick={reset}
          title="Reset"
          disabled={!isPaused}
          className="text-4xl disabled:text-gray-500"
        >
          <GrPowerReset />
        </button>
        <button
          title={isPaused ? "Play" : "Pause"}
          onClick={() => setIsPaused(!isPaused)}
          className="text-3xl bg-primary-500 text-white p-3 rounded-full"
        >
          {isPaused ? <FaPlay /> : <FaPause />}
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
