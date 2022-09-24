import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import Test from "./Test";
import Myavatar from "./Myavatar";
import Useravatar from "./Useravatar";
import Mymessages from "./Mymessages";
import Question1 from "./Questions/Question1";
import Conclusion1 from "./Questions/Conclusions/Conclusion1";
import Question2 from "./Questions/Question2";
import Conclusion_quesiton2_option1 from "./Questions/Conclusions/Conclusion_quesiton2_option1";
import Conclusion_quesiton2_option2 from "./Questions/Conclusions//Conclusion_quesiton2_option2";
import Conclusion_quesiton2_option3 from "./Questions/Conclusions//Conclusion_question2_option3";
import Question3 from "./Questions/Question3";




const config = {
    botName: 'vijay',
    lang: "no",
    customStyles: {
      botMessageBox: {
        backgroundColor: "gray",
        color: "black",
        padding: '0px !important',
        margin: '0px',
        boxShadow: '0px 0px 1px 1px lightblue'

      },
      chatButton: {
       
      },
      
    },
  initialMessages: [ createChatBotMessage('hi, what is your name?')],
  widgets: [
  {
    widgetName: 'question1',
    widgetFunc: (props) => <Question1 {...props}/>
  },
  {
    widgetName: 'question2',
    widgetFunc: (props) => <Question2 {...props}/>
  },
  {
    widgetName: 'conclusion1',
    widgetFunc: (props) => <Conclusion1 {...props}/>
  },
  ,
  {
    widgetName: 'question3',
    widgetFunc: (props) => <Question3 {...props}/>
  },
  {
    widgetName: 'conclusion2_option1',
    widgetFunc: (props) => <Conclusion_quesiton2_option1 {...props}/>
  },
  {
    widgetName: 'conclusion2_option2',
    widgetFunc: (props) => <Conclusion_quesiton2_option2 {...props}/>
  }
  ,
  {
    widgetName: 'conclusion2_option3',
    widgetFunc: (props) => <Conclusion_quesiton2_option3 {...props}/>
  }
],
  customComponents: {
    // Replaces the default header
   header: () => <div style={{backgroundColor: 'gainsboro', textAlign: 'center'}}>Test your Depression status</div>,
   botAvatar: (props) => <Myavatar {...props} />,
   userAvatar: (props) => <Useravatar {...props} />,
  },
  customMessages: {
    custom: (props) => <Mymessages {...props} />,
  },
  }

export default config