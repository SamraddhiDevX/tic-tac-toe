import GameState from "./GameState";
import RepaetingType from './RepaetingType'

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return   <div className="btn1"><RepaetingType t="O WINS"  ></RepaetingType></div>;
    case GameState.playerXWins:
      return <div className="btn1"> <RepaetingType t="X WINS"  ></RepaetingType></div>;
    case GameState.draw:
      return <div className="btn1"><RepaetingType t="DRAW"  ></RepaetingType></div>;
    default:
      return <></>;
  }
}

export default GameOver;