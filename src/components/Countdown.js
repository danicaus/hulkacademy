import React, { useState, useEffect } from 'react';
import './countdown.css';
import Clock from './Clock'

function Countdown() {
    
    const [time,setTime] = useState([])
    
    const startTimer = () => {
        
        const countdownDate = new Date("Nov 26, 2021").getTime();
    
        let interval = setInterval(() => {
        
            let now = new Date().getTime();
            let distance = countdownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            let timer = {
                days,
                hours,
                minutes,
                seconds
            }

            if(distance<0){
                clearInterval(interval)
            } else {
                setTime(timer)
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer();
    },[])

    return (
        <section className="countdown">
            <h2>As melhores ofertas do ano estão chegando!</h2>
            <Clock timer={time}/>
            <p>Até 80% de desconto nos itens mais vendidos!</p>
        </section>
    )
}

export default Countdown;