export const quizData = {
  quizTitle: 'React Quiz Component Demo',
  nrOfQuestions: '6',
  questions: [
    {
      question:
        'How can you access the state of a component from inside of a member function?',
      questionType: 'text',
      questionPic: 'https://dummyimage.com/600x400/000/fff&text=X', // if you need to display Picture in Question
      answerSelectionType: 'single',
      answers: [
        'this.getState()',
        'this.prototype.stateValue',
        'this.state',
        'this.values',
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '20',
    },
    {
      question: 'ReactJS is developed by _____?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Google Engineers', 'Facebook Engineers'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '20',
    },
    {
      question: 'ReactJS is an MVC based framework?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['True', 'False'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '10',
    },
    {
      question: 'Which of the following concepts is/are key to ReactJS?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'Component-oriented design',
        'Event delegation model',
        'Both of the above',
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '30',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      questionType: 'photo',
      answerSelectionType: 'single',
      answers: [
        'https://dummyimage.com/600x400/000/fff&text=A',
        'https://dummyimage.com/600x400/000/fff&text=B',
        'https://dummyimage.com/600x400/000/fff&text=C',
        'https://dummyimage.com/600x400/000/fff&text=D',
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '20',
    },
    {
      question: 'What are the advantages of React JS?',
      questionType: 'text',
      answerSelectionType: 'multiple',
      answers: [
        'React can be used on client and as well as server side too',
        'Using React increases readability and makes maintainability easier',
        'React components have lifecycle events that fall into State/Property Updates',
        'React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer',
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '20',
    },
  ],
};
