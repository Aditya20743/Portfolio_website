import LNMbus from './assets/portfolioImages/LNMBus.png'
import Portfolio from './assets/portfolioImages/Portfolio.png'
import Todo from './assets/portfolioImages/todo.png'
import CrowdFunding from './assets/portfolioImages/crowdfunding.png'
import wordle from './assets/portfolioImages/wordle.png'
import LNMConnects from './assets/portfolioImages/LNMConnects1.png'
import ExpenseTracker from './assets/portfolioImages/ExpenseTracker.png'

// eslint-disable-next-line no-sparse-arrays
const ProjectsData = [
  {
    id: 'LNMConnects',
    img: LNMConnects,
    name: 'LNM Connects',
    stack: [
      'HTML',
      ' CSS ',
      ' Javascript ',
      ' React ',
      ' MongoDb ',
      ' Express ',
      ' Node Js ',
    ],
    live: 'https://github.com/Aditya20743/LNMConnects',
    source: 'https://github.com/Aditya20743/LNMConnects',
    description:
      'A user-friendly website intended to facilitating information sharing where students can create posts with news, guidance fostering interactive discussions  ',
  },
  {
    id: 'wordle',
    img: wordle,
    name: 'Wordle Clone',
    stack: ['HTML ', ' CSS ', ' Javascript ', ' React ', ' Context-Api '],
    live: 'https://aditya20743.github.io/Wordle_App/',
    source: 'https://github.com/Aditya20743/Wordle_App',
    description:
      'A Wordle Clone React application for word puzzle enthusiasts, challenging players to guess the secret word in 6 attempts.',
  },
  {
    id: 'LNMbus',
    img: LNMbus,
    name: 'LNMBus Booking',
    stack: [
      'HTML',
      ' CSS ',
      ' Javascript ',
      ' Bootstrap ',
      ' React ',
      ' Firebase ',
    ],
    live: 'https://github.com/Aditya20743/LNMBusBooking/',
    source: 'https://github.com/Aditya20743/LNMBusBooking/',
    description:
      'A MERN Stack Web-Application Platform for Our College for the purpose of Bus Booking and Approving Outpass.',
  },
  {
    id: 'portfolio',
    img: Portfolio,
    name: 'Personal Portfolio Website',
    stack: ['HTML ', ' CSS ', ' Javascript ', ' React '],
    live: '',
    source: 'https://github.com/Aditya20743',
    description:
      ' A interactive React single-page portfolio showcasing my skills, projects, and achievements with innovative design and seamless user experience.',
  },
  {
    id: 'CrowdFunding',
    img: CrowdFunding,
    name: 'CrowdFunding Dapp',
    stack: ['Solidity', ' Hardhat ', ' Web3.js ', ' React ', ' ether.js '],
    live: 'https://github.com/Aditya20743/CrowdFunding-Dapp',
    source: 'https://github.com/Aditya20743/CrowdFunding-Dapp',
    description:
      'A Platform for Creating, Viewing, and Donating to Crowdfunding Campaigns directly through the Blockchain.',
  },

  {
    id: 'todo',
    img: Todo,
    name: 'Task Manager Application',
    stack: ['HTML ', ' CSS ', ' Javascript ', ' React '],
    live: 'https://github.com/Aditya20743/Task-Management-App',
    source: 'https://github.com/Aditya20743/Task-Management-App',
    description:
      'A Clean and Basic React app for efficient task management, empowering users to organize their daily tasks, set priorities, and boost productivity.',
  },

  {
    id: 'ExpenseTracker',
    img: ExpenseTracker,
    name: 'ExpenseTracker',
    stack: ['HTML ', ' CSS ', ' Javascript ', ' React '],
    live: 'https://expense-tracker-five-eta.vercel.app/',
    source: 'https://github.com/Aditya20743/Expense-Tracker',
    description:
      ' A React-based Expense Tracker app simplifying budgeting, income, and expenses with simple and intuitive design.',
  },

  ,
]

// eslint-disable-next-line import/no-anonymous-default-export
export default { ProjectsData }
