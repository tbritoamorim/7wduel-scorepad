import { React } from 'react';
import Icon from '../../_icons';

export default function TableRow(props) {
    const changed = e => {
        e.target.value !== '' ? props.sumF(props.color, parseInt(e.target.value), e.target.className) : props.sumF(props.color, 0, e.target.className);
    }

    return (
        <tr className={props.color}>
            <td className="d-flex justify-center cards-row">
                <Icon name={props.icon} />                                       
            </td>
            <td>
                <input type="number" onBlur={changed} className="P1"></input>
            </td>
            <td>
                <input type="number" onBlur={changed} className="P2"></input>
            </td>
        </tr>
    );
}