
// import React, {useEffect, useContext} from "react";
// import {auth, provider} from '../Auth/firebase';
// import { signInWithPopup,  onAuthStateChanged} from "firebase/auth";
// import { authContext } from "../Context";
// import { useNavigate } from "react-router-dom";
// import '../Style/Home.css'
// import signin from '../Asserts/images/googlesignin.png'
// export function Home() {
//   const navigate = useNavigate();
//   const authUser = useContext(authContext);
//   const {user, setUser} = authUser;
//   console.log(user);



//   const googleSignIn = () => {
//     signInWithPopup(auth, provider)
//   .then((result) => {
   
  
//   navigate('/psychoarea/introduction')
//   }).catch((error) => {
//     console.log(error)
    
//   });


//   }
 
 
//  useEffect(() => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//        setUser({
//         userName: user.displayName,
//         userEmail: user.email,
//         userPhoto: user.photoURL

//        })
      
//     } else {
//      setUser(null)
//     }
//   });
//  },[])


//   return (
//     <div className='login' >
//       <div>
//       <button onClick={googleSignIn} className="btn btn-sm btn-rounded"> <img src={signin} alt="not found"  style={{width:'50%', height:'50%'}}/></button>
//       </div>
   
       
       

//       </div>
      
        
     
     

     
    
   
//   )
// }

import React, { useEffect, useContext,useState } from "react";
import { auth, provider } from '../Auth/firebase';
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { authContext } from "../Context";
import { useNavigate } from "react-router-dom";
import img23 from '../Asserts/images/23 .jpg'

import ChatBot from 'react-simple-chatbot';
import '../Style/Home.css';

import signin from '../Asserts/images/googlesignin.png';
import { ThemeProvider } from 'styled-components';
// import React, { useState } from 'react';
// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

import TimeManagement from "../Components/TimeManagement.jsx";
import PersonalProblems from '../Components/PersonalProblems';
import AcademicResources from '../Components/AcademicResources';
import HealthSupport from '../Components/HealthSupport';
import FinancialSupport from '../Components/FinancialSupport';
import LoveSupport from '../Components/LoveSupport';
import RaggingSupport from '../Components/RaggingSupport';

function Home() {
  const navigate = useNavigate();
  const authUser = useContext(authContext);
  const { user, setUser } = authUser;
  const [context, setContext] = useState({});

  const handleEnd = ({ steps, values }) => {
    const name = context.name || 'student';
    const problemType = values[2].value || '';
    const problemDescription = context[`${problemType}_problem`] || '';
    const message = `Thank you for reaching out, ${name}. You have selected ${problemType} problem and described it as "${problemDescription}". Our expert will contact you soon.`;
    alert(message);
  };
  console.log(context)

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/psychoarea/introduction');
      }).catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoURL
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleComplete = () => {
    setIsOpen(false);
  };
  
  const steps = [
    // {
    //   id: '1',
    //   message: 'Hello, how can I help you today?',
    //   trigger: 'menu',
    // },
    // {
    //   id: 'menu',
    //   options: [
    //     {
    //       value: '1',
    //       label: 'Time and Stress Management',
    //       trigger: 'time_stress_management',
    //     },
    //     {
    //       value: '2',
    //       label: 'Personal Problems',
    //       trigger: 'personal_problems',
    //     },
    //     {
    //       value: '3',
    //       label: 'Academic Resources',
    //       trigger: 'academic_resources',
    //     },
    //     {
    //       value: '4',
    //       label: 'Health Support',
    //       trigger: 'health_support',
    //     },
    //     {
    //       value: '5',
    //       label: 'Financial Problems',
    //       trigger: 'financial_problems',
    //     },
    //     {
    //       value: '6',
    //       label: 'Love Problems',
    //       trigger: 'love_problems',
    //     },
    //     {
    //       value: '7',
    //       label: 'Ragging',
    //       trigger: 'ragging',
    //     },
    //   ],
    // },
    // {
    //   id: 'time_stress_management',
    //   component: <TimeManagement />,
    //   asMessage: true,
    //   trigger: 'menu',
    // },
    // {
    //   id: 'personal_problems',
    //   component: <PersonalProblems />,
    //   asMessage: true,
    //   trigger: 'menu',
    // },
    // {
    //   id: 'academic_resources',
    //   component: <AcademicResources />,
    //   asMessage: true,
    //   trigger: 'menu',
    // },
    // {
    //   id: 'health_support',
    //   component: <HealthSupport />,
    //   asMessage: true,
    //   trigger: 'menu',
    // },
    // {
    //   id: 'financial_problems',
    //   component: <FinancialSupport />,
    //   asMessage: true,
    //   trigger: 'menu',
    // },
    // {
    //   id: 'love_problems',
    //   component: <LoveSupport />,
    //   asMessage: true,
    //   trigger: 'menu',
    // },
    // {
    //   id: 'ragging',
    //   component: <RaggingSupport />,
    //   asMessage: true,
    //   trigger: 'menu',
    // },
    {
      id: '1',
      message: 'Hi there! What is your name?',
      trigger: 'name',
    },
    // Save the student's name in context
    {
      id: 'name',
      user: true,
      trigger: '3',
      validator: (value) => {
        if (!value || value.trim() === '') {
          return 'Please enter your name';
        }
        return true;
      },
      // Save the student's name in context
      onSet: (value, props) => {
        props.setContext({ ...props.context, name: value });
       
      },
    },
    // Provide options for different types of problems
    {
      id: '3',
      message: 'What type of problem do you have?',
      trigger: 'problem_type',
    },
    {
      id: 'problem_type',
      options: [
        { value: 'personal', label: 'Personal Problems', trigger: 'personal' },
        { value: 'academic', label: 'Academic Problems', trigger: 'academic' },
        { value: 'health', label: 'Health Problems', trigger: 'health' },
        { value: 'love', label: 'Love Problem', trigger: 'love' },
        // { value: 'ragging', label: 'Ragging Problem', trigger: 'ragging' },
        // { value: 'financial', label: 'Financial Problems', trigger: 'financial' },
      ],
    },
    // Based on the problem type, ask relevant questions
    {
      id: 'personal',
      message: 'Can you please tell me more about your personal problem?',
      trigger: 'personal_desc',
    },
    {
      id: 'personal_desc',
      user: true,
      trigger: 'end_message',
      // Save the user input in context
      onSet: (value, props) => {
        props.setContext({ ...props.context, personal_problem: value });
        console.log(value)
      },
    },
    {
      id: 'academic',
      message: 'Can you please tell me more about your academic problem?',
      trigger: 'academic_desc',
    },
    {
      id: 'academic_desc',
      user: true,
      trigger: 'end_message',
      // Save the user input in context
      onSet: (value, props) => {
        props.setContext({ ...props.context, academic_problem: value });
      },
    },
    {
      id: 'health',
      message: 'Can you please tell me more about your health problem?',
      trigger: 'health_desc',
    },
    {
      id: 'health_desc',
      user: true,
      trigger: 'end_message',
      // Save the user input in context
      onSet: (value, props) => {
        props.setContext({ ...props.context, health_problem: value });
      },
    },
    {
      id: 'love',
      message: 'Can you please tell me more about your love problem?',
      trigger: 'love_desc',
    },
    {
      id: 'love_desc',
      user: true,
      trigger: 'end_message',
      // Save the user input in context
      onSet: (value, props) => {
        props.setContext({ ...props.context, love_problem: value });
      },
    },
    // Repeat the same structure for other problem types
    // ...
    {
      id: 'end_message',
      message: 'Thank you for reaching out. Our expert will contact you soon.',
      end: true,
    },
  ];
  
  return (
    <div className='container d-flex justify-content-center align-items-center login'>
      <div className=" p-4">
        <h2 className="text-center">Login</h2>
        <div className="d-flex justify-content-center">
          <button onClick={googleSignIn} className="btn btn-primary btn-lg">
            {/* <img src={signin} alt="not found" style={{ width: '50%', height: '50%' }} /> */}
            <span className="ms-3">Sign in with Google</span>
          </button>
        </div>
      </div>
      <div style={{position:'absolute' , top: '4rem', right:'0rem'}}>
      <ThemeProvider theme={theme}>
      <ChatBot
       steps={steps}
       headerTitle="Student Psychology Problems Counseling Expert System"
       botAvatar={img23}
       floating={true}
       
       width="90%"
       height="80%"
       placeholder="Type your message here..."
       enableMobileAutoFocus={true}
       userAvatar="https://i.imgur.com/vLGwV7O.png"
       cache={false}
       recognitionEnable={true}
       recognitionLang="en-US"
       recognitionContinuous={true}
       inputTextFieldHint="Type your message here..."
       inputTextFieldName="Type your message here..."
      />
      </ThemeProvider>

      </div>
     
    </div>
  );
}

export default Home;

