import { Outlet } from "react-router-dom";
import Background from "./components/Background";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <ThemeProvider>
        <Navbar />
        <Outlet />
      </ThemeProvider>
      <Background />
    </div>
  );
};

export default App;
