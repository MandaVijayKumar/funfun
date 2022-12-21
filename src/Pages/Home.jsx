
import React, {useEffect, useContext} from "react";
import {auth, provider} from '../Auth/firebase';
import { signInWithPopup,  onAuthStateChanged} from "firebase/auth";
import { authContext } from "../Context";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const authUser = useContext(authContext);
  const {user, setUser} = authUser;
  console.log(user);



  const googleSignIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
  navigate('/workingarea')
  }).catch((error) => {
    console.log(error)
    
  });


  }
 
 
 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
       setUser({
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL

       })
      
    } else {
     setUser(null)
    }
  });
 },[])


  return (
    <div className='' >
      <div className="row">
        
        <div className="col-sm-4">
        <button onClick={googleSignIn}> Google Login</button>
       
        </div>
      </div>
      
        
     
     

     
    
    </div>
  )
}

