import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
 
function MyClock() {
    const [value, setValue] = useState(new Date());

    var d = new Date(),
        months = ['January','February','March','April','May','June','Jully','August','September','October','November','December'],
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var day = days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear();
    
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
 
  return (
    <div>
    <div className="clo">
      <p className="cloc">Current date and time :</p>
      <Clock value={value} renderNumbers={true} />
      <div>{day}</div>
    </div>
    </div>
  )
}

export default MyClock