import React, {useState} from "react";
import Layout from './Layout/Layout';
import './LayoutList.css';

import {type TLayout} from "../../Types/customTypes.types";

type layoutProps = {
  layouts: TLayout[];
  activeLayout: string;  
}


const LayoutsList: React.FC<layoutProps> = ({layouts, activeLayout}) => {
  
  return (
    <div className="Layouts" id="Layouts">
      {layouts.map( (layout) => {
        if (activeLayout.toLowerCase() === layout.URLParam.toLowerCase())
        return (
          <Layout key={layout.name} layout={layout} />
        )
      })}
    </div>
  )
}

export default LayoutsList;