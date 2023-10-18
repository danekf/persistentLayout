import React, {useState} from "react";
import Layout from './Layout/Layout';
import './LayoutList.css';


const LayoutsList: React.FC<{}> = () => {

  const layouts = [
    {name: 'Twitch'},
    {name: 'Gaming on TV (Dark Mode)'},
    {name: 'LCS on the side'},
  ]

  return (
    <div className="Layouts" id="Layouts">
      {layouts.map( (layout) => {
        return (
          <Layout layout={layout} key={layout.name}/>
        )
      })}
    </div>
  )
}

export default LayoutsList;