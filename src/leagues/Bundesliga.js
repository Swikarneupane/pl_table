import axios from "axios"
import { useState, useEffect } from "react"

export default function PL() {
  const [plData, setPlData] = useState([])
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://standings.vercel.app/api/bundesliga-table`
    )
    setPlData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="table-tot">
      <h3>English Premier League Table</h3>
      <table>
        <tr className="table-head">
          <td>Rank</td>
          <td>Team</td>
          <td>Matches</td>
          <td>Won</td>
          <td>Drawn</td>
          <td>Lost</td>
          <td>Goal Scored</td>
          <td>Goal Against</td>
          <td>Goal Difference</td>
          <td>Points</td>
        </tr>
        {plData.map((item) => (
          <tr key={item.rank}>
            <td>{item.rank}</td>
            <td>{item.name}</td>
            <td>{item.matchPlayed}</td>
            <td>{item.win}</td>
            <td>{item.draw}</td>
            <td>{item.lost}</td>
            <td>{item.gf}</td>
            <td>{item.ga}</td>
            <td>{item.gd}</td>
            <td>{item.points}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
