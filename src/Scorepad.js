import React, { useState } from 'react';
/*import { ReactComponent as BlueCard} from "./icons/blue-cards.svg";
import greenCard from "./icons/green-cards.svg";
import yellowCard from "./icons/yellow-cards.svg";
import purpleCard from "./icons/purple-cards.svg";*/
import './scorepad.scss';
import TableRow from './TableRow';


export default function Scorepad() {
    return (
      <div className="scorepad-container d-flex justify-center">
        <table>
          <thead>
            <tr>
              <th>Categoria</th>
              <th><input type='text' placeholder='nome'></input></th>
              <th><input type='text' placeholder='nome'></input></th>
            </tr>
          </thead>
          <tbody>
            <TableRow color="blue" icon="BlueCard" />
            <TableRow color="green" icon="GreenCard" />
            <TableRow color="yellow" icon="YellowCard" />
            <TableRow color="purple" icon="PurpleCard" />
            <TableRow color="pyramid" icon="Pyramid" />
            <TableRow color="science" icon="Science" />
            <TableRow color="coins" icon="Coins" />
            <TableRow color="military" icon="Military" />
          </tbody>
        </table>
      </div>
    )
}