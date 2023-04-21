// 

// import React, { useEffect, useContext } from 'react';
// import { auth } from '../Auth/firebase';
// import { signOut, onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { authContext } from '../Context';
// import logout from '../Asserts/images/logout.jfif';
// import '../Style/Header.css';

// function Header() {
//   const navigate = useNavigate();
//   const { user, setUser } = useContext(authContext);

//   const SignOut = () => {
//     signOut(auth)
//       .then((result) => {
//         setUser(null);
//         navigate('/');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//       } else {
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ opacity: '0.5' }}>
//         <div className="container-fluid text-center">
//           <a
//             className="navbar-brand mt-2 mt-lg-0 text-center"
//             href="/"
//             style={{ display: 'inline-block !important', padding: '0px 30px !important' }}
//           >
//             <h2 className="" style={{ paddingLeft: '4rem', textAlign: 'center' }}>
//               <span style={{ color: '#5e9693' }}>Friendly </span>
//               <span style={{ color: '#5e9693' }}>Psyco</span>
//               <span style={{ color: '#4a9603' }}>logist</span>
//             </h2>
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-mdb-toggle="collapse"
//             data-mdb-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fas fa-bars"></i>
//           </button>

//           <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
//             <ul className="navbar-nav  mb-2 mb-lg-0">
//               <li className="nav-item" style={{ textAlign: 'right' }}>
//                 <a className="nav-link" href="/" style={{ fontSize: '1.2rem' }}>
//                   Dashboard
//                 </a>
//               </li>
//               <li className="nav-item" style={{ textAlign: 'right' }}>
//                 <a className="nav-link" href="#" style={{ fontSize: '1.2rem' }}>
//                   Acknowledge
//                 </a>
//               </li>
//               <li className="nav-item" style={{ textAlign: 'right' }}>
//                 <a className="nav-link" href="#" style={{ fontSize: '1.2rem' }}>
//                   Contact
//                 </a>
//               </li>
//               {user !== null ? (
//                 <li className="nav-item" style={{ textAlign: 'right' }}>
//                   <a className="nav-link btn text-red" onClick={SignOut} style={{ fontSize: '1.2rem' }}>
//                     <img src={logout} alt="not found" style={{ width: '30px', height: '30px' }} /> LogOut
//                   </a>
//                 </li>
//               ) : null}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;

// import React, {useEffect,useContext} from 'react'
// import {auth} from '../Auth/firebase';
// import {  signOut, onAuthStateChanged} from "firebase/auth";
// import {useNavigate} from 'react-router-dom';
// import {authContext} from '../Context';
// import logout from '../Asserts/images/logout.jfif';
// import '../Style/Header.css';

// function Header() {
//   const navigate = useNavigate();
//   const {user, setUser} = useContext(authContext);

//   const SignOut = () => {
//     signOut(auth).then((result) => {
//       setUser(null);
//       navigate('/');
//     }).catch((error) => {
//       console.log(error);
//     });
//   }

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser({
//           userName: user.displayName,
//           userEmail: user.email,
//           userPhoto: user.photoURL
//         });
//       } else {
//         setUser(null);
//       }
//     });
//   },[]);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{opacity: '0.5'}}>
//         <div className="container-fluid text-center">
//           <a className="navbar-brand mt-2 mt-lg-0 text-center" href="/" style={{display: 'inline-block !important' ,padding:'0px 30px !important' }}>
//             <h2 className='' style={{paddingLeft:'4rem', textAlign: 'center'}}><span className="brand-text-1">Friendly </span><span className="brand-text-2">Psyco</span><span className="brand-text-3">logist</span></h2>
//           </a>
//           <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <i className="fas fa-bars"></i>
//           </button>
//           <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
//             <ul className="navbar-nav mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link" href="/" style={{fontSize: '1.2rem'}}>Dashboard</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#" style={{fontSize: '1.2rem'}}>Acknowledge</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#" style={{fontSize: '1.2rem'}}>Contact</a>
//               </li>
//               {user !== null ? (
//                 <li className='nav-item'>
//                   <a className='nav-link  text-red' onClick={SignOut} style={{fontSize: '1.2rem'}}>LogOut</a>
//                 </li>
//               ): null}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Header;

import React, { useEffect, useContext } from 'react';
import { auth } from '../Auth/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../Context';
import logout from '../Asserts/images/logout.jfif';
import '../Style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(authContext);

  const SignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoURL,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container-fluid'>
        <a className='navbar-brand brand' href='/'>
          <h2 className=''>
            <span className='brand-text-1'>Friendly </span>
            <span className='brand-text-2'>Psyco</span>
            <span className='brand-text-3'>logist</span>
          </h2>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-1 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Dashboard
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Acknowledge
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contact
              </a>
            </li>
          </ul>
          {user !== null ? (
            <div className='d-flex align-items-center'>
              <img
                src={user.userPhoto}
                alt='Profile'
                width='40'
                height='40'
                className='rounded-circle me-2'
              />
              <button className='btn btn-primary btn-sm' onClick={SignOut}>
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Header;
