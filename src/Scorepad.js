import React, { useState } from 'react';
/*import { ReactComponent as BlueCard} from "./icons/blue-cards.svg";
import greenCard from "./icons/green-cards.svg";
import yellowCard from "./icons/yellow-cards.svg";
import purpleCard from "./icons/purple-cards.svg";*/
import './scorepad.scss';
import TableRow from './TableRow';


export default function Scorepad() {
  const [pointsP1, setPointsP1] = useState({
    'blue': 0,
  });
  const [totalP1, setTotalP1] = useState(0);
  const [pointsP2, setPointsP2] = useState({
    'blue': 0,
  });
  const [totalP2, setTotalP2] = useState(0);


  const handleSetPoints = (color, newPoints, player) => {
    if(player === "P1") {
      setPointsP1(Object.assign(pointsP1, {[`${color}`]: newPoints}));
      setTotalP1(Object.values(pointsP1).reduce((a, b) =>  a + b ));
    } else {
      setPointsP2(Object.assign(pointsP2, {[`${color}`]: newPoints}));
      setTotalP2(Object.values(pointsP2).reduce((a, b) =>  a + b ));
    }
  }

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
            <TableRow color="blue" icon="BlueCard" sumF={handleSetPoints} />
            <TableRow color="green" icon="GreenCard" sumF={handleSetPoints} />
            <TableRow color="yellow" icon="YellowCard" sumF={handleSetPoints}/>
            <TableRow color="purple" icon="PurpleCard" sumF={handleSetPoints}/>
            <TableRow color="pyramid" icon="Pyramid" sumF={handleSetPoints}/>
            <TableRow color="science" icon="Science" sumF={handleSetPoints}/>
            <TableRow color="coins" icon="Coins" sumF={handleSetPoints}/>
            <TableRow color="military" icon="Military" sumF={handleSetPoints}/>
            <tr>
              <td className="sigma">Σ</td>
              <td><span id="result1" className="sigma">{totalP1}</span></td>
              <td><span id="result2" className="sigma">{totalP2}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}