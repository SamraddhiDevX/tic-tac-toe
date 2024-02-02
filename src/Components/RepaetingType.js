import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';



function RepaetingType({ t}) {


        const [text] = useTypewriter({
            
            words: [` ${t}`],
            loop:{},
            typeSpeed:100,
            deleteSpeed: 70,
        });
        
          return (
            <h1 className='h11'>
            <span >
              {text} 
            </span>
            <span>
            <Cursor cursorStyle=''/>
            </span>
           
            </h1>
          )
        }
        
    
export default RepaetingType
