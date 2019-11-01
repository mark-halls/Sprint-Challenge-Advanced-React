import React from "react";

import PlayerList from "./components/PlayerList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [playerData, setPlayerData] = useLocalStorage("playerData", []);

  return (
    <div className="App">
      <PlayerList playerData={playerData} setPlayerData={setPlayerData} />
    </div>
  );
}

export default App;
