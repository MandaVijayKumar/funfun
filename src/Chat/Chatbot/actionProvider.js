// in ActionProvider.jsx
import React from 'react';
import { create } from 'react-test-renderer';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //handleName function to ask age
  const handleName = (data) => {
    window.localStorage.setItem('name',data);
    const botMessage = createChatBotMessage(`Are you feelings of sadness, hopelessness?` , {
      widget: 'question1'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  
 //question 1 with option 1
  const handle_question1_option1 = () => {
    const newMessage = createChatBotMessage(' Fellings of sadness and hopelessness are key signs of depression and if you are not suffering from such feelings, it is unlikely that you are depressed. However, not all depression mainfests in the same way.', {
      widget: 'conclusion1'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));
  }

   //question 1 with option 2
  const handle_question1_option2 = () => {
    const newMessage = createChatBotMessage(' Fellings of sadness and hopelessness are key signs of depression and if you are not suffering from such feelings, it is unlikely that you are depressed. However, not all depression mainfests in the same way.', {
      widget: 'conclusion1'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  }

  //question 1 with option 3
  const handle_question1_option3 = () => {
    
    const newMessage = createChatBotMessage(' Fellings of sadness and hopelessness are key signs of depression and if you are not suffering from such feelings, it is unlikely that you are depressed. However, not all depression mainfests in the same way.', {
      widget: 'conclusion1'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));
  }

  //question 1 with option 4
  const handle_question1_option4 = () => {
    const newMessage = createChatBotMessage(' Fellings of sadness and hopelessness are key signs of depression and if you are not suffering from such feelings, it is unlikely that you are depressed. However, not all depression mainfests in the same way.', {
      widget: 'conclusion1'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));
  }
  
  // question 2 with option 1
  const continueHandler1 = () => {
    const botMessage = createChatBotMessage(`Do you find it hard to find pleasuer in activities you used to enjoy` , {
      widget: 'question2'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handle_question2_option1 = () => {
    
    const newMessage = createChatBotMessage('A common symptom of depression is feeling that you can not engage with life or enjoy the activities you used to. if you have given up activities you used to enjoy, this could be a symptom of this condition', {
      widget: 'conclusion2_option1'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));
  }
  const handle_question2_option2 = () => {
    
    const newMessage = createChatBotMessage('People suffering from depression often report a lack of enjoyment in formerly presurable activities. However it may be that with mild depression, sufferes or still able to enjoy certain activities- particulary those that help you to became fully engaged.', {
      widget: 'conclusion2_option2'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));
  }
  const handle_question2_option3 = () => {
    
    const newMessage = createChatBotMessage('A common symptom of depression is feeling that you can not engage with life or enjoy the activities you used to. if you have given up activities you used to enjoy, this could be a symptom of this condition', {
      widget: 'conclusion2_option3'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));
  }
  const continueHandler_question2_option1 = () => {
    const newMessage = createChatBotMessage('Has your appetite changed ?', {
      widget: 'question3'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));

  }
  const continueHandler_question2_option2 = () => {
    const newMessage = createChatBotMessage('Has your appetite changed ?', {
      widget: 'question3'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));

  }
  const continueHandler_question2_option3 = () => {
    const newMessage = createChatBotMessage('Has your appetite changed ?', {
      widget: 'question3'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));

  }

  //question3
  const handle_question3_option1 = () => {
    
    const newMessage = createChatBotMessage('A common symptom of depression is feeling that you can not engage with life or enjoy the activities you used to. if you have given up activities you used to enjoy, this could be a symptom of this condition', {
      widget: 'conclusion3_option1'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));
  }
  const handle_question3_option2 = () => {
    
    const newMessage = createChatBotMessage('A common symptom of depression is feeling that you can not engage with life or enjoy the activities you used to. if you have given up activities you used to enjoy, this could be a symptom of this condition', {
      widget: 'conclusion3_option2'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));
  }
  const handle_question3_option3 = () => {
    
    const newMessage = createChatBotMessage('A common symptom of depression is feeling that you can not engage with life or enjoy the activities you used to. if you have given up activities you used to enjoy, this could be a symptom of this condition', {
      widget: 'conclusion3_option3'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage ],
    }));
  }


  

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleName,
           
            handle_question1_option1,
            handle_question1_option2,
            handle_question1_option3,
            handle_question1_option4,
            continueHandler1,
            continueHandler_question2_option1,
            continueHandler_question2_option2,
            continueHandler_question2_option3,
            handle_question2_option1,
            handle_question2_option2,
            handle_question2_option3,
            handle_question3_option1,
            handle_question3_option2,
            handle_question3_option3,
            
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;