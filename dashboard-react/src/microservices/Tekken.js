import React, { useState } from 'react';
import axios from 'axios';
//import './weather.css';
function Tekken() {
    const [charname, setCharname] = useState('');
    const [charname2, setCharname2] = useState('');
    const [details, setDetails] = useState([]);
    const [commands, setCommand] = useState([]);
    const doubled = commands.map((command) => (<li> {command.command} </li>));
    var details3 = [];
    const details2 = details.map((detail) => (listfilter(detail)));
    const listLaunchs = details3.map((listLaunch) => (<li> {listLaunch} </li>))
    // console.log(doubled)

    function listfilter(detail) {
        // console.log(detail.hit)
        if (detail["hit"].includes("Launch") || detail["counterHit"].includes("Launch")) {
            details3.push(detail.command)
            // console.log("push")
        }
    }

    const search = evt => {
        if (evt.key === "Enter") {

            // console.log(`${query}`)
            // Character = `${query}`
            // console.log(Character)
            axios.get("http://localhost:8000/api/tekken/", { params: { charname: charname } })
                .then(res => {
                    setCharname(charname)
                    setCommand(res.data)
                })
        }
        // console.log(charname)
        // console.log(commands)
    }
    const search2 = evt2 => {
        if (evt2.key === "Enter") {
            details3 = []
            // console.log(`${query}`)
            // Character = `${query}`
            // console.log(Character)
            axios.get("http://localhost:8000/api/tekken/", { params: { charname: charname2 } })
                .then(res => {
                    setCharname2(charname2)
                    setDetails(res.data)
                })
        }
        // console.log(charname)
        // console.log(commands)
    }

    return (

        <div className="tekken-box">
            <p>Tekken frame data</p>
            <p>Liste des coups complète</p>
            <div className="search-box">
                <input type="text"
                    className="Search-bar"
                    placeholder="Qui va taper?"
                    onChange={e => setCharname(e.target.value)}
                    value={charname}
                    // Character={query}
                    onKeyPress={search} />
            </div>
            <div className="command_list">
                Liste des coups de {charname} : {doubled} <br></br>
            </div>
            <div className="search-box">
                <p>_________________________</p>
                <p>Liste des launchers</p>
                <input type="text"
                    className="Search-bar"
                    placeholder="Qui va launcher?"
                    onChange={e => setCharname2(e.target.value)}
                    value={charname2}
                    // Character={query}
                    onKeyPress={search2} />
            </div>
            <div className="command_list">
                Liste des launchers de {charname2} : {listLaunchs} <br></br>
            </div>
        </div >
    );
}

export default Tekken;

// import React, { useState } from 'react';
// //import axios from 'axios';
// //import './weather.css';
// const api = {

//     base: "http://tkn-api.herokuapp.com/character"
// }

// function Tekken() {
//     const [query, setQuery] = useState('');
//     const [commands, setCommand] = useState([]);
//     const doubled = commands.map((command) => (<li> {command.command} </li>));
//     var Character = "Ulysse"
//     // console.log(doubled)

//     const search = evt => {
//         if (evt.key === "Enter") {
//             // console.log(`${query}`)
//             // Character = `${query}`
//             // console.log(Character)
//             fetch(`${api.base}/${query}`)
//                 .then(res => res.json())
//                 .then(result =>
//                     setCommand(result),
//                     setQuery(''),
//                 );
//             return Character
//         }
//     }

//     return (

//         <div>
//             Tekken frame data
//             <main>

//                 <div className="search-box">
//                     <input type="text"
//                         className="Search-bar"
//                         placeholder="Personnage?"
//                         onChange={e => setQuery(e.target.value)}
//                         value={query}
//                         // Character={query}
//                         onKeyPress={search} />
//                 </div>
//             </main>
//             <div>

//                 command list du perso : {doubled} <br></br>
//             </div>

//         </div >
//     );
// }

// export default Tekken;