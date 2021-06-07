import { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import './MCU.css';

function MarvelQuery() {
    const [query, MNext] = useState("");

    function myDisplay() {
        axios.get('http://localhost:8000/api/MCU')
            .then((response) => {
                MNext(response.data)
            })
            .catch()
        var x = document.getElementById("myDIV");
        // x.style.display == "none"
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    // function marvelAxios() {
    //     axios.get('http://localhost:8000/api/MCU')
    //         .then((response) => {
    //             MNext(response.data)
    //         })
    //         .catch()
    // }
    return (
        <div className="marvel-quote-box">
            <Button onClick={myDisplay}>When's Marvel?</Button>
            <div id="myDIV">
                <p> il reste {query.days_until} jours avant la sortie du prochain marvel</p>
                <p><img src={query.poster_url} alt="" /></p>
            </div>
        </div>

    )
}

export default MarvelQuery
// import React, { useState } from 'react';
// // import { Button } from 'react-bootstrap'
// //import axios from 'axios';
// //import './weather.css';
// const api = {

//     base: "https://www.whenisthenextmcufilm.com/api"
// }
// // function displayCount() {
// //     <p>il reste {query.days_until} jours avant le sortie du prochain marvel</p>
// // };
// // function displayTitle() {
// //     <p>ça sera le film de {query.title} ! </p>
// // };
// // function displayImg() {
// //     <p>le poster du prochain marvel : <img src={query.poster_url} size="10" alt="image du prochain marvel" /> </p>
// // };

// function MCU() {
//     const [query, setQuery] = useState('');

//     fetch(`${api.base}`)
//         .then(res => res.json())
//     // .then(query => setQuery(query))
//     // function displayCount() {
//     //     <p>il reste {query.days_until} jours avant le sortie du prochain marvel</p>
//     // };
//     // function displayTitle() {
//     //     <p>ça sera le film de {query.title} ! </p>
//     // };
//     // function displayImg() {
//     //     <p>le poster du prochain marvel : <img src={query.poster_url} size="10" alt="image du prochain marvel" /> </p>
//     // };

//     // console.log(res.jsons())
//     // console.log(poster_url)
//     // console.log(poster_url.title)
//     return (
//         <div>
//             {/* <Button onClick={displayCount}>decompte</Button>
//             <Button onClick={displayTitle}>titre</Button>
//             <Button onClick={displayImg}>poster</Button> */}
//             <p>il reste {query.days_until} jours avant le sortie du prochain marvel</p>
//             <p>ça sera le film de {query.title} ! </p>


//             {/* <p>le poster du prochain marvel : <img src={query.poster_url} size="10" alt="image du prochain marvel" /> </p> */}
//         </div>
//     )
// }




// export default MCU
