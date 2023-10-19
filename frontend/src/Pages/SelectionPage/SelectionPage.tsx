import React, {useState} from "react";
import './SelectionPage.css';

import Home from "../Home/Home";
import LayoutsList from "../LayoutsList/LayoutsList";
import MenuBar from "../../Components/MenuBar/MenuBar";

import { useParams } from "react-router-dom";

type Layout = {
  name: string;
  URLParam: string;
}

const SelectionPage: React.FC<{}> = () => {

  //TODO - Retrieve layouts based on signed in user data
  const layouts: Layout[] = [
    {name: 'Twitch', URLParam: 'twitch'},
    {name: 'Gaming on TV (Dark Mode)', URLParam:'TVGaming'},
    {name: 'LCS on the side', URLParam:'LCS'},
  ]

  const params = useParams();
  const [activeLayout, setActiveLayout] = useState(params.activeLayout as string);

  return (
    <>
      <MenuBar layouts={layouts} activeLayout={activeLayout}/> 
      {activeLayout === 'home' ? <Home /> : null}
      <LayoutsList layouts={layouts} activeLayout={activeLayout}/>
    </>
  )
};

export default SelectionPage;