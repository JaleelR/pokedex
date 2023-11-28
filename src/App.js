import logo from './logo.svg';
import './App.css';
import React from 'react';
import Pokedex from './pokedex';
import Pokecard from './pokecard';
import Pokeinfo from './pokeInfo';
function App() {
  return (
   
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex/>
      
   
     
    </div>
  );
}



// {
//   pokedex.map(i => (
//     <div>

//     </div>,
//     <Pokecard
//       name={i.name}
//       id={i.id}
//       type={i.type}
//     />

//   ))
// }





export default App;
