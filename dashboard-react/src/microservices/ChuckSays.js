import { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';

function ChuckSays(){
    const [quote, cnFacts] = useState("");

    function chuckFacts(){
        axios.get('http://localhost:8000/api/cnquotes')
        .then((response)=>{
            cnFacts(response.data)
        })
        .catch()
    }
    return (
        <div className="chuck-quote-box">
            <Button onClick={chuckFacts}>Chuck Says</Button>
            <div>{quote.value}</div>
        </div>
    )
}

export default ChuckSays