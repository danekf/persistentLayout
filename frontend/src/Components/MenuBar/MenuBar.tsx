import React from "react";
import './MenuBar.css';

const MenuBar: React.FC<{}> = () => {


  const menuItems = [
    {link : '/', name: 'Home'},
    {link: '#Layouts', name: 'Layouts'},
  ]

  const BurgerItems = [
    {},
    {},
    {},
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