import React from "react";
import './MenuBar.css';

import { type TLayout } from "../../Types/customTypes.types";
import { useNavigate } from "react-router-dom";

type MenuProps = {
  layouts: TLayout[];
  activeLayout: string;  
}

const MenuBar: React.FC<MenuProps> = ({layouts, activeLayout}) => {


  const menuItems = layouts.map( (layout) => {
    const link = {
      link: `/layout/${layout.URLParam}`,
      name: layout.name,
      active: false,
    }

    if (activeLayout.toLowerCase() === layout.URLParam.toLowerCase()) {
      link.active = true;
    }
    return link;
  });

  menuItems.push({
    link: '/add',
    name: 'Add New Layout',
    active: false,
  });

  console.log(menuItems);

  return (
    <div className="menuBar">
      <div className="menuLeft">
        <a href="/">Sign In / Logo area</a>
      </div>
      <div className="menuRight">
        {menuItems.map( (item) => {
          return (
            <a className={item.active === true ? 'activeLayout' : undefined} href= {item.link}>{item.name}</a> 
          )
        })}
      </div>
    </div>
  )
}

export default MenuBar;