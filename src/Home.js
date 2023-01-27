import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="button-wrapper">
      <Link to="/pl">
        <button>Premier League</button>
      </Link>
      <Link to="/bundesliga">
        <button>Bundesliga</button>
      </Link>
      <Link to="/laliga">
        <button>Laliga</button>
      </Link>
      <Link to="/ligue-1">
        <button>Ligue 1</button>
      </Link>
      <Link to="/serie-a">
        <button>Serie A</button>
      </Link>
    </div>
  )
}
