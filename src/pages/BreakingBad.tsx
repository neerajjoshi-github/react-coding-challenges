import { Fragment, useEffect, useState } from "react";
import { periodicElements } from "../../data/periodicElemets";

type Element = {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicWeight: number;
};

type Result = {
  text: string;
  element: Element | null;
};

const BreakingBad = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [inputValue, setInputValue] = useState("Breaking Bad");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getElementText = () => {
      const splitedText = inputValue.split(" ");
      const results = splitedText.map((text) => {
        for (let i = text.length; i > 0; i--) {
          for (let j = 0; j < periodicElements.length; j++) {
            if (text.slice(0, i) === periodicElements[j].symbol) {
              return {
                text: text.replace(periodicElements[j].symbol, ""),
                element: { ...periodicElements[j] },
              };
            }
          }
        }
        return {
          text,
          element: null,
        };
      });

      setResults(results);
    };
    getElementText();
  }, [inputValue]);

  return (
    <main className="h-screen w-screen overflow-hidden p-2 bg-[url('/images/breaking-bad/breaking-bad-bg.jpg')] bg-no-repeat bg-cover flex flex-col  gap-12 items-center justify-center">
      <div className="relative min-h-[70vh] flex flex-col gap-10 items-center justify-center backdrop-blur-sm p-2 sm:p-6 md:p-8 border-2 border-white">
        <div className="flex flex-col items-center gap-6  font-semibold text-white">
          {results.map((result, index) => {
            return (
              <Fragment key={index}>
                {result.element ? (
                  <span className="flex items-center gap-1 text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-test font-semibold">
                    <span className="relative flex items-center justify-center py-6 px-4 bg-element-gradient border-2 border-white">
                      {result.element.symbol}
                      <span className="absolute top-0 left-1 text-sm">
                        {result.element.atomicWeight}
                      </span>
                      <span className="absolute right-1 top-0 text-xs font-medium">
                        {result.element.name}
                      </span>
                      <span className="absolute bottom-0 left-1 text-base">
                        {result.element.atomicNumber}
                      </span>
                    </span>
                    <span>{result.text}</span>
                  </span>
                ) : (
                  <span className="text-5xl md:text-8xl">{result.text}</span>
                )}
              </Fragment>
            );
          })}
        </div>

        <input
          onChange={onChangeHandler}
          className="text-center bg-black/50 text-2xl font-medium p-2 rounded-sm border border-white text-white focus-visible:outline-none"
          type="text"
          value={inputValue}
          placeholder="enter text....."
        />
        <span className="absolute right-1 bottom-1 text-white">
          *case sensitive
        </span>
      </div>
    </main>
  );
};

export default BreakingBad;
