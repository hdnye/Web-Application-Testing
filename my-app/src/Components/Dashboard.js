import React, { useState } from 'react';


export function Dashboard() {
    const [ball, setBall] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hits, setHits] = useState(0);

  
    const handleStrike = () => {
        if(strikes < 3) {
            setStrikes(strikes + 1)
        }
        else {
            setStrikes(0)
            setBall(0)
         }
        return handleStrike;
    };

    const handleBalls = () => {
        if(ball < 4) {
            setBall(ball + 1)
        }
        else {
            setBall(0)
            setStrikes(0)
        }
        return handleBalls;
    };

    const handleFoul = () => {
       if(strikes === 0 & foul === 1 || 2) { 
         return (setStrikes + 1)
       }
       if (strikes === 1 && foul === 1) {
         return (setStrikes === 2)
       }
       else if (strikes === 2) { 
         setFoul(0)   
       }     
        return handleFoul;             
    };
    
    const handleHits = () => {
        if(hits === 1) {
           return (setHits + 1) 
        }
        return handleHits; 
    }
    
return (
    <div className='Dashboard'>
        <button className='strikes' onClick={handleStrike}>Strikes</button>
        <button className='balls' onClick={handleBalls}>Balls</button>
        <button className='foul' onClick={handleFoul}>Foul</button>
        <button className='hits' onClick={handleHits}>Hits</button>
    </div>
  );
};
