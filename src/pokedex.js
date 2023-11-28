import React from "react"
import Pokecard from "./pokecard"
import Pokeinfo from "./pokeInfo"
import "./pokedeck.css"
const Pokedex = () => {
  
    return (
        <div className="deck">
            {Pokeinfo.map(i => (
                <Pokecard name={i.name} id={i.id} type={i.type} />
            ))}
    </div>
    )

}
export default Pokedex