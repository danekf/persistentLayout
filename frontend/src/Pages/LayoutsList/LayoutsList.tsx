import React, {useState} from "react";
import Layout from './Layout/Layout';
import './LayoutList.css';

import {type TLayout} from "../../Types/customTypes.types";

type layoutProps = {
  layouts: TLayout[];
  urlParamLayout: string;  
}


const LayoutsList: React.FC<layoutProps> = ({layouts, urlParamLayout}) => {
  
  return (
    <div className="Layouts" id="Layouts">
      {layouts.map( (layout) => {
        if (urlParamLayout.toLowerCase() === layout.URLParam.toLowerCase())
        return (
          <Layout key={layout.name} layout={layout} />
        )
      })}
    </div>
  )
}

export default LayoutsList;