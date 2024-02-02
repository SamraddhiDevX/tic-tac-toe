import GameState from "./GameState";
import { Link } from 'react-router-dom'

function Reset({gameState,onReset}) {
        if(gameState===GameState.inProgress){
            return;
        }
   return (
   <div  className="btn-container">
    <div onClick={onReset} className="button" >Play Again</div>
    <Link to="/" className="btnn">
    <div  className="button" >Home</div>
    </Link>
    </div>
    )
    
}
export default Reset;