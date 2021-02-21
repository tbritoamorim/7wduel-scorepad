import React, { useState } from 'react';
import TableRow from './TableRow';
import './scorepad.scss';


export default function Scorepad() {
  const [points, setPoints] = useState({
    'P1': {'blue': 0},
    'P2': {'blue': 0}
  });
  const [total, setTotal] = useState({
    'P1': 0,
    'P2': 0
  });

  const handleSetPoints = (color, newPoints, player) => {
      let playerPoints = {[`${player}`]: {...points[`${player}`], [`${color}`]: newPoints}};
      let playerTotalInt = Object.values(playerPoints[`${player}`]).reduce((a, b) =>  a + b );
      let playerTotal = {[`${player}`]: playerTotalInt};
      setPoints(prevState => {
        return {...prevState, ...playerPoints}
      });
      setTotal(prevState => {
        return {...prevState, ...playerTotal}
      });
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
              <td><span id="result1" className="sigma">{total.P1}</span></td>
              <td><span id="result2" className="sigma">{total.P2}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}