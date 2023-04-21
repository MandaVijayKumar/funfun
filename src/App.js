

import React, { useState } from "react";
import Header from "./Layouts/Header";
import { authContext } from "./Context";
// import {  PsychoArea } from './Pages';
import Home from './Pages/Home'
import PsychoArea from './Pages/PsychoArea'



import {  Routes, Route } from 'react-router-dom'

import './App.css'

import Mainbar from "./Layouts/Mainbar";
import Community from "./Pages/Community";
import MentalHealth from "./Pages/MentalHealth";
// import DepressionTest from "./Pages/DepressionTest";
import AnxiotyTest from "./Pages/AnxiotyTest";
import ChatGpt from "./Pages/ChatGpt";
import Introduction from "./Pages/Introduction";
import AskYourProblem from "./Pages/AskYourProblem";








function App() {
  const [user, setUser] = useState(null);

  console.log('app', user)
  




  return (

    <div className="appContainer" style={{height:window.innerHeight}}>
      <authContext.Provider value={{user, setUser}}>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='psychoarea' element={<PsychoArea/>}>
            
            <Route path="introduction" element = {<Introduction/>}  />
            <Route path="chatgpt" element = {<ChatGpt/>}  />

            <Route path="mentalhealth" element={<MentalHealth/>}  />
            {/* <Route path="depressiontest" element={<DepressionTest/>} /> */}
            <Route path="anxiotytest" element={<AnxiotyTest/>} />
            <Route path="askyourproblem" element={<AskYourProblem/>} />

          </Route>
         
          <Route path='*' element={<div>vijay kumar</div>} />
        </Routes>

      </authContext.Provider>


















    </div>


  )
}

export default App;
