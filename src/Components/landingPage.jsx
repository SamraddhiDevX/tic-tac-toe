// import React from 'react'
// import { Link } from 'react-router-dom'
// import Animation from './Animation'

// function landingPage() {
//   return (
//     <div>
//          <Animation ></Animation>
//      <h1>TIC <span className='spanClass'>TAC</span> TOE </h1>
      
     

//         <div className="btn-container">
//   <Link to="/play-area-2" className='btn-container'>
//     <div className="btn">
//       Single-Player
//     </div>
//   </Link>

//   <Link to="/play-area-1"  className='btn-container'>
//     <div className="btn">
//       Multi-Player
//     </div>
//   </Link>
  
// </div>
        
//         </div>
        
    
   
//   )
// }

// export default landingPage;
import React from 'react';
import { Link } from 'react-router-dom';
import Animation from './Animation';
import './landingPage.css'; // Import the CSS file for additional styling

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="left-column">
        <Animation />
      </div>

      <div className="right-column">
        <h1>TIC <span className='spanClass'>TAC</span> TOE</h1>
        
        <div className="btn-container">
          <Link to="/play-area-2" className='btn-container'>
            <div className="btn">
              Single-Player
            </div>
          </Link>

          <Link to="/play-area-1" className='btn-container'>
            <div className="btn">
              Multi-Player
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
