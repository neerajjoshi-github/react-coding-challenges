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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="hex_gusser_game" element={<HexGuesserGame />} />
      <Route path="points" element={<MakePoints />} />
      <Route path="card_memory_game" element={<CardMemoryGame />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
