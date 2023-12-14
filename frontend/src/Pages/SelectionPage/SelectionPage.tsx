import React from "react";
import './SelectionPage.css';

import Home from "../Home/Home";
import LayoutsList from "../LayoutsList/LayoutsList";
import MenuBar from "../../Components/MenuBar/MenuBar";

import { useParams } from "react-router-dom";

import { type TLayout } from "../../Types/customTypes.types";
import getLayouts from "../../Helpers/getLayouts";

const SelectionPage: React.FC<{}> = () => {

  //TEMP/TODO - Retrieve layouts based on signed in user data
  const layouts: TLayout[] = getLayouts();

  const params = useParams();
  const urlParamLayout = params.layout as string;

  return (
    <>
      <MenuBar layouts={layouts} urlParamLayout = {urlParamLayout}/> 
      {urlParamLayout === 'home' ? <Home /> : <LayoutsList layouts={layouts} urlParamLayout={urlParamLayout}/> }
    </>
  )
};

export default SelectionPage;