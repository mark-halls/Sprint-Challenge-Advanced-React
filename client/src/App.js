import React, { useEffect } from "react";

import PlayerList from "./components/PlayerList";
import Nav from "./components/Nav";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { useDarkMode } from "./hooks/useDarkMode";

import "./App.css";

function App() {
  const [playerData, setPlayerData] = useLocalStorage("playerData", []);
  const [darkMode, setDarkMode] = useDarkMode(true);

  useEffect(() => {
    document.querySelector(".App").classList.toggle("dark");
  }, [darkMode]);

  const updateDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="App">
      <Nav toggleDark={updateDarkMode} />
      <PlayerList playerData={playerData} setPlayerData={setPlayerData} />
    </div>
  );
}

export default App;
