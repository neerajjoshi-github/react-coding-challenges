import { useEffect, useState } from "react";
import Tomato from "../assets/pomodoro/tomato.svg";

const PomodoroTimer = () => {
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [started, setStarted] = useState(false);
  return (
    <>
      {!started ? (
        <div className="relative">
          <img src={Tomato} alt="" className="w-[40rem] h-[40rem] -z-[1]" />
          <div className="absolute max-md:-translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-10 items-center">
            <div className="flex max-md:flex-col max-md:gap-1 gap-10">
              <div className="flex flex-col gap-1 items-center">
                <label
                  className="text-white text-4xl font-bold mb-3"
                  htmlFor="workMinutes"
                >
                  Pomodoro
                </label>

                <input
                  className="focus-visible:outline-none text-lg text-center py-1 px-2 rounded-md text-black"
                  type="text"
                  id="workMinutes"
                  value={workMinutes}
                  onChange={(e) =>
                    setWorkMinutes(parseInt(e.target.value) || 0)
                  }
                />
                <span className="text-zinc-100 text-lg">minutes</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <label
                  className="text-white text-4xl font-bold mb-3"
                  htmlFor="breakMinutes"
                >
                  Break
                </label>
                <input
                  className="text-black focus-visible:outline-none text-lg text-center py-1 px-2 rounded-md"
                  type="text"
                  id="breakMinutes"
                  value={breakMinutes}
                  onChange={(e) =>
                    setBreakMinutes(parseInt(e.target.value) || 0)
                  }
                />
                <span className="text-zinc-100 text-lg">minutes</span>
              </div>
            </div>
            <button
              onClick={() => setStarted(true)}
              disabled={!workMinutes || !breakMinutes}
              className="disabled:bg-white/80 py-2 px-8 rounded-md bg-white text-[#e93a68] font-bold text-lg"
            >
              Start
            </button>
          </div>
        </div>
      ) : (
        <Timer workMinutes={workMinutes} breakMinutes={breakMinutes} />
      )}
    </>
  );
};

export default PomodoroTimer;

type TimerProps = {
  workMinutes: number;
  breakMinutes: number;
};

const Timer: React.FC<TimerProps> = ({ workMinutes, breakMinutes }) => {
  const [minutes, setMinutes] = useState(workMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [count, setCount] = useState(-1);

  // For svg
  const size = 350;
  const radius = (size - 35) / 2;
  const circumference = 2 * Math.PI * radius;
  const removedPart = circumference * (seconds / 60);

  useEffect(() => {
    if (isPaused) return;

    if (seconds < 0) {
      setSeconds(59);
      setMinutes((prev) => prev - 1);
      setReverse(!reverse);
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 100);

    if (minutes <= 0 && seconds <= 0) {
      setMinutes(isBreakTime ? workMinutes : breakMinutes);
      setSeconds(0);
      setIsBreakTime(!isBreakTime);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    minutes,
    seconds,
    breakMinutes,
    workMinutes,
    isBreakTime,
    isPaused,
    reverse,
  ]);

  useEffect(() => {
    if (!isBreakTime) {
      setCount((prev) => prev + 1);
    }
  }, [isBreakTime]);
  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className={`
      ${
        isBreakTime ? "bg-[#38858a]" : "bg-[#e93a68]"
      } fixed inset-0 -z-[1] transition duration-500`}
      ></div>
      <div className="flex flex-col items-center gap-4 bg-white/20 py-4 px-1 sm:px-5 md:px-10 rounded-md">
        <div className="relative">
          <svg width={size} height={size} className="relative z-[1]">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              strokeDasharray={
                reverse
                  ? `${circumference - removedPart} ${removedPart}`
                  : `${removedPart} ${circumference - removedPart}`
              }
              strokeDashoffset={reverse ? circumference - removedPart : 0}
              strokeLinecap="round"
              className="stroke-white fill-transparent stroke-[25]"
            />
          </svg>
          <svg width={size} height={size} className="absolute inset-0 z-[0]">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              strokeLinecap="round"
              className={`${
                isBreakTime ? "stroke-[#38858a]" : "stroke-[#e93a68]"
              } fill-transparent stroke-[25]`}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold">
            <span>{minutes > 9 ? minutes : `0${minutes}`}</span>
            <span>:{seconds > 9 ? seconds : `0${seconds}`}</span>
          </div>
        </div>
        <div>
          <button
            className={`${
              isBreakTime ? "text-[#38858a]" : "text-[#e93a68]"
            } w-24 text-lg uppercase py-2 rounded-md font-bold bg-white`}
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? "Start" : "Pause"}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xl text-zinc-100"># {count}</span>
        <span className="text-lg text-white">
          {isBreakTime ? "Time for a break!" : "Time to focus!"}
        </span>
      </div>
    </div>
  );
};
