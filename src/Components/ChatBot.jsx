import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

import TimeStressManagement from './TimeStressManagement';
import PersonalProblems from './PersonalProblems';
import AcademicResources from './AcademicResources';
import HealthSupport from './HealthSupport';
import FinancialProblems from './FinancialProblems';
import LoveProblems from './LoveProblems';
import Ragging from './Ragging';

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

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleComplete = () => {
    setIsOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Psychology Counseling Chatbot"
        recognitionEnable={true}
        steps={[
          {
            id: '1',
            message: 'Hello, how can I help you today?',
            trigger: 'menu',
          },
          {
            id: 'menu',
            options: [
              {
                value: '1',
                label: 'Time and Stress Management',
                trigger: 'time_stress_management',
              },
              {
                value: '2',
                label: 'Personal Problems',
                trigger: 'personal_problems',
              },
              {
                value: '3',
                label: 'Academic Resources',
                trigger: 'academic_resources',
              },
              {
                value: '4',
                label: 'Health Support',
                trigger: 'health_support',
              },
              {
                value: '5',
                label: 'Financial Problems',
                trigger: 'financial_problems',
              },
              {
                value: '6',
                label: 'Love Problems',
                trigger: 'love_problems',
              },
              {
                value: '7',
                label: 'Ragging',
                trigger: 'ragging',
              },
            ],
          },
          {
            id: 'time_stress_management',
            component: <TimeStressManagement />,
            asMessage: true,
            trigger: 'menu',
          },
          {
            id: 'personal_problems',
            component: <PersonalProblems />,
            asMessage: true,
            trigger: 'menu',
          },
          {
            id: 'academic_resources',
            component: <AcademicResources />,
            asMessage: true,
            trigger: 'menu',
          },
          {
            id: 'health_support',
            component: <HealthSupport />,
            asMessage: true,
            trigger: 'menu',
          },
          {
            id: 'financial_problems',
            component: <FinancialProblems />,
            asMessage: true,
            trigger: 'menu',
          },
          {
            id: 'love_problems',
            component: <LoveProblems />,
            asMessage: true,
            trigger: 'menu',
          },
          {
            id: 'ragging',
            component: <Ragging />,
            asMessage: true,
            trigger: 'menu',
          },
        ]}
        isOpen={isOpen}
        handleClose={handleClose}
        handleComplete={handleComplete}
      />
      </ThemeProvider>
  )
    }
    export default ChatBot;
     
