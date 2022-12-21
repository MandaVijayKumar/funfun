import React, { useState,useContext } from 'react'
import '../Style/Sidebar.css'
import {authContext} from '../Context';


function Sidebar() {
    const userData = useContext(authContext);
    const {user} = userData;
    console.log('sidebar', user);
    

  
    if(user){
    return (
       
        <div  className='sidebar' >
            
            <div className='text-center'>
            <img src={user.userPhoto} alt='notfound' style={{width: '100px', height: '100px', borderRadius:'50%'}}/>
            <h5>{user.userName}</h5>

            </div>
           
            
            <ul className='sidebar-items'>
                <li><a>item1</a></li>
                <li><a>item2</a></li>
                <li><a>ites</a></li>
                <li><a>item4</a></li>
                <li><a>item5</a></li>
                <li><a>item6</a></li>
            </ul>
        </div>
    )
    }
    else {
        return(
            <div>
                <button className='btn' >Features</button>
            </div>
        )
    }
}

export default Sidebar