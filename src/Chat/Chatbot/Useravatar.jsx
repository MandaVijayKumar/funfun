import React from 'react';
import image from './you.png'

function Useravatar() {
  return (
    <img src={image} alt="not found" style={{width: '40px', height: '40px', borderRadius:'50%', }}/>
  )
}

export default Useravatar