import React, {useEffect,useContext} from 'react'
import {auth} from '../Auth/firebase';
import {  signOut, onAuthStateChanged} from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {authContext} from '../Context';
import logout from '../Asserts/images/logout.jfif';

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

                <div className="container-fluid text-center">
                    <a className="navbar-brand mt-2 mt-lg-0 text-center" href="/" style={{display: 'inline-block !important' ,padding:'0px 30px !important' }}>
                        <h2 className='' style={{paddingLeft:'4rem', textAlign: 'center'}}><span style={{ color: '#5e9693' }}>Friendly </span><span style={{ color: '#5e9693' }}>Psyco</span><span style={{ color: '#4a9603' }}>logist</span></h2>
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
                            <li className="nav-item" style={{textAlign: 'right'}}>
                                <a className="nav-link" href="/" style={{fontSize: '1.2rem'}}>Dashboard</a>
                            </li>
                            <li className="nav-item" style={{textAlign: 'right'}}>
                                <a className="nav-link" href="#" style={{fontSize: '1.2rem'}}>Aknowledge</a>
                            </li>
                            <li className="nav-item" style={{textAlign: 'right'}}>
                                <a className="nav-link" href="#" style={{fontSize: '1.2rem'}}>Contact</a>
                            </li>
                            {user !== null ? ( <li className='nav-item' style={{textAlign: 'right'}}>
                                <a className='nav-link btn text-red' onClick={SignOut} style={{fontSize: '1.2rem'}}><img src={logout} alt="not found" style={{width:'30px' ,height:'30px'}}/> LogOut</a>
                            </li>): null}
                           
                        </ul>

                    </div>



                </div>

            </nav>


        </div>
    )
}

export default Header