import Tile from './Tile';

function Board({tiles, ontileclick,play,strikeName,gameState}) {
    const player =(index)=>{
       if(tiles[index]== null){
            return play ;
        }
    }

    const getBoardStyles = () => {
        const baseStyles = {
          marginTop: '100px',
          marginLeft: '50px', 
          marginRight: '20px',
        
        };
      
        const inProgressStyles = {
          ...baseStyles,
          marginTop: '100px',
          marginLeft: '20px', 
          marginRight: '20px', 
        };
      
        return gameState === 3 ? inProgressStyles : baseStyles;
      };
    return (
        <>
        
    
    <div className='board' style={getBoardStyles()}>
       
        <Tile player={player(0)} onClick={()=>ontileclick(0)} value={tiles[0]} id={"0"} strikeName={strikeName} />
        <Tile player={player(1)} onClick={()=>ontileclick(1)} value={tiles[1]} id={"1"} strikeName={strikeName}/>
        <Tile player={player(2)} onClick={()=>ontileclick(2)} value={tiles[2]} id={"2"} strikeName={strikeName}/>
        <Tile player={player(3)} onClick={()=>ontileclick(3)} value={tiles[3]} id={"3"} strikeName={strikeName}/>
        <Tile player={player(4)} onClick={()=>ontileclick(4)} value={tiles[4]} id={"4"} strikeName={strikeName}/>
        <Tile player={player(5)} onClick={()=>ontileclick(5)} value={tiles[5]} id={"5"} strikeName={strikeName}/>
        <Tile player={player(6)} onClick={()=>ontileclick(6)} value={tiles[6]} id={"6"} strikeName={strikeName}/>
        <Tile player={player(7)} onClick={()=>ontileclick(7)} value={tiles[7]} id={"7"} strikeName={strikeName}/>
        <Tile player={player(8)} onClick={()=>ontileclick(8)} value={tiles[8]} id={"8"} strikeName={strikeName}/>
        
       
      
    </div>
  
    </>
    );
}
export default Board;