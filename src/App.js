import "./App.css"
import PL from "./leagues/PL"
import SerieA from "./leagues/SerieA"
import Bundesliga from "./leagues/Bundesliga"
import Laliga from "./leagues/Laliga"
import Ligue1 from "./leagues/Ligue1"

function App() {
  function toPl() {
    <PL />
  }
  function toSerieA() {
    <SerieA />
  }
  function toBundesliga() {
    <Bundesliga />
  }
  function toLaliga() {
    <Laliga />
  }
  function toLigue1() {
    <Ligue1 />
  }
  return (
    <div className="App">
      <h3>Choose a league to view:</h3>
      <div className="button-wrapper">
        <button onClick={toPl}>Premier League</button>
        <button onClick={toSerieA}>Serie A</button>
        <button onClick={toBundesliga}>Bundesliga</button>
        <button onClick={toLaliga}>La Liga</button>
        <button onClick={toLigue1}>Ligue 1</button>
      </div>
    </div>
  )
}

export default App
