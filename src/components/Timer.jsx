import React, { useState } from 'react';
import './timer.css';

function Timer( props) {
        var [days,setDays]=useState(0);
        var [hrs,setHrs]=useState(0);
        var [mints,setMints]=useState(0);
        var [seconds,setSeconds]=useState(0);
        // var [timerEnd,setTimerEnd]=useState("");
        
        
        var deadline = new Date(props.deadline).getTime(); 
        var x = setInterval(function() { 
            var now = new Date().getTime(); 
            var t = deadline - now; 
            setDays( Math.floor(t / (1000*60*60*24))); 
            setHrs(Math.floor((t%(1000*60*60*24))/(1000 * 60 * 60))); 
            setMints( Math.floor((t%(1000*60*60)) / (1000 * 60))); 
            setSeconds(Math.floor((t%(1000*60)) / 1000)); 
            if (t < 0) { 
                clearInterval(x); 
                // setTimerEnd("TIME UP"); 
                setDays(0); 
                setMints(0);
                setHrs(0);
                setSeconds(0);
                }
        },1000);
    
      
  return (
    <div className='container'>
        <p className='title' style={{width:'100%'}}>Hurry Up! Offer ends in</p> 

        <div id="clockdiv"> 
            <div> 
                <span class="days " id="day">{days}</span> 
                <div class="smalltext">Days</div> 
            </div> 
            <div> 
                <span class="hours" id="hour">{hrs}</span> 
                <div class="smalltext">Hours</div> 
            </div> 
            <div> 
                <span class="minutes" id="minute">{mints}</span> 
                <div class="smalltext">Minutes</div> 
            </div> 
            <div> 
                <span class="seconds" id="second">{seconds}</span> 
                <div class="smalltext">Seconds</div> 
            </div> 
        </div>

    </div>    
  );
}

export default Timer;