import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ScoringPage } from "./pages/ScoringPage";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/scoring" element={<ScoringPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
