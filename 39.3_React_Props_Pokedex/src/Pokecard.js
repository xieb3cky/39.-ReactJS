/** A single Pokemon, with their name, image, and type */

import React from 'react';
import './Pokecard.css';
let Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

function Pokecard(props) {
    let img_src = `${Poke_API}${props.id}.png`;

    return (
        <div className="Pokecard">
            <h4 className="Poke-title">{props.name}</h4>
            <img className="Pokecard-image" src={img_src} alt="" />
            <div className="Pokecard-data">Type: {props.type}</div>
            <div className="Pokecard-data">EXP: {props.base_experience}</div>
        </div>
    );
}

export default Pokecard;