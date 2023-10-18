import React, {useState} from "react";
import './Layout.css';

type Layout = {
  name: string;
}

type LayoutProps = {
  layout: Layout;
}

const Banner: React.FC<LayoutProps> = ({layout}) => {

  return(
    <div className="banner full">
      <div className="inside">
        {layout.name}
      </div>
    </div>
  )
}

export default Banner;