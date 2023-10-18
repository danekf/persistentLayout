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
      {/* Links */}
      {menuItems.map( (item) => {
        return (
          <a href= {item.link}>{item.name}</a> 
        )
      })}
    </div>
  )
}

export default MenuBar;