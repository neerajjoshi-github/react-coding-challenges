import { useState } from "react";

type Point = {
  x: number;
  y: number;
  id: string;
};

const MakePoints = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [endingIndex, setEndingIndex] = useState(0);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const currPoint = { x: e.clientX, y: e.clientY, id: crypto.randomUUID() };
    if (endingIndex === 0) {
      setPoints([currPoint]);
    } else {
      setPoints((prev) => [...prev, currPoint]);
    }
    setEndingIndex((prev) => prev + 1);
  };

  const prevClickHandler = () => {
    if (endingIndex === 0) return;
    setEndingIndex(endingIndex - 1);
  };

  const nextClickHandler = () => {
    if (endingIndex === points.length) return;
    setEndingIndex(endingIndex + 1);
  };
  return (
    <div className="w-full h-screen px-2 md:px-4 pt-10 pb-4 flex flex-col">
      <h3 className="challenge-heading md:hidden text-center">Make Points</h3>
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-4">
          <button
            disabled={endingIndex === 0}
            onClick={prevClickHandler}
            className="disabled:cursor-not-allowed disabled:bg-primary-400 py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md"
          >
            Undo
          </button>
          <button
            disabled={endingIndex === points.length}
            onClick={nextClickHandler}
            className="disabled:cursor-not-allowed disabled:bg-primary-400 py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md"
          >
            Redo
          </button>
        </div>

        <h3 className="challenge-heading max-md:hidden">Make Points</h3>

        <div className="font-semibold flex items-center gap-2">
          Points On Screen :{" "}
          <span className="text-lg">{points.slice(0, endingIndex).length}</span>
        </div>
      </div>
      <div
        onClick={onClickHandler}
        className="w-full flex-1 border-2 border-primary-500 rounded-md"
      >
        {points.slice(0, endingIndex).map((point) => {
          return (
            <div
              style={{
                top: point.y,
                left: point.x,
              }}
              key={point.id}
              className="fixed w-[5px] h-[5px] rounded-full bg-accent-500"
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default MakePoints;
