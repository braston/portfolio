import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Brandon Aston | Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Brandon Aston',
  subtitle: `I'm a Full Stack Engineer`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: `I'm a Motivated and results-driven Engineer with a passion for working across the full stack. Highly effective at working with teams of engineers across disciplines to accomplish projects on-time and according to cost constraints.`,
  paragraphTwo: ` `,
  paragraphThree: ` `,
  resume: 'https://drive.google.com/file/d/1AbnHVueBc3pakqGIdcC9KTdcwUZLeiDm/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'unitViewer.png',
    title: 'Axis & Allies Unit Viewer',
    info: `My friends and I hold a yearly game of Axis & Allies- this React project is the first stage of a companion app I'm working on to track the game and speed up the process.`,
    info2: '',
    url: 'https://braston.github.io/unit-browser/',
    repo: 'https://github.com/braston/unit-browser', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'grateful.png',
    title: 'Grateful Dead Show Browser',
    info: 'I wanted to take a shot at making a browser/player for Grateful Dead shows. I used the Archive.org API to search Grateful Dead shows by year, then parse down dates and source material.',
    info2: '',
    url: 'https://braston.github.io/grateful-dead-player/',
    repo: 'https://github.com/braston/grateful-dead-player', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smartbrain.png',
    title: 'SmartBrain',
    info: 'Final project for Web Development class. React frontend with a NodeJS/Express Server and a PostgreSQL database.',
    info2:
      'The backend uses Bcrypt to secure passwords and the Clarifai API to detect faces in images. Deployed via Heroku',
    url: 'https://smartbrain-front-baston.herokuapp.com/',
    repo: 'https://github.com/braston/smartbrain-front', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rpgActions.png',
    title: 'Dungeons and Dragons Action Generator',
    info: `During the COVID-19 pandemic my friends and I got really into Dungeons and Dragons. As a Dungeon Master I wanted to spice up the dialog when one of the player characters attempted an attack- enter the Action Generator! `,
    info2: `This tool will generate action text based on several factors and spit out "inspiring action text". Written with pure Javascript, CSS, and HTML`,
    url: 'https://braston.github.io/RPG-Action-Generator/',
    repo: 'https://github.com/braston/RPG-Action-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info: 'This React project was made alongside the Udemy class "The Complete Web Developer in 2021: Zero to Mastery"',
    info2: '',
    url: 'https://braston.github.io/robofriends/',
    repo: 'https://github.com/braston/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'brandon.aston90@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brandon-aston/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/braston',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
