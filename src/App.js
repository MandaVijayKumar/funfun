
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';



function App() {

   const [users, setUsers ] = useState(0);
   const [Questions, setQuestion] = useState([]);
   const [ questionId, setQuestionId ] = useState(1);
  
   
   
   const handler = ( questionId, title, predicate, argument, option, score ) => {
    console.log( predicate, argument, option, score );
    setQuestionId( prev => prev + 1);
    axios.post('http://127.0.0.1:5000/data', {  questionId, title, predicate, argument, option, score})
    .then( data => {
      console.log(data)

    })
    .catch(err=>console.log(err));
    

   }

   //submit handler...
   const submitHandler = () => {
    
    axios.post('http://127.0.0.1:5000/submit', {users:users})
    .then(res => {
      console.log('successfully submited',res.data.totalScore);
      if (res.data.success){
        res.data.questions.map(question => {
          console.log(question.title, question.option)
        })

      }
      
    })
    .catch(err => console.log('error of submit'))
   }

  useEffect(()=> {

    axios.get('http://127.0.0.1:5000/questions')
      .then(res => setQuestion(res.data))
      .catch(err => console.log('error while fetching questions'));
   

    axios.get('http://127.0.0.1:5000/find')
    .then(res => {
      if(res.data.success) setUsers(res.data.totalCount + 1);
    })
    .catch(error => console.log('count error'));

    alanBtn({
      key: '12aa68f90b39e4cc4651b0d8e336f2a12e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({command}) => {
          if(command === 'test command') {
            console.log('alan testing');
          }
      }
    });

    
    
     
  },[]);

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sx={{backgroundColor: 'primary.main'}}>
                      <div className="container">
                  <h1>total users: {users}</h1>
                  {
                    Questions.filter(question =>question.id === questionId).map(question => {
                      return (
                        <div>
                          <div className="container-fluid">
                            <h4>{question.title}</h4>
                          </div>
                          <div className="d-flex">
                          {
                            question.options.map( option => (
                              <button className=" btn btn-success " onClick={()=> handler( question.id, question.title, question.predicate, question.argument, option.a, option.score)}>{option.a}</button>
                            ))
                          }
                          </div>

                        
                        </div>
                      )
                    })
                  }
                  
                  <button onClick={submitHandler}>submit</button>
                </div>
            
          </Grid>
          
        </Grid>
    </Box>
    
  );
}

export default React.memo(App);
