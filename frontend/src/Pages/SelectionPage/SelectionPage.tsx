import React from "react";
import './SelectionPage.css';

import Home from "../Home/Home";
import LayoutsList from "../LayoutsList/LayoutsList";
import MenuBar from "../../Components/MenuBar/MenuBar";


const SelectionPage: React.FC<{}> = () => {

  return (
    <>
      <MenuBar />
      <Home />
      <LayoutsList />
    </>
  )
};

export default SelectionPage;