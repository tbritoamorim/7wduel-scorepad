import React, { useState, useRef, useEffect } from 'react';
import TableRow from '../TableRow';
import './scorepad.scss';


export default function Scorepad(props) {
  const [points, setPoints] = useState({
    'P1': {'blue': 0},
    'P2': {'blue': 0}
  });
  const refPoints = useRef(points);
  const [total, setTotal] = useState({
    'P1': 0,
    'P2': 0
  });

  const handleSetPoints = (color, newPoints, player, resetSenate) => {
      if(!resetSenate) {
        let playerPoints = {[`${player}`]: {...points[`${player}`], [`${color}`]: newPoints}};
        let playerTotalInt = Object.values(playerPoints[`${player}`]).reduce((a, b) =>  a + b );
        let playerTotal = {[`${player}`]: playerTotalInt};
        setPoints(prevState => {
          return {...prevState, ...playerPoints}
        });
        refPoints.current = points;
        setTotal(prevState => {
          return {...prevState, ...playerTotal}
        });
      } else if(resetSenate) {
        console.log(refPoints.current);

        let playerPoints = {[`${player}`]: {...refPoints.current[`${player}`], [`${color}`]: newPoints}};
        let playerTotalInt = Object.values(playerPoints[`${player}`]).reduce((a, b) =>  a + b );
        let playerTotal = {[`${player}`]: playerTotalInt};
        setPoints(() => {
          console.log({...refPoints.current, ...playerPoints});

          return {...refPoints.current, ...playerPoints}
        });
        setTotal(prevState => {
          return {...prevState, ...playerTotal}
        });
      }
  }

  useEffect(() => {
    const handleSenatePoints = () => {
      handleSetPoints('senate', 0, "P1", true);
      handleSetPoints('senate', 0, "P2", true);
    }
    if (props.hasAgora) {
      return () => handleSenatePoints();
    }

    const handlePanteaoPoints = () => {
      handleSetPoints('grand-temple', 0, "P1");
      handleSetPoints('deities', 0, "P1");
      handleSetPoints('grand-temple', 0, "P2");
      handleSetPoints('deities', 0, "P2");
    }

    if (props.hasPanteao) {
      return () => handlePanteaoPoints();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.hasAgora, props.hasPanteao])


    return (
      <div className="scorepad-container d-flex justify-center">
        <table>
          <thead>
            <tr>
              <th className="d-flex justify-center cards-row"></th>
              <th><input type='text' placeholder='nome'></input></th>
              <th><input type='text' placeholder='nome'></input></th>
            </tr>
          </thead>
          <tbody>
            <TableRow color="blue" icon="BlueCard" sumF={handleSetPoints} />
            <TableRow color="green" icon="GreenCard" sumF={handleSetPoints} />
            <TableRow color="yellow" icon="YellowCard" sumF={handleSetPoints}/>
            {props.hasPanteao 
            ? (
              <React.Fragment> 
                <TableRow color="grand-temple" icon="GrandTemple" sumF={handleSetPoints}/> 
                <TableRow color="deities" icon="Deities" sumF={handleSetPoints}/>
              </React.Fragment>
              )
            : <TableRow color="purple" icon="PurpleCard" sumF={handleSetPoints}/>}
            <TableRow color="pyramid" icon="Pyramid" sumF={handleSetPoints}/>
            <TableRow color="science" icon="Science" sumF={handleSetPoints}/>
            <TableRow color="coins" icon="Coins" sumF={handleSetPoints}/>
            <TableRow color="military" icon="Military" sumF={handleSetPoints}/>
            {props.hasAgora ? <TableRow color="senate" icon="Senate" sumF={handleSetPoints}/> : null}
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