import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { Header } from "./components/Header";
import { SetupPlayers } from "./pages/SetupPlayers";
import { SetupScoring } from "./pages/SetupScoring";
import { PlayGame } from "./pages/PlayGame";
import { GameResults } from "./pages/GameResults";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/setupplayers" element={<SetupPlayers />} />
          <Route path="/setupscoring" element={<SetupScoring />} />
          <Route path="/playgame" element={<PlayGame />} />
          <Route path="/gameresults" element={<GameResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
