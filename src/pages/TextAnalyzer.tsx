import { useState } from "react";
import { pronouns } from "../../data/pronouns";

const TextAnalyzer = () => {
  const [charsLen, setCharsLen] = useState(0);
  const [wordsLen, setWordsLen] = useState(0);
  const [pronounsCount, setPrononusCount] = useState(0);
  const [paragraphsCount, setParagraphsCount] = useState(0);
  const [longestWord, setLongestWord] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.split(" ").filter((item) => item !== "");
    const paras = text.split("\n").filter((item) => item !== "");
    let longestWord = "";
    let numberOfPronouns = 0;
    for (const word of words) {
      if (pronouns.has(word.toLowerCase())) {
        numberOfPronouns++;
      }
      if (longestWord.length < word.length) {
        longestWord = word;
      }
    }

    setCharsLen(text.length);
    setWordsLen(words.length);
    setParagraphsCount(paras.length);
    setPrononusCount(numberOfPronouns);
    setLongestWord(longestWord);
  };
  return (
    <div className="w-full h-screen max-w-[1080px] max-h-[520px]  flex flex-col gap-4 px-2 md:px-4">
      <h1 className="challenge-heading">Text Analyzer</h1>
      <div className="flex items-center justify-around p-2 bg-background-100 rounded-lg">
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm sm:text-base md:text-lg text-text-800 font-semibold">
            Words
          </span>
          <span className="text-base sm:text-xl">{wordsLen}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm sm:text-base md:text-lg text-text-800 font-semibold">
            Characters
          </span>
          <span className="text-base sm:text-xl">{charsLen}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-sm sm:text-base md:text-lg text-text-800 font-semibold">
            Paragraphs
          </span>
          <span className="text-base sm:text-xl">{paragraphsCount}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm sm:text-base md:text-lg text-text-800 font-semibold">
            Pronouns
          </span>
          <span className="text-base sm:text-xl">{pronounsCount}</span>
        </div>
      </div>

      <div className="p-4 bg-background-100 rounded-lg w-full h-full">
        <textarea
          onChange={onChangeHandler}
          placeholder="Enter text....."
          className="bg-transparent w-full h-full focus-visible:outline-none text-lg resize-none"
        ></textarea>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm sm:text-base md:text-lg text-text-700 font-semibold">
          Longest Word :
        </span>
        <span className="text-base sm:text-xl">{longestWord}</span>
      </div>
    </div>
  );
};

export default TextAnalyzer;
