import "./pokecard.css"
import React from 'react';

const Pokecard = ({ name, id, type }) => {
   
    return (
        <div className='card'>  
         <b> {name}</b>  
        <img className="pimg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}  alt=''/> 
        {type}  
        </div>
    )
}
export default Pokecard;
