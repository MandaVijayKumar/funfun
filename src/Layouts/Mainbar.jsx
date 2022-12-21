

import React, { useState, useContext } from 'react'
import { Home, PsychoArea } from '../Pages';


import {  Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'



function Mainbar() {


  return (

    <div>
      <Sidebar/>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/workingarea' element={<PsychoArea />} />
          <Route path='*' element={<div>vijay kumar</div>} />
        </Routes>
      

    </div>



  )
}

export default Mainbar