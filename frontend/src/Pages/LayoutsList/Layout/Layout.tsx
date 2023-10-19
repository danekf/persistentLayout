import React, {useState} from "react";
import './Layout.css';
import { type TLayout } from "../../../Types/customTypes.types";


type LayoutProps = {
  layout: TLayout;
}

const Banner: React.FC<LayoutProps> = ({layout }) => {

  return(
    <div className="banner fullWidth">
      <div className="inside">
        <h1 className="title">{layout.name}</h1>
        <div className="monitors">Monitors layout goes here</div>
        <div className="description">Short <i>optional</i> description.</div>
        <div className="edit"><button className="edit">Edit Button</button></div>
      </div>
      <div className="rightSide">
        <button className="apply">Apply Layout.</button>
      </div>
    </div>
  )
}

export default Banner;