// import React, { useState } from 'react';
// import axios from 'axios';
// import '../Style/MentalHealth.css';


// import { IconButton, SendIcon } from '@material-ui/core';



// const MentalHealth = () => {
//   const [problem, setProblem] = useState('');
//   const [response, setResponse] = useState([]);
//   const [showQuestions, setShowQuestions] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (event) => {
//     setProblem(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://127.0.0.1:5001/mentalhealth', { problem })
//       .then((res) => {
//         setResponse(res.data);
//         setShowQuestions(true);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const handleAnswerClick = (optionIndex, suggestions) => {
    
//   };
//   return (
//     <div className="container">
      
//       <form onSubmit={handleSubmit} className="problem-form">
//   <label htmlFor="problem-input">Enter your psychology problem:</label>
//   <textarea
//     id="problem-input"
//     value={problem}
//     onChange={handleInputChange}
//     className="input-field"
//   />
//   <IconButton type="submit" className="submit-button">
//     <SendIcon />
//   </IconButton>
// </form>

      
//     </div>
//   );
  

// }
// export default MentalHealth;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Button, TextField } from '@material-ui/core';
// import '../Style/MentalHealth.css';

// const MentalHealth = () => {
//   const [problem, setProblem] = useState('');
//   const [response, setResponse] = useState([]);
//   const [showQuestions, setShowQuestions] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (event) => {
//     setProblem(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('/api/psychology-problems', { problem })
//       .then((res) => {
//         setResponse(res.data);
//         setSuggestions(res.data[currentQuestionIndex].suggestions);
//         setShowQuestions(true);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const handleAnswerClick = (optionIndex) => {
//     const currentQuestion = response[currentQuestionIndex];
//     const selectedOption = currentQuestion.options[optionIndex];
//     const answer = {
//       question: currentQuestion.question,
//       option: selectedOption,
//       suggestions: currentQuestion.suggestions
//     };
//     const newAnswers = [...answers];
//     newAnswers[currentQuestionIndex] = answer;
//     setAnswers(newAnswers);
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setSuggestions(currentQuestionIndex < response.length - 1 ? response[currentQuestionIndex + 1].suggestions : []);
//   };

//   return (
//     <div className="container">
//       {!showQuestions && (
//         <form onSubmit={handleSubmit} className="problem-form">
//           <label htmlFor="problem-input">Enter your psychology problem:</label>
//           <input
//             type="text"
//             id="problem-input"
//             value={problem}
//             onChange={handleInputChange}
//             className="input-field"
//           />
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       )}
//       {showQuestions && (
//         <div className="question-container">
//           {currentQuestionIndex < response.length && (
//             <>
//               <h3 className="question">{response[currentQuestionIndex].question}</h3>
//               <div className="options-container">
//                 {response[currentQuestionIndex].options.map((option, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAnswerClick(index)}
//                     className="option-button"
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//               {currentQuestionIndex > 0 && (
//                 <button
//                   onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
//                   className="back-button"
//                 >
//                   Back
//                 </button>
//               )}
//             </>
//           )}
//           {currentQuestionIndex === response.length && (
//             <div className="answers-container">
//               <h3 className="answer-header">Answers</h3>
//               {answers.map((answer, index) => (
//                 <div key={index} className="answer">
//                   <h4>{answer.question}</h4>
//                   <p>{answer.option}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//           <div className="suggestions-container">
//             <h3 className="suggestions-header">Suggestions</h3>
//             <ul className="suggestions-list">
//               {response[currentQuestionIndex].suggestions.map((suggestion, index) => (
//                 <li key={index} className="suggestion">
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
// //   );
//               }
//               export default MentalHealth;  
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../Style/MentalHealth.css';

// const MentalHealth = () => {
//   const [problem, setProblem] = useState('');
//   const [response, setResponse] = useState([]);
//   const [showQuestions, setShowQuestions] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState([]);

//   const handleInputChange = (event) => {
//     setProblem(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('/api/psychology-problems', { problem })
//       .then((res) => {
//         setResponse(res.data);
//         setShowQuestions(true);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const handleAnswerClick = (optionIndex) => {
//     const currentQuestion = response[currentQuestionIndex];
//     const selectedOption = currentQuestion.options[optionIndex];
//     const answer = {
//       question: currentQuestion.question,
//       option: selectedOption,
//       suggestions: currentQuestion.suggestions
//     };
//     const newAnswers = [...answers];
//     newAnswers[currentQuestionIndex] = answer;
//     setAnswers(newAnswers);
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };
//   return (
//     <div className="container">
//       {!showQuestions && (
//         <form onSubmit={handleSubmit} className="problem-form">
//           <label htmlFor="problem-input">Enter your psychology problem:</label>
//           <input
//             type="text"
//             id="problem-input"
//             value={problem}
//             onChange={handleInputChange}
//             className="input-field"
//           />
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       )}
//       {showQuestions && (
//         <div className="question-container">
//           {currentQuestionIndex < response.length && (
//             <>
//               <h3 className="question">{response[currentQuestionIndex].question}</h3>
//               <div className="options-container">
//                 {response[currentQuestionIndex].options.map((option, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAnswerClick(index)}
//                     className="option-button"
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//               {currentQuestionIndex > 0 && (
//                 <button
//                   onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
//                   className="back-button"
//                 >
//                   Back
//                 </button>
//               )}
//             </>
//           )}
//           {currentQuestionIndex === response.length && (
//             <div className="answers-container">
//               <h3 className="answer-header">Answers</h3>
//               {answers.map((answer, index) => (
//                 <div key={index} className="answer">
//                   <h4>{answer.question}</h4>
//                   <p>{answer.option}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//           <div className="suggestions-container">
//             <h3 className="suggestions-header">Suggestions</h3>
//             <ul className="suggestions-list">
//               {suggestions.map((suggestion, index) => (
//                 <li key={index} className="suggestion">
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
  
  
// }
// export default MentalHealth;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form, Button, Card } from 'react-bootstrap';

// function MentalHealth() {
//   const [inputValue, setInputValue] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showInput, setShowInput] = useState(true);
//   const [showQuestions, setShowQuestions] = useState(false);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [suggestions, setSuggestions] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5001/mentalhealth', { input: inputValue });
//       setQuestions(response.data);
//       setShowInput(false);
//       setShowQuestions(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNextClick = () => {
//     const nextIndex = currentQuestionIndex + 1;
//     if (nextIndex < questions.length) {
//       setCurrentQuestionIndex(nextIndex);
//     } else {
//       setShowQuestions(false);
//       setShowSuggestions(true);
//       const lastQuestion = questions[questions.length - 1];
//       setSuggestions(lastQuestion.suggestions);
//     }
//   };

//   const handlePreviousClick = () => {
//     const previousIndex = currentQuestionIndex - 1;
//     if (previousIndex >= 0) {
//       setCurrentQuestionIndex(previousIndex);
//     }
//   };

//   return (
//     <Container>
//       <Card>
//         <Card.Body>
//           {showInput && (
//             <Form onSubmit={handleSubmit}>
//               <Form.Group>
//                 <Form.Label>Enter your input:</Form.Label>
//                 <Form.Control type="text" value={inputValue} onChange={handleInputChange} />
//               </Form.Group>
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           )}

//           {showQuestions && (
//             <>
//               <h3>Question {currentQuestionIndex + 1}</h3>
//               <p>{questions[currentQuestionIndex].question}</p>
//               <Form>
//                 {questions[currentQuestionIndex].options.map((option, index) => (
//                   <Form.Check
//                     key={index}
//                     type="radio"
//                     name="options"
//                     label={option.option}
//                     checked={selectedOption === option.option}
//                     onChange={() => handleOptionClick(option.option)}
//                   />
//                 ))}
//               </Form>
//               <div>
//                 <Button variant="secondary" onClick={handlePreviousClick} disabled={currentQuestionIndex === 0}>
//                   Previous
//                 </Button>{' '}
//                 <Button variant="primary" onClick={handleNextClick} disabled={!selectedOption}>
//                   Next
//                 </Button>
//               </div>
//             </>
//           )}

//           {showSuggestions && (
//             <>
//               <h3>Suggestions:</h3>
//               <p>{suggestions}</p>
//             </>
//           )}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// export default MentalHealth;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form, Button, Card, ListGroup } from 'react-bootstrap';
// import '../Style/MentalHealth.css';



// function MentalHealth() {
// const [problem, setProblem] = useState('');
// const [questions, setQuestions] = useState([]);
// const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// const [selectedOption, setSelectedOption] = useState(null);
// const [showResults, setShowResults] = useState(false); // Add state for showResults
// const [suggestions, setSuggestions] = useState([]);

// const handleProblemChange = (event) => {
//   setProblem(event.target.value);
// };

// const handleStartButtonClick = async () => {
//   try {
//     const response = await axios.post('http://127.0.0.1:5001/mentalhealth', { problem });
//     setQuestions(response.data);
//     setCurrentQuestionIndex(0);
//     setSelectedOption(null);
//     setShowResults(false); // Reset showResults state when starting new questions
//   } catch (error) {
//     console.error(error);
//   }
// };

// const handleOptionClick = (option) => {
//   setSelectedOption(option);
// };

// const handleBackButtonClick = () => {
//   if (currentQuestionIndex > 0) {
//     setCurrentQuestionIndex(currentQuestionIndex - 1);
//     setSelectedOption(null);
//   }
// };

// const handleNextButtonClick = () => {
//   if (selectedOption === null) {
//     return;
//   }

//   if (currentQuestionIndex < questions.length - 1) {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setSelectedOption(null);
//   } else {
//     setShowResults(true); // Set showResults state to true at end of questions
//   }
// };

// const handleSubmit = async () => {
//   try {
//     const response = await axios.post('http://127.0.0.1:5001/mentalhealth/results', {
//       answers: questions.map((question) => {
//         return {
//           id: question.id,
//           answer: question.options.findIndex((option) => option === selectedOption),
//         };
//       }),
//     });
//     setQuestions(response.data);
//     setCurrentQuestionIndex(0);
//     setSelectedOption(null);
//     setShowResults(false);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const currentQuestion = questions[currentQuestionIndex];

// return (
//   <div className="psychology-counseling">
//     <Container>
//       <h1 className="text-center mb-4">Psychology Counseling</h1>
//       <Form.Group controlId="problem">
//         <Form.Label>Problem:</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           placeholder="Enter your problem"
//           value={problem}
//           onChange={handleProblemChange}
//         />
//       </Form.Group>
//       <div className="d-flex justify-content-center">
//         <Button variant="primary" onClick={handleStartButtonClick}>
//           Start
//         </Button>
//       </div>
//       {showResults && (
//         <div className="mt-4">
//           <h3>Suggestions:</h3>
//           <ListGroup variant="flush">
//             {suggestions.map((suggestion, index) => (
//               <ListGroup.Item key={index}>
//                 {suggestion.text} - Grade: {suggestion.grade}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </div>
//       )}
//       {currentQuestion && (
//         <Card className="mt-4">
//           <Card.Header className="text-center">{currentQuestion.question}</Card.Header>
//           <ListGroup variant="flush">
//             {currentQuestion.options.map((option) => (
//               <ListGroup.Item
//                 key={option.id}
//                 className={selectedOption === option ? "selected" : ""}
//                 onClick={() => handleOptionClick(option)}
//               >
//                 {option.text}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//           <div className="d-flex justify-content-between mt-4">
//             <Button variant="primary" type="button" onClick={handleBackButtonClick}>
//               Back
//             </Button>
//             {currentQuestionIndex === questions.length - 1 ? (
//               <Button variant="primary" type="button" onClick={handleSubmit}>
//                 Submit
//               </Button>
//             ) : (
//               <Button variant="primary" type="button" onClick={handleNextButtonClick}>
//                 Next
//               </Button>
//             )}
//           </div>
//         </Card>
//       )}
//     </Container>
//   </div>
// )


//         }
//         export default MentalHealth;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Form, ListGroup, Container, Row, Col } from 'react-bootstrap';
// import '../Style/MentalHealth.css';

// function MentalHealth() {
//   const [problem, setProblem] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [suggestions, setSuggestions] = useState([]);

//   const handleProblemChange = (event) => {
//     setProblem(event.target.value);
//   };

//   const handleStartButtonClick = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:5001/mentalhealth', { problem });
//       setQuestions(response.data);
//       setCurrentQuestionIndex(0);
//       setSelectedOption(null);
//       setSuggestions([]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNextButtonClick = () => {
//     if (selectedOption === null) {
//       return;
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedOption(null);
//     } else {
//       showSuggestions();
//     }
//   };

//   const handleBackButtonClick = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       setSelectedOption(null);
//       setSuggestions([]);
//     }
//   };

//   const showSuggestions = () => {
//     if (currentQuestion && currentQuestion.suggestions) {
//       if (currentQuestion.options.some((option) => option.grade === 5)) {
//         return currentQuestion.suggestions.filter((suggestion) => suggestion !== "");
//       } else if (currentQuestion.options.some((option) => option.grade === 3)) {
//         return [currentQuestion.suggestions.find((suggestion) => suggestion !== "")];
//       }
//     }
//     return [];
//   };
  

//   const currentQuestion = questions[currentQuestionIndex];
//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md={8}>
//           <h1 className="text-center mb-4">Psychology Counseling</h1>
//           <Form>
//             <Form.Group controlId="problem">
//               <Form.Label>Problem</Form.Label>
//               <Form.Control as="textarea" rows={3} value={problem} onChange={handleProblemChange} />
//             </Form.Group>
//             <Button variant="primary" type="button" onClick={handleStartButtonClick}>
//               Start
//             </Button>
//           </Form>
//           {currentQuestion && (
//             <div className="mt-4">
//               <h2>{currentQuestion.question}</h2>
//               <ListGroup className="mt-3">
//                 {currentQuestion.options.map((option) => (
//                   <ListGroup.Item
//                     key={option.id}
//                     className={`text-center ${selectedOption === option ? 'selected' : ''}`}
//                     onClick={() => handleOptionClick(option)}
//                     action
//                   >
//                     {option.text}
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//               <div className="d-flex justify-content-between mt-4">
//                 <Button variant="secondary" type="button" onClick={handleBackButtonClick}>
//                   Back
//                 </Button>
//                 <Button variant="primary" type="button" onClick={handleNextButtonClick}>
//                   Next
//                 </Button>
//               </div>
//             </div>
//           )}
//           {showSuggestions && (
//             <div className="mt-4">
//               <h2 className="text-center mb-4">Suggestions</h2>
//               <ListGroup>
//                 {currentQuestion.suggestions
//                   .filter((suggestion) => suggestion.grade === 5)
//                   .map((suggestion, index) => (
//                     <ListGroup.Item key={index} className="text-center">
//                       {suggestion.text}
//                     </ListGroup.Item>
//                   ))}
//                 {currentQuestion.suggestions
//                   .filter((suggestion) => suggestion.grade === 3)
//                   .slice(0, 1)
//                   .map((suggestion, index) => (
//                     <ListGroup.Item key={index} className="text-center">
//                       {suggestion.text}
//                     </ListGroup.Item>
//                   ))}
//               </ListGroup>
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
  

//                 }
//                 export default MentalHealth;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Form, ListGroup, Container, Row, Col } from 'react-bootstrap';
// import '../Style/MentalHealth.css';

// function MentalHealth() {
//   const [problem, setProblem] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [suggestions, setSuggestions] = useState([]);

//   const handleProblemChange = (event) => {
//     setProblem(event.target.value);
//   };

//   const handleStartButtonClick = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:5001/mentalhealth', { problem });
//       setQuestions(response.data);
//       setCurrentQuestionIndex(0);
//       setSelectedOption(null);
//       setSuggestions([]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     if (option.suggestions) {
//       setSuggestions([...suggestions, ...option.suggestions]);
//     }
//   };

//   const handleNextButtonClick = () => {
//     if (selectedOption === null) {
//       return;
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedOption(null);
//     } else {
//       // TODO: Handle end of questions
//       let grade = 0;
//       let suggestionList = [];
//       questions.forEach((question) => {
//         const selected = question.options.find((option) => option.id === selectedOption.id);
//         if (selected) {
//           grade += selected.grade;
//           if (selected.suggestions) {
//             suggestionList = [...suggestionList, ...selected.suggestions];
//           }
//         }
//       });
//       if (grade >= 5) {
//         setSuggestions([...suggestions, ...suggestionList]);
//       } else if (grade === 3) {
//         setSuggestions([suggestionList[0]]);
//       }
//     }
//   };

//   const handleBackButtonClick = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       setSelectedOption(null);
//       if (suggestions.length > 0) {
//         const lastQuestion = questions[currentQuestionIndex - 1];
//         const lastSelectedOption = lastQuestion.options.find((option) => option.id === selectedOption.id);
//         if (lastSelectedOption && lastSelectedOption.suggestions) {
//           const removedSuggestions = lastSelectedOption.suggestions.filter(
//             (suggestion) => !suggestions.includes(suggestion)
//           );
//           setSuggestions([...suggestions, ...removedSuggestions]);
//         }
//       }
//     }
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md={8}>
//           <h1 className="text-center mb-4">Psychology Counseling</h1>
//           <Form>
//             <Form.Group controlId="problem">
//               <Form.Label>Problem</Form.Label>
//               <Form.Control as="textarea" rows={3} value={problem} onChange={handleProblemChange} />
//             </Form.Group>
//             <Button variant="primary" type="button" onClick={handleStartButtonClick}>
//               Start
//             </Button>
//           </Form>
//           {currentQuestion && (
//             <div className="mt-4">
//               <h2>{currentQuestion.question}</h2>
//               <ListGroup className="mt-3">
//                 {currentQuestion.options.map((option) => (
//                   <ListGroup.Item
//                     key={option.id}
//                     className={`text-center ${selectedOption === option ? 'selected' : ''}`}
//                     onClick={() => handleOptionClick(option)}
//                     action
//                   >
//                     {option.text}
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//               <div className="d-flex justify-content-between mt-4">
//                 {suggestions.length > 0 && (
//                   <div className="mt-3">
//                     <h4 className="mb-3">Suggestions:</h4>
//                     {suggestions.map((suggestion, index) => (
//                       <p key={index} className="mb-1">
//                         {suggestion}
//                       </p>
//                     ))}
//                   </div>
//                 )}
//                 <Button variant="secondary" type="button" onClick={handleBackButtonClick}>
//                   Back
//                 </Button>
//                 {currentQuestionIndex < questions.length - 1 ? (
//                   <Button variant="primary" type="button" onClick={handleNextButtonClick}>
//                     Next
//                   </Button>
//                 ) : (
//                   <Button variant="primary" type="button" >
//                     Finish
//                   </Button>
//                 )}
//               </div>
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
  
// }
// export default MentalHealth;

import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, ListGroup } from 'react-bootstrap';
import '../Style/MentalHealth.css';

function MentalHealth() {
  const [problem, setProblem] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleProblemChange = (event) => {
    setProblem(event.target.value);
  };

  const handleStartButtonClick = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5001/mentalhealth', { problem });
      setQuestions(response.data);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      console.log('it is mental health response', response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleBackButtonClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
    }
  };

  const handleNextButtonClick = () => {
    if (selectedOption === null) {
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      // TODO: Handle end of questions
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="psychology-counseling">
      <Container>
       {questions.length === 0 &&(<><h1 className="text-center mb-4">Psychology Counseling</h1>
        <Form.Group controlId="problem">
          <Form.Label>Problem:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your problem"
            value={problem}
            onChange={handleProblemChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleStartButtonClick}>
            Start
          </Button>
        </div></>)} 
        {currentQuestion && (
          <Card className="mt-4">
            <Card.Header className="text-center">{currentQuestion.question}</Card.Header>
            <ListGroup variant="flush">
              {currentQuestion.options.map((option) => (
                <ListGroup.Item
                  key={option.id}
                  className={selectedOption === option ? 'selected' : ''}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.text}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="d-flex justify-content-between mt-4">
                <Button variant="primary" type="button" onClick={handleBackButtonClick}>
                  Back
                </Button>
                <Button variant="primary" type="button" onClick={handleNextButtonClick}>
                  Next
                </Button>
              </div>
          </Card>
        )}
      </Container>
    </div>
  );
}

export default MentalHealth;




// // import React from 'react'
// // import {Card} from 'react-bootstrap';

// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // // import EmotionDetection from '../Components/EmotionDetection';

// // function MentalHealth() {
// //   const [users, setUsers] = useState(0);
// //   const [Questions, setQuestion] = useState([]);
// //   const [questionId, setQuestionId] = useState(1);



// //   const handler = (questionId, title, predicate, argument, option, score) => {
// //     console.log(predicate, argument, option, score);
// //     setQuestionId(prev => prev + 1);
// //     axios.post('http://127.0.0.1:5001/data', { questionId, title, predicate, argument, option, score }, {
// //       onDownloadProgress: function (progressEvent) {
// //         console.log(progressEvent)
// //       },

// //     })
// //       .then(data => {
// //         console.log(data)

// //       })
// //       .catch(err => console.log(err));


// //   }

// //   //submit handler...
// //   const submitHandler = () => {

// //     axios.post('http://127.0.0.1:5000/submit', { users: users })
// //       .then(res => {
// //         console.log('successfully submited', res.data.totalScore);
// //         if (res.data.success) {
// //           res.data.questions.map(question => {
// //             console.log(question.title, question.option)
// //           })

// //         }

// //       })
// //       .catch(err => console.log('error of submit'))
// //   }

// //   useEffect(() => {

// //     axios.get('http://127.0.0.1:5001/questions', {})
// //       .then(res => setQuestion(res.data))
// //       .catch(err => console.log('error while fetching questions'));


// //     // axios.get('http://127.0.0.1:5000/find')
// //     //   .then(res => {
// //     //     if (res.data.success) setUsers(res.data.totalCount + 1);
// //     //   })
// //     //   .catch(error => console.log('count error'));

// //     // alanBtn({
// //     //   key: '12aa68f90b39e4cc4651b0d8e336f2a12e956eca572e1d8b807a3e2338fdd0dc/stage',
// //     //   onCommand: ({command}) => {
// //     //       if(command === 'test command') {
// //     //         console.log('alan testing');
// //     //       }
// //     //   }
// //     // });




// //   }, []);

// //   return (
// //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
// //     <Card>
// //     <Card.Body>This is some text within a card body.</Card.Body>
// //   </Card>
     
// //       <div className="container-fluid ">
// //         <div className="row ">
// //           <div className="col-sm-8">
// //             <div className="">
// //               {/* <h1 className="text-end">total users: {users}</h1> */}

// //               {
// //                 Questions.filter(question => question.id === questionId).map(question => {
// //                   if (question.id === 4) {
// //                     return (
// //                       <div> <button className="btn btn-success" onClick={submitHandler}>sumbit</button> </div>
// //                     )
// //                   } else {
// //                     return (
// //                       <div className="m-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
// //                         <div className="container-fluid text-center">
// //                           <h4 className="text-white">{question.title}</h4>
// //                         </div>
// //                         <div className="text-center">
// //                           {
// //                             question.options.map(option => (
// //                               <div className="m-3">
// //                                 <button className=" text-white btn btn-secondary btn-sm mx-2" style={{ boxShadow: '1px 1px 2px 2px white', width: '200px' }} onClick={() => handler(question.id, question.title, question.predicate, question.argument, option.a, option.score)}>{option.a}</button>
// //                               </div>
// //                             ))
// //                           }
// //                         </div>


// //                       </div>
// //                     )
// //                   }



// //                 })
// //               }

// //               {/* // <button className="btn btn-primary btn-sm" onClick={submitHandler}>submit</button> */}
// //             </div>

// //           </div>
// //           <div className="col-sm-4">
// //             {/* <EmotionDetection/> */}
// //           </div>

// //         </div>
// //       </div>




// //     </div>
// //   )
// // }

// // export default MentalHealth
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function MentalHealth() {
// //   const [problem, setProblem] = useState('');
// //   const [questions, setQuestions] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedOption, setSelectedOption] = useState(null);

// //   const handleProblemChange = (event) => {
// //     setProblem(event.target.value);
// //   };

// //   const handleStartButtonClick = async () => {
// //     try {
// //       const response = await axios.post('/api/psychology-counseling', { problem });
// //       setQuestions(response.data);
// //       setCurrentQuestionIndex(0);
// //       setSelectedOption(null);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleOptionClick = (option) => {
// //     setSelectedOption(option);
// //   };

// //   const handleNextButtonClick = () => {
// //     if (selectedOption === null) {
// //       return;
// //     }

// //     if (currentQuestionIndex < questions.length - 1) {
// //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// //       setSelectedOption(null);
// //     } else {
// //       // TODO: Handle end of questions
// //     }
// //   };

// //   const currentQuestion = questions[currentQuestionIndex];

// //   return (
// //     <div>
// //       <h1>Psychology Counseling</h1>
// //       <label>
// //         Problem:
// //         <textarea value={problem} onChange={handleProblemChange} />
// //       </label>
// //       <button onClick={handleStartButtonClick}>Start</button>
// //       {currentQuestion && (
// //         <div>
// //           <h2>{currentQuestion.question}</h2>
// //           <ul>
// //             {currentQuestion.options.map((option) => (
// //               <li
// //                 key={option.id}
// //                 className={selectedOption === option ? 'selected' : ''}
// //                 onClick={() => handleOptionClick(option)}
// //               >
// //                 {option.text}
// //               </li>
// //             ))}
// //           </ul>
// //           <button onClick={handleNextButtonClick}>Next</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default MentalHealth;
