import { React, useState} from 'react';
import Icon from './icon';
import Sum from './sum';

export default function TableRow(props) {
    const changed = e => {
        console.log(e.target.value);
        props.sumF(e.target.value != '' ? parseInt(e.target.value) : 0);
    }

    return (
        <tr className={props.color}>
            <td className="d-flex justify-center cards-row">
                <Icon name={props.icon} />                                       
            </td>
            <td>
                <input type="number" onChange={changed}></input>
            </td>
            <td>
                <input type="number" ></input>
            </td>
        </tr>
    );
}