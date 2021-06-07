import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';

function ReallyRandomPokeApi(){
    const [randompoke, setrandom] = useState("");
    const [namepoke, setnamepoke] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            Pokemondisplay();
        }, 10000);
        return () => clearInterval(interval);
        
      }, []);

    function Pokemondisplay(){
        // console.log(pokename)
        var rpoke = (Math.floor(Math.random() * 1011) + 1)
        console.log(rpoke)
            axios.get('http://localhost:8000/api/pokemonlist', { params: { pokemon: rpoke }})
            .then((response)=>{
                console.log(response.data)
                console.log(response.data.sprites)
                if ((response.data.sprites) !== undefined) {
                setrandom(response.data.sprites)
                setnamepoke(response.data.name)
                // console.log(response.data.sprites.front_shiny)
                }
                else {
                    console.log("VIDE")
                    Pokemondisplay()
                }
            })
            .catch()
    }

    return (
        <div className="poke-input-box">
            {/* <input type="text" value={pokename} name="pokemon" onChange={e => pokeName((e.target.value).toLowerCase())} className="form-control" placeholder="Enter a Pokemon name" /> */}
            <Button className="pokebutton">RANDOM POKEMON</Button>
            <div className="pokename">{namepoke.toUpperCase()}</div>
            <div className="poke-display-box">
            <img className="pokepicture" src={randompoke.front_default} alt=""></img>
            <img className="pokepicture" src={randompoke.front_shiny} alt=""></img>
            </div>
        </div>
    )
}

export default ReallyRandomPokeApi


