import React, { useState, useEffect } from 'react';
import './Animate.css';

function Animation() {
  const [sequence, setSequence] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSequence((prevSequence) => {
        if (prevSequence.length < 4) {
          const updatedSequence = prevSequence.length % 4 === 0 ? [...prevSequence, 'X'] : [...prevSequence, 'O'];
          return updatedSequence;
        } else {
          const updatedSequence = [];
          return updatedSequence;
        }
      });
    }, 500); 
   
    return () => clearInterval(intervalId);
    
  }, []);

  return (
    <div className='animate'>
      {sequence.map((player, index) => (
        <div key={index} className='boxlanding'>
          {(index === 3 || index===0 )? <span className="x-design">X</span> : <span className="o-design">{player}</span>}
        </div>
      ))}
    </div>
  );
}

export default Animation;





