import React from "react";
import Monitors from "./Monitors/Monitors";
import './Layout.css';
import { type TLayout } from "../../../Types/customTypes.types";

import { updateCurrentLayout } from "../../../Signals/currentPages";


type LayoutProps = {
  layout: TLayout;
}

const Banner: React.FC<LayoutProps> = ({layout}) => {

  const applyLayout = () => {
    updateCurrentLayout(layout.name);
    
    console.log('Temp message: applying layout');
    
  }

  return(
    <div className="banner fullWidth">
      <div className="inside">
        <h1 className="title">{layout.name}</h1>
        <div className="monitors"><Monitors layoutName={layout.name}/></div>
        <div className="description">Short <i>optional</i> description.</div>
        <div className="edit"><button className="edit">Edit Button</button></div>
      </div>
      <div className="rightSide">
        <button className="apply" onClick={applyLayout}>Apply Layout.</button>
      </div>
    </div>
  )
}

export default Banner;