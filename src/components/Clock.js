import React from 'react';

function Clock(props) {
        
    return (
        <ul className="clock">
            <li>
                <span>{props.timer.days}</span>
                <span>Dias</span>
            </li>
            <li>
                <span>{props.timer.hours}</span>
                <span>Horas</span>
            </li>
            <li>
                <span>{props.timer.minutes}</span>
                <span>Minutos</span>
            </li>
            <li>
                <span>{props.timer.seconds}</span>
                <span>Segundos</span>
            </li>
            
        </ul>
    )
}

export default Clock