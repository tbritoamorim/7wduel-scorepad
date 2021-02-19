import { React, useState} from 'react';
import Icon from './icon';

export default function TableRow(props) {

    return (
        <tr className={props.color}>
            <td className="d-flex justify-center cards-row">
                <Icon name={props.icon} />                                       
            </td>
            <td>
                <input type="number"></input>
            </td>
            <td>
                <input type="number"></input>
            </td>
        </tr>
    );
}