

import React, { useState } from "react";
import Header from "./Layouts/Header";
import { authContext } from "./Context";

import './App.css'

import Mainbar from "./Layouts/Mainbar";








function App() {
  const [user, setUser] = useState(null)
  console.log('app', user)




  return (

    <div className="appContainer" style={{ height: window.innerHeight }}>
      <authContext.Provider value={{user, setUser}}>
        <Header />
        
        <Mainbar />

      </authContext.Provider>


















    </div>


  )
}

export default App;
