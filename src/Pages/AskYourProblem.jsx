import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AskYourProblem() {
  const [problem, setProblem] = useState("");
  const [response, setResponse] = useState("");

  const handleProblemChange = (e) => {
    setProblem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://127.0.0.1:5001/counseling", { problem }).then((response) => {
      const { data } = response;
      const { tokens } = data;
     console.log(tokens);
      // Process tokens to identify psychology problems
      const problems = [];
      tokens.forEach((token) => {
        if (token.category === "Psychology Problem") {
          problems.push(token.value);
        }
      });

      // Generate response with suggestions
      let suggestion = "";
      if (problems.length > 0) {
        suggestion = `It seems like you are facing ${problems.join(", ")}. Here are some resources that might help you:\n- Resource 1\n- Resource 2\n- Resource 3`;
      } else {
        suggestion = "I'm sorry, I couldn't identify any psychology problems in your input. Please try again with a different input.";
      }

      setResponse(suggestion);
    });
  };

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProblem">
              <Form.Label>Problem:</Form.Label>
              <Form.Control
                type="text"
                value={problem}
                onChange={handleProblemChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {response && (
            <div className="mt-3">
              <h5>Response:</h5>
              <p>{response}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AskYourProblem;
