import React, { useState, useEffect } from 'react';
/*import { ReactComponent as BlueCard} from "./icons/blue-cards.svg";
import greenCard from "./icons/green-cards.svg";
import yellowCard from "./icons/yellow-cards.svg";
import purpleCard from "./icons/purple-cards.svg";*/
import './scorepad.scss';
import TableRow from './TableRow';


export default function Scorepad() {
  const [points, setPoints] = useState(0);
  const [pointsBlue, setPointsBlue] = useState(0);


  const handleSetPointsBlue = newPoints => {
    setPointsBlue(newPoints);
    console.log(points);
  }

  useEffect(() => {
    setPoints(points + pointsBlue);
  }, [pointsBlue])

    return (
      <div className="scorepad-container d-flex justify-center">
        <table>
          <thead>
            <tr>
              <th>A</th>
              <th><input type='text' placeholder='nome'></input></th>
              <th><input type='text' placeholder='nome'></input></th>
            </tr>
          </thead>
          <tbody>
            <TableRow color="blue" icon="BlueCard" sum={points} sumF={handleSetPointsBlue} />
            <TableRow color="green" icon="GreenCard" sum={points} sumF={handleSetPointsBlue} />
            <TableRow color="yellow" icon="YellowCard" />
            <TableRow color="purple" icon="PurpleCard" />
            <TableRow color="pyramid" icon="Pyramid" />
            <TableRow color="science" icon="Science" />
            <TableRow color="coins" icon="Coins" />
            <TableRow color="military" icon="Military" />
            <tr>
              <td className="sigma">Σ</td>
              <td><span id="result1" className="sigma">{points}</span></td>
              <td><span id="result2" className="sigma">0</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}