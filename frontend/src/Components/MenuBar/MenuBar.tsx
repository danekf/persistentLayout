import React from "react";
import './MenuBar.css';

const MenuBar: React.FC<{}> = () => {


  const menuItems = [
    {link : '/layout/home', name: 'Home'},
    {link : '/layout/twitch', name: 'Twitch'},
    {link : '/add/', name: 'Add New'},


  ]






  return (
    <div className="menuBar">
      {/* Links */}
      {menuItems.map( (item) => {
        return (
          <a href= {item.link}>{item.name}</a> 
        )
      })}

      {/* Burger Menu */}
      {/* insert here */}


    </div>
  )
}

export default MenuBar;