
function Tile({className,onClick,value,player,id,strikeName}){
   const isStyleApplied = strikeName && strikeName.includes(id);
   return (
    <div  onClick={onClick}  className={`tile ${className} ${player}-hover ${isStyleApplied ? 'style' : ''}`} >
     {value}
    </div>
   )
}

export default  Tile;


// className={`tile ${className} ${player}-hover `}
