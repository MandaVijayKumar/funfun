// in MessageParser.js
import React, { useEffect, useState } from 'react';

const MessageParser = ({ children, actions }) => {
  let [counter, setCounter] = useState(1);
  
  const parse = (message) => {
   
    if (counter === 1) {
      actions.handleName(message);
      console.log(counter)
      setCounter(counter+1);
      
    }
    console.log(counter)
    if((counter === 2) && message.includes('yes')) {
      actions.handleYes();
      console.log(counter)
      setCounter(counter+1);
    } 
    if((counter === 2) && message.includes('no')) {
      actions.handleNo();
      console.log(counter)
      setCounter(counter+1);
    } 
  };
 

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;