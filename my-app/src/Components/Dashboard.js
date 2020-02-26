import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Dashboard = () => {
        
    
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hits, setHits] = useState(0);

  
   const handleStrike = (event) => {
       
        if(strikes <= 3) {
            setStrikes({strikes: event.target.value + 1});
        }
        else {
            setStrikes(0)
            setBalls(0)
         }
        return handleStrike;
    };

    const handleBalls = () => {
        if(balls < 4) {
            setBalls({balls: this.state.handleBalls + 1})
        }
        else {
            setBalls(0)
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
        <div className='dcontainer'>
            <Button className='strikes' onClick={handleStrike}>Strikes</Button>
            <Button className='balls' onClick={handleBalls}>Balls</Button>
            <Button className='foul' onClick={handleFoul}>Foul</Button>
            <Button className='hits' onClick={handleHits}>Hits</Button>
        </div>
     );
   };


export default Dashboard;