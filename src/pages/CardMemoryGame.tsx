import { useState } from "react";
import { FaBolt } from "react-icons/fa6";

const options = [
  { title: "4 Cards", value: "2x2" },
  { title: "6 Cards", value: "2x3" },
  { title: "12 Cards", value: "3x4" },
  { title: "16 Cards", value: "4x4" },
  { title: "20 Cards", value: "4x5" },
  { title: "24 Cards", value: "4x6" },
  { title: "30 Cards", value: "5x6" },
  { title: "36 Cards", value: "6x6" },
  { title: "42 Cards", value: "6x7" },
  { title: "48 Cards", value: "6x8" },
];

const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Card = {
  id: string;
  value: string;
  shown: boolean;
  removed: boolean;
};

type Dimensions = {
  row: number;
  col: number;
};

const generateRandomCharsArray = (dimensions: Dimensions): Card[] => {
  let pool: string = alpha
    .slice(0, (dimensions.row * dimensions.col) / 2)
    .repeat(2);
  const resArr: Card[] = [];

  while (pool.length) {
    const random = Math.floor(Math.random() * pool.length);
    const card = {
      id: crypto.randomUUID(),
      value: pool[random],
      shown: false,
      removed: false,
    };
    resArr.push(card);
    pool = pool.slice(0, random) + pool.slice(random + 1);
  }

  return resArr;
};

const CardMemoryGame = () => {
  const initialDimensions: Dimensions = {
    row: 2,
    col: 2,
  };
  const [cards, setCards] = useState<Card[]>(
    generateRandomCharsArray(initialDimensions)
  );
  const [openCards, setOpenCards] = useState(0);
  const [prevOpenCard, setPrevOpenCard] = useState<Card | null>(null);
  const [movesCount, setMovesCount] = useState(0);
  const [dimensions, setDimensions] = useState(initialDimensions);
  const [removedCard, setRemovedCards] = useState(0);

  const onCardClick = (selectedCard: Card) => {
    if (openCards === 2 || selectedCard.id === prevOpenCard?.id) return;

    if (prevOpenCard) {
      setTimeout(() => {
        let newCards: Card[] = [];
        if (prevOpenCard.value === selectedCard.value) {
          newCards = cards.map((card) =>
            card.value === selectedCard.value
              ? { ...card, removed: true }
              : card
          );
          setRemovedCards(removedCard + 2);
        } else {
          newCards = cards.map((card) => {
            return { ...card, shown: false };
          });
        }
        setCards(newCards);
        setPrevOpenCard(null);
        setOpenCards(0);
        setMovesCount(movesCount + 1);
      }, 1000);
    }

    const newCards = cards.map((card) => {
      return card.id === selectedCard.id ? { ...card, shown: true } : card;
    });
    setCards(newCards);
    setPrevOpenCard(selectedCard);
    setOpenCards(openCards + 1);
  };

  const onOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const arr = e.target.value.split("x");
    const dimensions = {
      row: Number(arr[0]),
      col: Number(arr[1]),
    };
    setDimensions(dimensions);
    handleReset(dimensions);
  };

  const handleReset = (dim?: Dimensions) => {
    setCards(generateRandomCharsArray(dim ? dim : dimensions));
    setPrevOpenCard(null);
    setMovesCount(0);
    setRemovedCards(0);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full h-screen py-4">
      <h1 className="text-5xl font-semibold text-center">Memory Game</h1>
      <div className="flex w-full items-center justify-between sm:px-2 md:px-10">
        <select
          className="w-36 h-10 text-lg font-semibold px-2 text-center border-2 border-primary-600"
          onChange={onOptionChange}
        >
          {options.map((opt) => {
            return (
              <option key={opt.title} value={opt.value}>
                {opt.title}
              </option>
            );
          })}
        </select>
        <p className="flex items-center gap-1">
          <span className="text-lg">Moves Count :</span>
          <span className="text-xl font-semibold">{movesCount}</span>
        </p>
      </div>
      {cards.length !== removedCard ? (
        <div
          className="grid w-full flex-1"
          style={{
            gridTemplateColumns: `repeat(${dimensions.col}, 1fr)`,
            gridTemplateRows: `repeat(${dimensions.row}, 1fr)`,
          }}
        >
          {cards.map((card) => {
            return (
              <button
                key={card.id}
                onClick={() => onCardClick(card)}
                disabled={card.removed}
                className={`${!card.shown ? "flipped" : ""}
         card transition duration-500 w-full h-full max-w-40 max-h-60 self-center place-self-center justify-self-center disabled:cursor-default disabled:border-none select-none border text-base sm:text-3xl md:text-4xl flex items-center justify-center
              `}
              >
                {!card.removed && (
                  <div className="card-inner w-full h-full transition duration-500">
                    <div className="card-front absolute w-full h-full flex items-center justify-center bg-purple-200">
                      <span>
                        {card.shown && !card.removed ? card.value : ""}
                      </span>
                    </div>
                    <div className="card-back absolute w-full h-full bg-primary-400 flex items-center justify-center">
                      <FaBolt className="text-white text-3xl sm:text-4xl" />
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 items-center">
          <p className="text-lg text-center">
            Congratulations!!! You won the game in{" "}
            <span className="text-primary-500 text-xl font-semibold">
              {movesCount}
            </span>{" "}
            moves.
          </p>
          <button
            onClick={() => handleReset()}
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default CardMemoryGame;
