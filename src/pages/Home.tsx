import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const paths = [
  {
    link: "hex_gusser_game",
    title: "Hex Gusser Game",
    image: "hex-guesser",
  },
  { link: "make_points", title: "Make Points", image: "make-points" },
  {
    link: "card_memory_game",
    title: "Card Memory Game",
    image: "memory-card-game",
  },
  { link: "text_analyzer", title: "Text Analyzer", image: "text-analyzer" },
  { link: "stopwatch", title: "Stopwatch", image: "stopwatch" },
  { link: "clock", title: "Clock", image: "clock" },
  {
    link: "pomodoro_timer",
    title: "Pomodoro Timer",
    image: "pomodoro",
  },
  { link: "breaking_bad", title: "Breaking Bad", image: "breaking-bad" },
];

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-2 gap-4 px-2 sm:px-4 py-14">
      {paths.map((path) => {
        return (
          <Link
            key={path.link}
            to={path.link}
            className="flex flex-col items-center gap-4 w-full bg-gradient-to-b from-background-200 to-accent-300 max-w-[580px] p-4 rounded-lg"
          >
            <div className="w-full border-2 border-background-500 rounded-lg p-1">
              <img
                src={`/images/home/${path.image}-${theme}.png`}
                alt={path.title}
                className="w-full object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl text-center text-secondary-700 font-black font-rubik-doodle">
              {path.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
