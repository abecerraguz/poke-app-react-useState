import React,{useState} from "react";
import PokemonCard from "./components/PokemonCard";

import './App.scss';

function App() {



  let pokémon = [
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"], bg: "green" },
    { id: 5, name: "Charmeleon", types: ["fire"], bg: "red" },
    { id: 9, name: "Blastoise", types: ["water"], bg: "blue" },
    { id: 12, name: "Butterfree", types: ["bug", "flying"], bg: "white" },
    { id: 16, name: "Pidgey", types: ["normal", "flying"], bg: "white" },
    { id: 23, name: "Ekans", types: ["poison"], bg: "purple" },
    { id: 24, name: "Arbok", types: ["poison"], bg: "purple" },
    { id: 25, name: "Pikachu", types: ["electric"], bg: "yellow" },
    { id: 37, name: "Vulpix", types: ["fire"], bg: "red" },
    { id: 52, name: "Meowth", types: ["normal"], bg: "white" },
    { id: 63, name: "Abra", types: ["psychic"], bg: "grey" },
    { id: 67, name: "Machamp", types: ["fighting"], bg: "brown" },
    { id: 72, name: "Tentacool", types: ["water", "poison"], bg: "blue" },
    { id: 74, name: "Geodude", types: ["rock", "ground"], bg: "brown" },
    { id: 87, name: "Dewgong", types: ["water", "ice"], bg: "blue" },
    { id: 98, name: "Krabby", types: ["water"], bg: "blue" },
    { id: 115, name: "Kangaskhan", types: ["normal"], bg: "white" },
    { id: 122, name: "Mr. Mime", types: ["psychic"], bg: "purple" },
    { id: 133, name: "Eevee", types: ["normal"], bg: "white" },
    { id: 144, name: "Articuno", types: ["ice", "flying"], bg: "white" },
    { id: 145, name: "Zapdos", types: ["electric", "flying"], bg: "yellow" },
    { id: 146, name: "Moltres", types: ["fire", "flying"], bg: "red" },
    { id: 148, name: "Dragonair", types: ["dragon"], bg: "silver" },
  ];

  let tipos = [
    {types: "poison",color: "#a5c383" },
    {types: "grass",color: "#a5c383" },
    {types: "fire",color:"#ca4a40" },
    {types: "water",color:"#3f51b5" },
    {types: "bug",color: "white" },
    {types: "flying",color: "white" },
    {types: "normal",color: "white" },
    {types: "electric",color: "yellow" },
    {types: "psychic", color: "#abcede" },
    {types: "fighting", color: "brown" },
    {types: "rock", color: "brown" },
    {types: "ground", color: "brown" },
    {types: "ice", color: "#3f51b5" },
  ]
  let uniqid = require('uniqid');

  // State para un Pokemon

  const [contentpoke, setContentpoke] = useState([])
  const [estadopoke, setEstadopoke] = useState(false)

  console.log('contentpoke APP-->',contentpoke)

  let poke = {
    id   : contentpoke[0],
    name : contentpoke[1],
    tipo : contentpoke[2],
    bg   : contentpoke[3],
    url  : contentpoke[4]
  }

  return (
    <>
    {estadopoke ?
          <div className="PokeContainer__card-select">
          <h3>{poke.name} Nº {poke.id}</h3>
          <div className={`PokeContainer__card-circle`} style={{background:poke.bg}} >
            <img src={poke.url} alt={poke.name}/>
          </div>
          <h5>Tipo: {poke.tipo}</h5>
        </div>
     
      :
      null
    }

 
    <div className="PokeContainer">
      {pokémon.map((unPokemon) => (
        <PokemonCard
          key={uniqid()}
          id={unPokemon.id}
          name={unPokemon.name}
          types={unPokemon.types.toString()}
          bg={tipos.filter( (unTipo) => ( unTipo.types === unPokemon.types[0]) ).map( (tipoElegido)=>(tipoElegido.color) )}
          unPokemon={unPokemon}
          selectPokemon={

            // Se manda una props que contiene una funcion ( Arrow function )
            contentpoke => setContentpoke(contentpoke)
            
          }
          onOff={ estadopoke => setEstadopoke(estadopoke)}
        />
      ))}
    </div>
    </>
  );
}

export default App;
