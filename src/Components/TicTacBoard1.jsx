import React from 'react'
import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import clickSoundAsset from "../Sounds/mixkit-clear-mouse-clicks-2997.wav";
import gameOverSoundAsset from "../Sounds/mixkit-musical-game-over-959.wav";

const gameoverSound= new Audio(gameOverSoundAsset);
gameoverSound.volume=0.2;

const clickSound=new Audio(clickSoundAsset);


const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "012" },
  { combo: [3, 4, 5], strikeClass: "345" },
  { combo: [6, 7, 8], strikeClass: "678" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "036" },
  { combo: [1, 4, 7], strikeClass: "147" },
  { combo: [2, 5, 8], strikeClass: "258" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "048" },
  { combo: [2, 4, 6], strikeClass: "246" },
];

function Winner(tiles) {
  for (const { combo} of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== undefined && tileValue1 !== null &&
      tileValue2 !== undefined && tileValue2 !== null &&
      tileValue3 !== undefined && tileValue3 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      if (tileValue1 === 'X') {
        return -1;
      }  else  {
        return 1;
      }
     
    }
  
  }
  const areAlltilefilledin=tiles.every((tile)=> tile!==null);
  if(areAlltilefilledin){
      return 0;
  }

  return 2;
}
  function checkWinner(tiles, setStrikeClass, setGameState) {
    for (const { combo, strikeClass } of winningCombinations) {
      const tileValue1 = tiles[combo[0]];
      const tileValue2 = tiles[combo[1]];
      const tileValue3 = tiles[combo[2]];
  
      if (
        tileValue1 !== undefined && tileValue1 !== null &&
        tileValue2 !== undefined && tileValue2 !== null &&
        tileValue3 !== undefined && tileValue3 !== null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {
        setStrikeClass(strikeClass);
        if (tileValue1 === 'X') {
          setGameState(GameState.playerXWins);
        }  else  {
          setGameState(GameState.playerOWins);
        }
       
      }
    
    }
    const areAlltilefilledin=tiles.every((tile)=> tile!==null);
    if(areAlltilefilledin){
        setGameState(GameState.draw);
    }
  }

function MiniMax(array,ComputerTurn){
  let tempscore=Winner(array);
  if(tempscore!==2){
    return tempscore;
  }
  if(ComputerTurn===true){
    let score=-Infinity;
    for(let i=0;i<9;i++){
      if(array[i]==null){
        array[i]='O';
        score=Math.max(score,MiniMax(array,false));
        array[i]=null;
      }
    }
    return score;
  }
  else{
    let score=Infinity;
    for(let i=0;i<9;i++){
      if(array[i]==null){
        array[i]='X';
        score=Math.min(score,MiniMax(array,true));
        array[i]=null;
      }
    }
    return score;
  }
}
function TicTacBoard1() {
    const [tiles, setTile]=useState(Array(9).fill(null));
    const [playerturn, setPlayerturn]=useState('X');
    const [strikeclass, setStrikeclass]=useState();
    const [gameState, setGameState] = useState(GameState.inProgress);
  

    const handleReset=()=>{
       
        setGameState(GameState.inProgress);
        setPlayerturn('X');
        setTile(Array(9).fill(null));
        setStrikeclass(null);
    }

    const handletileclick =(index)=>{
      
         if (gameState !== GameState.inProgress) {
            return;
          }
        if(tiles[index]!= null){
            return ;
        }
        const newtile=[...tiles];
        newtile[index]=playerturn;
        setTile(newtile);    
    
          checkWinner(newtile, setStrikeclass, setGameState);
      
          if (gameState !== GameState.inProgress) {
            return;
          }
       
      
       
            let unclickedIndex = -1;
             let bestScore=-100;
            if (playerturn === 'X') {
              for(let i=0;i<9;i++){
                if(newtile[i]==null){
                  newtile[i]='O';
                  let score=MiniMax(newtile,false);
                  if(score>bestScore){
                    bestScore=score;
                    unclickedIndex=i;
                  }
                  newtile[i]=null;
                }
              }
        
               if (unclickedIndex !== -1) {
                newtile[unclickedIndex] = 'O';
                setTile(newtile); 
                checkWinner(newtile, setStrikeclass, setGameState);
                setPlayerturn('X');
            
            }

    }
  }
   
    useEffect(()=>{
        if( tiles.some((tile)=> tile!=null)){
            clickSound.play();
        }
     },[tiles]);

     useEffect(()=>{
        if( gameState!== GameState.inProgress){
            gameoverSound.play();
        }
     },[gameState]);

   return (
    <div>
    
      <Board play={playerturn} tiles={tiles} ontileclick={handletileclick} strikeName={strikeclass}
      gameState={gameState}
        ></Board>
    <  GameOver gameState={gameState} />
    <Reset gameState={gameState} onReset={handleReset}></Reset>
    </div>
   )

}

export default TicTacBoard1


    

    