import React from "react";
import  image  from './images.png';

const Myavatar = () => {
    return(
      <img src={image} alt="not found" style={{width: '40px', height: '40px', borderRadius:'50%', marginRight: '4px'}}/>
    )
  }
  export default Myavatar;