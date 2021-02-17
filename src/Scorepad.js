import React, { useState } from 'react';
import { ReactComponent as BlueCard} from "./icons/blue-cards.svg";
import greenCard from "./icons/green-cards.svg";
import yellowCard from "./icons/yellow-cards.svg";
import purpleCard from "./icons/purple-cards.svg";
import './scorepad.scss';


export default function Scorepad() {
    return (
      <div className="scorepad-container">
        <table>
          <thead>
            <tr>
              <th>Categoria</th>
              <th><input type='text' placeholder='nome'></input></th>
              <th><input type='text' placeholder='nome'></input></th>
            </tr>
          </thead>
          <tbody>
            <tr className="blue-cards">
              <td className="d-flex justify-center cards-row">
                <BlueCard />
              </td>
              <td>
                <input type="number"></input>
              </td>
              <td>
                <input type="number"></input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}