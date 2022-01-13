import React from 'react'

const CountDownTimer = (props) => {
    return (
        <div>
            <th>
                <tr>
                    <td>{props.Days} {`DAYS`}</td>
                    <span>:</span>
                    <td>{props.Hours} {`Hours`}</td>
                    <span>:</span>
                    <td>{props.Min} {`Minutes`}</td>
                    <span>:</span>
                    <td>{props.Sec} {`Sec`}</td>
                </tr>
            </th>
            
        </div>
    )
}

export default CountDownTimer
