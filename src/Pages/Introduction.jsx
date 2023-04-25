
// import React from 'react'
// import { useNavigate } from "react-router-dom";

// // import "./slick-carousel/slick/slick.css"; 
// // import "./slick-carousel/slick/slick-theme.css";



// // import {Row, Col, Container} from 'react-bootstrap';



// function Introduction() {
//   const navigate = useNavigate();
 
//   return (
//     <div className="intro-container container " style={{ width: window.innerWidth, height: window.innerHeight }}>
     

//       <div className="intro-items ">

//         <div className="row  m-4">
//           <div className="col-sm-12 col-md-6">
//             {/* <div className="card1 m-auto" onClick={() => navigate('/psychoarea/chatgpt')}>
//               <p>chat Gpt</p>
//             </div> */}
//             <div class="card hover-overlay ripple shadow-1-strong rounded">
//               <div class="card-body">
//                 <h5 class="card-title">Chat Gpt</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <button type="button" class="btn btn-primary btn-rounded" onClick={() => navigate('/psychoarea/chatgpt')}>Start</button>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-6 ">
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title">Mental Healt Test</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <button type="button" class="btn btn-primary btn-rounded" onClick={() => navigate('/psychoarea/mentalhealth')}>Start</button>
//               </div>
//             </div>
//           </div>

//         </div>
//         <div className="row  m-4">
//           <div className="col-sm-12 col-md-6">
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title">Depression Test</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <button type="button" class="btn btn-primary btn-rounded" onClick={() => navigate('/psychoarea/depressiontest')}>Start</button>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-6">
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title">Anxioty Test</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <button type="button" class="btn btn-primary btn-rounded" onClick={() => navigate('/psychoarea/anxiotytest')}>Start</button>
//               </div>
//             </div>
//           </div>

//         </div>
//         <div className="row  m-4">
//           <div className="col-sm-12 col-md-6 mx-auto">
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title">Chat With Experts</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <button type="button" class="btn btn-primary btn-rounded" onClick={() => navigate('/psychoarea/chatgpt')}>Start</button>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-6 mx-auto shadow-3">
//             <div class="card shadow-inner shadow-4">
//               <div class="card-body">
//                 <h5 class="card-title">Best Apps</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <button type="button" class="btn btn-primary btn-rounded" onClick={() => navigate('/psychoarea/chatgpt')}>Start</button>
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>

//   )
// }

// export default Introduction

import React from 'react'
import { useNavigate } from "react-router-dom";
import '../Style/Introduction.css'

function Introduction() {
  const navigate = useNavigate();
 
  return (
    <div className="intro-container container">
      <div className="intro-items">
        <div className="card" onClick={() => navigate('/psychoarea/chatgpt')}>
          <div className="card-body">
            <h5 className="card-title">Chat Gpt</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" className="btn btn-primary btn-rounded">Start</button>
          </div>
        </div>
        <div className="card" onClick={() => navigate('/psychoarea/mentalhealth')}>
          <div className="card-body">
            <h5 className="card-title">Mental Healt Test</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" className="btn btn-primary btn-rounded">Start</button>
          </div>
        </div>
        <div className="card" onClick={() => navigate('/psychoarea/depressiontest')}>
          <div className="card-body">
            <h5 className="card-title">Depression Test</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" className="btn btn-primary btn-rounded">Start</button>
          </div>
        </div>
        <div className="card" onClick={() => navigate('/psychoarea/anxiotytest')}>
          <div className="card-body">
            <h5 className="card-title">Anxioty Test</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" className="btn btn-primary btn-rounded">Start</button>
          </div>
        </div>
        <div className="card" onClick={() => navigate('/psychoarea/chatgpt')}>
          <div className="card-body">
            <h5 className="card-title">Chat With Experts</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" className="btn btn-primary btn-rounded">Start</button>
          </div>
        </div>
        <div className="card" onClick={() => navigate('/psychoarea/askyourproblem')}>
          <div className="card-body">
            <h5 className="card-title">Ask Your Problem</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" className="btn btn-primary btn-rounded">Start</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction ;
