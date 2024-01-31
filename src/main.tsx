import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HexGuesserGame from "./pages/HexGuesserGame.tsx";
import MakePoints from "./pages/MakePoints.tsx";
import CardMemoryGame from "./pages/CardMemoryGame.tsx";
import TextAnalyzer from "./pages/TextAnalyzer.tsx";
import StopWatch from "./pages/StopWatch.tsx";
import PomodoroTimer from "./pages/PomodoroTimer.tsx";
import Clock from "./pages/Clock.tsx";
import Home from "./pages/Home.tsx";
import BreakingBad from "./pages/BreakingBad.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="hex_gusser_game" element={<HexGuesserGame />} />
      <Route path="make_points" element={<MakePoints />} />
      <Route path="card_memory_game" element={<CardMemoryGame />} />
      <Route path="text_analyzer" element={<TextAnalyzer />} />
      <Route path="stopwatch" element={<StopWatch />} />
      <Route path="pomodoro_timer" element={<PomodoroTimer />} />
      <Route path="clock" element={<Clock />} />
      <Route path="breaking_bad" element={<BreakingBad />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
