import { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';

function PokeApi(){
    const [poke, pokeFacts] = useState("");
    const [pokename, pokeName] = useState("");
    const [pokeinfo, setInfo] = useState("");
    const [pokedex, setPoke] = useState("");

    function Pokemondisplay(){
        console.log(pokename)
        if (pokename !== "") {
        axios.get('http://localhost:8000/api/pokemonlist', { params: { pokemon: pokename }})
        .then((response)=>{
            console.log("DATA :")
            console.log(response.data)
            if ((response.data.sprites) !== undefined) {
            pokeFacts(response.data.sprites)
            setInfo(response.data.types[0].type.name)
            pokeName(response.data.name)
            setPoke(response.data.id)
            // console.log(response.data.sprites.front_shiny)
            }
            else {
                console.log("VIDE")
            }
        })
        .catch()
        }
        else {
            console.log("VIDE")
        }
    }

    return (
        <div className="poke-input-box">
            <Button className="pokebutton" onClick={Pokemondisplay}>MY POKEMON</Button>
            <input type="text" value={pokename} name="pokemon" onChange={e => pokeName((e.target.value).toLowerCase())} className="form-control pokeinput" placeholder="Enter a Pokemon name" />
            <div className="poke-display-box">
            <div className="pokename">{pokename.toUpperCase()}</div>
            <img className="pokepicture" src={poke.front_default} alt=""></img>
            <img className="pokepicture" src={poke.front_shiny} alt=""></img>
            </div>
            <div className="pokeinfo"> 
            <div>Pokedex Id :</div>
            <div>{pokedex}</div>
            <div>Type :</div>
            <div>{pokeinfo}</div>
            {/* <div className="Japan">Original name : {pokename}</div> */}
            </div>
        </div>
    )
}

export default PokeApi