import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.png';
import Work3 from './assets/projet-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/rafik_portfolio',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Rafik',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Bannour',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '25 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Tunisian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: '5111 Mahdia, Tunisia',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+216 50 792 380',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'rafik.bannour99@gmail.com',
  },

  {
    id: 9,
    title: 'linkedin : ',
    description: 'rafik-bannour',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Arabic, French, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '9+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '2+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '3+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - Present',
    title: 'QA Tester <span> Strateg IN Toulouse </span>',
    desc: "Performed functional testing and test automation for web applications, ensuring quality and compliance with specifications.",
  },
  
  
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Internship in Test Automation <span>  Access Sap Paris (Remote) </span>',
    desc: "Automating tests for the member portal of the 'Sap Access' project.",
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - 2023',
    title: 'Web Developer <span>  IT NEXT SOLUTIONS TUNISIA </span>',
    desc: "As part of a team composed of a web project manager and developers, I have undertaken numerous missions on client projects: <br />  . Maintenance of an e-learning platform developed in MERN Stack.<br />  . Maintenance of the front-end part of an e-commerce web application using React.js. <br /> . Design and complete development of an online chat web application, offering real-time messaging and instant communication features. <br /> . Design and development of the backend for three mobile delivery applications (FlyDelivery) using Node.js, as well as the creation of the back office using React JS and Node.js.",
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: " Final Internship <span> WIMOBI </span>",
    desc: "Design and development of an e-learning platform. <br /><strong> Keywords: StarUML, Symfony 5, API Platform, HTML, CSS, SCSS, Bootstrap, React.js.</strong>",
  },

  {
    id: 5,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021',
    title: 'Advanced Internship <span> LAB IT </span>',
    desc: "Web Application for IT Equipment Management. <br /> Keywords : StarUml , Symfony4 , HTML , CSS , SCSS , Bootsrap . ",
  },



  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022 - PRESENT',
    title: 'Master Degree <span> Faculty of Sciences, Monastir, Tunisia </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018 - 2022',
    title: "Applied Bachelor's Degree in Information Technology, specializing in Web and Multimedia Development. <span> Higher Institute of Technological Studies, Mahdia, Tunisia </span>",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  }, 

  
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '99',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css & scss',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '70',
  },

  {
    id: 5,
    title: 'React',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Node js',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Symfony',
    percentage: '70',
  },

  {
    id: 8,
    title: 'MySQL',
    percentage: '60',
  },
  {
    id: 9,
    title: 'MongoDB',
    percentage: '60',
  },
  {
    id: 10,
    title: 'Cypress',
    percentage: '80',
  },
  {
  id: 11,
  title: 'Playwright',
  percentage: '80',
},
{
  id: 12,
  title: 'Jmeter',
  percentage: '80',
},
  {
    id: 13,
    title: 'Postman',
    percentage: '90',
  },
  {
    id: 14,
    title: 'Jira',
    percentage: '70',
  },
  {
    id: 15,
    title: 'XRay',
    percentage: '40',
  },
  {
    id: 16,
    title: 'Cucumber',
    percentage: '40',
  },
];

export const portfolio = [ 
  {
    id: 1,
    img: Work6,
    title: 'QA Testing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'QA ',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Strateg IN & Acces Sap',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Cypress, Playwright, Cucumber, Xray, Jira, Gitlab CI/CD',
      },

    ],
  },
  {
    id: 2,
    img: Work1,
    title: 'Fly Delivery Backoffice',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website ',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'It Next Solutions',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Node js, React js ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://bo.flydelivery.tn/',
      },
    ],
  },

  {
    id: 3,
    img: Work2,
    title: 'Power Online Learning',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Wimobi',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS , Symfony',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'http://localhost:3001/',
      },
    ],
  },

  {
    id: 4,
    img: Work3,
    title: 'UVCT',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'It Next Solutions',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'local',
      },
    ],
  },

  {
    id: 5,
    img: Work4,
    title: 'Sfar Location',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Internal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Full stack Symfony',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'local',
      },
    ],
  },

  {
    id: 6,
    img: Work5,
    title: ' Fly Delivery 3 apps',
    details: [
      {
        title: 'Project : ',
        desc: 'Backend of 3 applications',
      },
      {
        title: 'Client : ',
        desc: 'It Next Solutions',
      },
      {
        title: 'Language : ',
        desc: 'Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'https://play.google.com/store/apps/details?id=com.flydelivery.client',
      },
    ],
  },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
