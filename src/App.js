
import axios from "axios";
import { useEffect, useState } from "react";
import {QuestionList } from './Questionaries/Questions'
// import DepressionTest from './Components/DepressionTest';

function App() {

   const [users, setUsers ] = useState(0);
   const [Questions, setQuestion] = useState(QuestionList);
   const [ questionId, setQuestionId ] = useState(1);
   
   
   const handler = ( questionId, title, predicate, argument, option, score ) => {
    console.log( predicate, argument, option, score );
    setQuestionId( prev => prev + 1);
    axios.post('http://127.0.0.1:5000/data',{ users, questionId, title, predicate, argument, option, score}).then(data=>console.log(data)).catch(err=>console.log(err));
   

   }

  useEffect(()=> {
    axios.get('http://127.0.0.1:5000/users')
    .then(res => {
      // console.log(res.json());
      console.log('this get');
      console.log(JSON.stringify(res.data))
      setUsers(JSON.stringify(res.data.count))
    })
    .catch(error =>console.log(error));
    axios.post('http://127.0.0.1/users',{count: 2}).then(res => {console.log('this is post')}).catch(error =>console.log(error));
    
     
  },[]);

  return (
    <div className="container">
      <h1>total users: {users+1}</h1>
      {
        Questions.filter(question =>question.id === questionId).map(question => {
          return (
            <div>
              <div className="container-fluid">
                <h4>{question.title}</h4>
              </div>
              <div className="d-flex">
               {
                question.options.map(option => (
                  <button className="btn btn-success" onClick={()=> handler( question.id, question.title, question.predicate, question.argument, option.a, option.score)}>{option.a}</button>
                ))
               }
              </div>
            
            </div>
          )
        })
      }
      
      
    </div>
  );
}

export default App;
