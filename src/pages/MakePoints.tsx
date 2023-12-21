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
    <div className="w-full h-auto">
      <div className="flex items-center gap-4 mb-4">
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

        <div className="ml-auto font-semibold flex items-center gap-2">
          Points On Screen :{" "}
          <span className="text-lg">{points.slice(0, endingIndex).length}</span>
        </div>
      </div>
      <div
        onClick={onClickHandler}
        className="w-full h-[80vh] border border-slate-800"
      >
        {points.slice(0, endingIndex).map((point) => {
          return (
            <div
              style={{
                top: point.y,
                left: point.x,
              }}
              key={point.id}
              className="fixed w-1 h-1 rounded-full bg-primary-600"
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default MakePoints;
