import React, {useState} from "react";
import './Layout.css';
import { type TLayout } from "../../../Types/customTypes.types";


type LayoutProps = {
  layout: TLayout;
}

const Banner: React.FC<LayoutProps> = ({layout }) => {

  return(
    <div className="banner full">
      <div className="inside">
        {layout.name}
      </div>
    </div>
  )
}

export default Banner;