import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="z-[10] w-full fixed top-0 left-0 h-10 backdrop-blur-sm border-b-2 border-primary-500 flex items-center justify-between px-2 md:px-8">
      <Link to="/">
        <p className="font-bold font-mochiy bg-gradient-to-br from-primary-600 to-accent-600 bg-clip-text text-transparent">
          React Coding Challenges
        </p>
      </Link>

      <div className="flex items-center gap-6">
        <button onClick={toggleTheme} className="text-lg">
          {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </button>
        <Link to="https://github.com/neerajjoshi-github">
          <FaGithub className="text-2xl" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
