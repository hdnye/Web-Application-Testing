import React from 'react';


const Display = props => {
    return (
      <div>
          <p className='strike'>Strikes:{props.strikes} </p>
          <p className='ball'>Balls:{props.balls}</p>
      </div>
    )
}

export default Display;