import React from "react";
import bg_1 from '../../svg/blob-b-g.svg'
import bg_2 from '../../svg/blob-r-o.svg'
import bg_3 from '../../svg/blob-y-r.svg'

import "./Background.css";


export const Background = () => {
  return (
    <div className="background">
      <img className="blob-green blob" src={bg_1} alt="blob color blue an green" />
      <img className="blob-red blob" src={bg_2} alt="blob colorblue an green" />
      <img className="blob-yellow blob" src={bg_3} alt="blob cor blue an green" />
    </div>
  );
};

export default Background;
