import React from "react";
import './MenuBar.css';

import { type TLayout } from "../../Types/customTypes.types";

import { currentLayout } from "../../Signals/currentPages";

type MenuProps = {
  layouts: TLayout[];
  urlParamLayout: string;
}

const MenuBar: React.FC<MenuProps> = ({layouts, urlParamLayout}) => {


  const menuItems = layouts.map( (layout) => {
    const link = {
      link: `/layout/${layout.URLParam}`,
      name: layout.name,
      active: false,
      currentLayout: false,
    }

    //set colour on menu bar if its the current link.
    if (urlParamLayout === layout.URLParam.toLowerCase()) {
      link.active = true;
    }
    //special colour when a link was the last active. Might not be used but its here for now
    if(currentLayout.value === layout.name){
      link.currentLayout = true;
    }


    return link;
  });


  //add static menu item for add new, which is always at the end, no matter the users layouts.
  menuItems.push({
    link: '/add',
    name: 'Add New Layout',
    active: false,
    currentLayout: false,
  });

  return (
    <div className="menuBar">
      <div className="menuLeft">
        <a href="/">Sign In / Logo area</a>
      </div>
      <div className="menuRight">
        {menuItems.map( (item) => {
          return (
            <a key={item.name} className={`${item.active === true ? 'activeLayout' : undefined} ${item.currentLayout === true ? 'currentLayout': undefined}`} href= {item.link}>{item.name}</a> 
          )
        })}
      </div>
    </div>
  )
}

export default MenuBar;