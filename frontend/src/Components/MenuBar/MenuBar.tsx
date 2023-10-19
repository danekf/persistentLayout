import React from "react";
import './MenuBar.css';

import { type TLayout } from "../../Types/customTypes.types";

type MenuProps = {
  layouts: TLayout[];
}

const MenuBar: React.FC<MenuProps> = ({layouts}) => {


  const menuItems = layouts.map( (layout) => {
    return (
      {
        link: `/layout/${layout.URLParam}`,
        name: layout.name,
      }
    )
  });

  menuItems.push({
    link: '/add',
    name: 'Add New Layout'
  })


  return (
    <div className="menuBar">
      <div className="menuLeft">
        <a href="/">Sign In / Logo area</a>
      </div>
      <div className="menuRight">
        {menuItems.map( (item) => {
          return (
            <a href= {item.link}>{item.name}</a> 
          )
        })}
      </div>
    </div>
  )
}

export default MenuBar;