import { useState, useEffect } from 'react'
// import { Button } from 'react-bootstrap'
import axios from 'axios';

function RandomChuck(){
    const [quote, cnFacts] = useState("");

        useEffect(() => {
        const interval = setInterval(() => {
            chuckFacts();
        }, 30000);
        return () => clearInterval(interval);
      }, []);

    function chuckFacts(){
        axios.get('http://localhost:8000/api/cnquotes')
        .then((response)=>{
            cnFacts(response.data)
        })
        .catch()
    }
    return (
        <div className="chuck-quote-box">
            {/* <Button onClick={chuckFacts}>Chuck Says</Button> */}
            <div>{quote.value}</div>
        </div>
    )
}

export default RandomChuck