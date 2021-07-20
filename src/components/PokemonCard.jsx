import React,{useState} from "react";

const PokemonCard = (props) => {

  const [activo,setActivo]= useState('Activo');
  const [background,setBackground]= useState('');


  const PokeStyles = {
    backgroundColor: "" + props.bg + ""
  };

  const pokeImgname =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";
  const pokeImgNumber = props.id;
  const pokeImg = pokeImgname + pokeImgNumber + ".png";

  const handleSwitch = () =>{
    if( activo === "Activo" ) {
      setActivo('Inactivo')
      setBackground('grey')
    } else {
      setActivo('Activo')
      setBackground('')
    }
  }

  return (
    <div className="PokeContainer__row-4">
      <div className={`PokeContainer__card ${background}`}>
        <h3>{props.name} Nº {props.id}</h3>
        
        <div className={`PokeContainer__card-circle ${background}`} style={PokeStyles}>
          <img src={pokeImg} alt={props.name}/>
        </div>
        <h5>Tipo: {props.types}</h5>
        <button className={`on${activo}`} onClick={handleSwitch}>{activo}</button>
      </div>
    </div>
  );
};

export default PokemonCard;
