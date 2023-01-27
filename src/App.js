import "./App.css"
import PL from "./leagues/PL"
import SerieA from "./leagues/SerieA"
import Bundesliga from "./leagues/Bundesliga"
import Laliga from "./leagues/Laliga"
import Ligue1 from "./leagues/Ligue1"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"

function App() {
  return (
    <div className="App">
      <h3>Choose a league to view:</h3>
      <Home />
      <Routes>
        <Route path="/pl" element={<PL />} />
        <Route path="/bundesliga" element={<Bundesliga />} />
        <Route path="/laliga" element={<Laliga />} />
        <Route path="/ligue-1" element={<Ligue1 />} />
        <Route path="/serie-a" element={<SerieA />} />
      </Routes>
    </div>
  )
}

export default App
