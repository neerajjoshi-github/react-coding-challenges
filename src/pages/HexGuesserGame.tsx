import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const alphabet: Record<number, string> = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

const numOfOptions = 4;

const generateRandomHex = () => {
  let res = "#";
  for (let i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random() * 255);
    const first = Math.floor(randomNum / 16);
    const second = randomNum - first * 16;

    res +=
      `${alphabet[first] ? alphabet[first] : first}` +
      `${alphabet[second] ? alphabet[second] : second}`;
  }

  return res;
};

const HexGuesserGame = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [choosenColor, setChoosenColor] = useState("");
  const [won, setWon] = useState(false);
  const [streak, setStreak] = useState(0);
  const [userSelectedColor, setUserSelectedColor] = useState<string | null>(
    null
  );

  const setNewOptions = () => {
    const options = Array.from({ length: numOfOptions }, generateRandomHex);
    setChoosenColor(options[Math.floor(Math.random() * numOfOptions)]);
    setOptions(options);
    setUserSelectedColor(null);
  };

  useEffect(() => {
    setNewOptions();
  }, []);

  const onColorButtonClick = (selectedColor: string) => {
    if (selectedColor === choosenColor) {
      setWon(true);
      setStreak(streak + 1);
    } else {
      setWon(false);
      setStreak(0);
    }
    setUserSelectedColor(selectedColor);
  };

  return (
    <div className="max-sm:w-full flex flex-col gap-5 items-center">
      <h1 className="text-4xl sm:text-5xl font-bold">Hex Guesser Game</h1>
      <div className="font-semibold w-full flex items-center justify-between">
        <span>Streak : {streak}</span>
        {userSelectedColor && (
          <span
            className={`${
              won ? "text-green-600" : "text-red-600"
            } font-semibold`}
          >
            {won ? "Correct!!" : "Wrong!!"}
          </span>
        )}
      </div>
      <div
        className="w-full h-44 sm:w-[30rem] sm:h-[20rem] rounded-md bg-blue-400"
        style={{
          background: choosenColor,
        }}
      />
      <div className="flex flex-wrap items-center justify-center gap-3">
        {options.map((option) => {
          return (
            <button
              key={option}
              onClick={() => onColorButtonClick(option)}
              style={{
                background: userSelectedColor ? option : "transparent",
                color: userSelectedColor ? "white" : "",
                borderColor: userSelectedColor ? "white" : "",
              }}
              disabled={!!userSelectedColor}
              className="disabled:cursor-not-allowed border border-slate-500 px-4 py-2 rounded-md font-semibold"
            >
              {option}
            </button>
          );
        })}
      </div>

      <button
        onClick={setNewOptions}
        className="px-6 py-2 border flex items-center gap-2 border-zinc-300 bg-black text-white rounded-md font-semibold"
      >
        <span>{userSelectedColor ? "Next" : "Skip"}</span>{" "}
        <FaLongArrowAltRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HexGuesserGame;
