import React, { useState } from 'react';
import { TextBlob } from 'textblob';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './StudentDepression.css';


function DepressionTest() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const questions = [
    'Have you been feeling down or hopeless lately?',
    'Have you lost interest in activities you used to enjoy?',
    'Have you experienced changes in your appetite or weight?',
    'Have you had trouble sleeping or sleeping too much?',
    'Do you feel tired or lacking in energy?',
    'Have you felt guilty or worthless?',
    'Have you had difficulty concentrating or making decisions?',
    'Have you had thoughts of self-harm or suicide?'
  ];

  const handleOptionSelect = (option) => {
    setOptions([...options, option]);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      const count = options.filter((option) => option).length;
      const text = new TextBlob(input);

      if (count >= 2 && text.sentiment.polarity <= -0.5) {
        setResult('You may be experiencing symptoms of depression. Please consider talking to a mental health professional.');
      } else {
        setResult('You do not appear to be experiencing symptoms of depression.');
      }
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h2 className="mt-5">Student Depression Test</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} sm={10}>
          {questionIndex < questions.length ? (
            <Form className="mt-5">
              <Form.Group controlId={`option${questionIndex}`}>
                <Form.Label>{questions[questionIndex]}</Form.Label>
                <div className="options">
                  <Form.Check
                    type="radio"
                    id={`option${questionIndex}yes`}
                    label="Yes"
                    checked={options[questionIndex] === true}
                    onChange={() => handleOptionSelect(true)}
                  />
                  <Form.Check
                    type="radio"
                    id={`option${questionIndex}no`}
                    label="No"
                    checked={options[questionIndex] === false}
                    onChange={() => handleOptionSelect(false)}
                  />
                </div>
              </Form.Group>
            </Form>
          ) : (
            <Form className="mt-5">
              <Form.Group controlId="additionalInfo">
                <Form.Label>Enter additional information (optional):</Form.Label>
                <Form.Control as="textarea" rows={3} value={input} onChange={handleInputChange} />
              </Form.Group>
              <Button className="mt-3" variant="primary" onClick={() => setQuestionIndex(0)}>Restart</Button>
            </Form>
          )}
          <p className="result mt-5">{result}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default DepressionTest;
