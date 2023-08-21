import React, { useState } from "react";
import axios from "axios";

const Pokemons = () => {
    const [pokeList, setPokeList] = useState([]);

    const createList = () => {

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => response.data)
            .then(responseJson => {
                for (let i=0; i<807; i++) {
                setPokeList(responseJson.results.map(poke => poke.name));
                i++;
            }
            })
    }

    return (
        <div className="lista">
            <button className="btn btn-primary" onClick={createList}>Fetch Pokemon</button>
            <ul>{
                pokeList.map((item,index)=>
                    <li key={index}>{item}</li>
                )
            }</ul>
        </div>
    )
}

export default Pokemons;