
import React, {useEffect, useContext} from "react";
import {auth, provider} from '../Auth/firebase';
import { signInWithPopup,  onAuthStateChanged} from "firebase/auth";
import { authContext } from "../Context";
import { useNavigate } from "react-router-dom";
import '../Style/Home.css'
import signin from '../Asserts/images/googlesignin.png'
export function Home() {
  const navigate = useNavigate();
  const authUser = useContext(authContext);
  const {user, setUser} = authUser;
  console.log(user);



  const googleSignIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
   
  
  navigate('/psychoarea/introduction')
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
    <div className='login' >
      <div>
      <button onClick={googleSignIn} className="btn btn-sm btn-rounded"> <img src={signin} alt="not found"  style={{width:'50%', height:'50%'}}/></button>
      </div>
   
       
       

      </div>
      
        
     
     

     
    
   
  )
}

