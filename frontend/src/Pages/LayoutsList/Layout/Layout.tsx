import React from "react";
import './Layout.css';

type Layout = {
  name: string;
}

type LayoutProps = {
  layout: Layout;
}

const Banner: React.FC<LayoutProps> = ({layout}) => {

  return(
    <div className="banner">
      {layout.name}
    </div>
  )
}

export default Banner;