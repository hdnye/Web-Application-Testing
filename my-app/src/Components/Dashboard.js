import React, { useState } from 'react';


export function Dashboard {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);

    const handleStrike = () => {
        if(strikes < 3) {
            setStrikes(strikes + 1)
        }
        else {
            setStrikes(0)
            setBall(0)
            setFoul(0)
        }
        return handleStrike;
    };

    const handleBalls = () => {
        if(ball < 4) {
            setBall(ball + 1)
        }
        else {
            setBall(0)
            setStrike(0)
            setFoul(0)
        }
        return handleBalls;
    };

        const handleFoul = () => {
       if(strike = 0) { 
       return (setFoul + 2)
     }
       if (strike = 1) {
         return (setFoul + 1)
        }
      else (strike = 2 )
        return (setFoul)
       
    };
    return handleFoul;
};

return (
    <div className='Dashboard'>





    </div>

)



}