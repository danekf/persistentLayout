import React, {useEffect, useState} from "react";
import './Monitors.css'


type Monitor = {
  name: string;
  resolutionWidth:number ;
  resolutionHeight:number ;
  use: string;
  URL?: string;
}

type MonitorsProps = {
  layoutName:string;
}

//TEMP or used for creating new layout...we will see.
const exampleMonitors: Monitor[] = [
  {
    name: 'Acer 24"',
    resolutionWidth: 1920,
    resolutionHeight: 1080,
    use: 'Twitch Stream',
    URL: 'https://www.twitch.tv/',
  },
  {
    name: 'Benq 24"',
    resolutionWidth: 1920,
    resolutionHeight: 1080,
    use: 'MDN Web docs',
    URL: 'https://developer.mozilla.org/en-US/'
  },
  {
    name: 'Gigabyte 27"',
    resolutionWidth: 2560,
    resolutionHeight: 1440,
    use: 'VSCode',
  }
]

/*TODO List --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-Size monitor border box according to resolution (make styles?)
-figure out layout method so that monitors can be in proper grid (probably some kind of grid array? added into the monitors type as well.)
-Figure out import/fetching of monitors. getMonitors hook is most likely with DB. This includes figuring out what needs to be passed to this component for getMonitors to work, starting with just a name.
-edit button to edit layout? 
-On click apply, open proper windows and move them.
  -add main monitor tag to monitor. This assumes the the window is open on the main monitor. Opens popup tabs based on position of "Main" monitor.
  -Check current monitor/position, open in new tab if its in the correct position already.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const openNewWindow = (monitor: Monitor) => {
  /*TODO 
  -open new tab in fullscreen
  -url is embedded into page
  -Opens 'redirect page in new tab, using tabs.move potentially?'
  */

  console.log(monitor);

  //window positions are finnicky when opening a new tab and can be annoying. Below is a method to try to automatically get it right.
  const topPosition = 1;
  const leftPosition = 0;
  const offset = -50;


 if(monitor.URL){
  //new window attempts
  //  window.open(monitor.URL,'monitor1',`toolbar=yes,scrollbars=yes,resizable=yes,top=${topPosition},left=${leftPosition},width=${monitor.resolutionWidth + offset},height=${monitor.resolutionHeight+offset}`)
  
  



  //no offset, attempt to tab.move to somewhere else
   window.open(monitor.URL, monitor.name)
 }

}

const Monitors: React.FC<MonitorsProps> = (layoutName) => {

const monitorsToDisplay = exampleMonitors.map( (monitor)=> {

/* 
const [monitors, setMonitors] = useState([])

useEffect( ()=> {
  setMonitors( getMonitors(layoutName) );
},[])
*/

  return(
    <div className="monitor" key={monitor.name} onClick={() => openNewWindow(monitor)}>
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