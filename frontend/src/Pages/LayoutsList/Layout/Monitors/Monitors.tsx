import React, {useEffect, useState} from "react";
import './Monitors.css'


type Monitor = {
  name: string;
  resolutionWidth:number ;
  resolutionHeight:number ;
  use: string;
}

//TEMP or used for creating new layout...we will see.
const exampleMonitors: Monitor[] = [
  {
    name: 'Acer 24"',
    resolutionWidth: 1920,
    resolutionHeight: 1080,
    use: 'Twitch Stream',
  },
  {
    name: 'Benq 24"',
    resolutionWidth: 1920,
    resolutionHeight: 1080,
    use: 'MDN Web docs'
  },
  {
    name: 'Gigabyte 27"',
    resolutionWidth: 2560,
    resolutionHeight: 1440,
    use: 'VSCode'
  }
]

/*TODO List
-Size monitor border box according to resolution (make styles?)
-figure out layout method so that monitors can be in proper grid (probably some kind of grid array? added into the monitors type as well.)
-Figure out import/fetching of monitors. getMonitors hook is most likely with DB.
-edit button to edit layout? 
*/

const Monitors: React.FC<{}> = () => {

const monitorsToDisplay = exampleMonitors.map( (monitor)=> {

/* 
const [monitors, setMonitors] = useState([])

useEffect( ()=> {
  setMonitors( getMonitors() );
},[])
*/

  return(
    <div className="monitor" key={monitor.name}>
      <div className="use">{monitor.use}</div>
      <div className="resolution">{monitor.resolutionWidth} x {monitor.resolutionHeight}</div>
    </div>
  )
})

  return (
    <div className="monitorsContainer">
      {monitorsToDisplay}
    </div>
  )
}

export default Monitors;