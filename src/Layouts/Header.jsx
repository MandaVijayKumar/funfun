import React, {useEffect,useContext} from 'react'
import {auth} from '../Auth/firebase';
import {  signOut, onAuthStateChanged} from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {authContext} from '../Context';

function Header() {
const navigate = useNavigate();
const {user, setUser} = useContext(authContext);

    const SignOut = () => {
        signOut(auth).then((result) => {
        setUser(null)
        navigate('/')
          
        }).catch((error) => {
          console.log(error)
         
        });
       }
    
//  useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
        
       
//       } else {
      
//       }
//     });
//    },[])
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{opacity: '0.5'}}>

                <div className="container-fluid">
                    <a className="navbar-brand mt-2 mt-lg-0" href="/">
                        <h2><span style={{ color: '#5e9693' }}>Psyco</span><span style={{ color: '#4a9603' }}>logist</span></h2>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">



                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' onClick={SignOut}>LogOut</a>
                            </li>
                        </ul>

                    </div>



                </div>

            </nav>


        </div>
    )
}

export default Header