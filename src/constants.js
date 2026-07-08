// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import decodeLogo from './assets/company_logo/decode_logo.png';
import umLogo from './assets/company_logo/UM_logo.png';

// Education Section Logo's
import schoolLogo from './assets/education_logo/school_logo.png';
import collegeLogo from './assets/education_logo/college_logo.png';

// Project Section Logo's
import photography from './assets/work_logo/photography.png';
import quora from './assets/work_logo/quora.png';
import simon from './assets/work_logo/simon.png';
import spotify from './assets/work_logo/spotify.png';
import todo from './assets/work_logo/todo.png';
import wanderlust from './assets/work_logo/wanderlust.png';
import whatsapp_chats from './assets/work_logo/whatsapp_chats';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: decodeLogo,
      role: "Fullstack Developer",
      company: "Decode Labs Pvt Ltd",
      date: "June 2026 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: umLogo,
      role: "Fullstack Developer",
      company: "Unified Mentorship",
      date: "July 2026 - September 2026",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      img: collegeLogo,
      school: "KCCITM College, Greater Noida",
      date: "Sept 2023 - Aug 2027",
      grade: "67.5%",
      desc: "I completed my Bachelor's degree in B.Tech from KCCITM, Greater Noida. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at KCC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "Pandit Deendayal Upadhyay Saraswati Vidya Mandir Inter College",
      date: "Apr 2020 - March 2021",
      grade: "75%",
      desc: "I completed my class 12 education from Pandit Deendayal Upadhyay Saraswati Vidya Mandir Inter College, Lmp-Kheri, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: schoolLogo,
      school: "Pandit Deendayal Upadhyay Saraswati Vidya Mandir Inter College",
      date: "Apr 2018 - March 2019",
      grade: "89.5%",
      desc: "I completed my class 10 education from Pandit Deendayal Upadhyay Saraswati Vidya Mandir Inter College, Lmp-Kheri, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Photography Studio",
      description:
        "A responsive Photography Sidebar Menu built using HTML5 and CSS3. This project features a modern sliding sidebar navigation with smooth CSS transitions, Font Awesome icons, and Google Fonts. It demonstrates responsive web design, clean UI development, and an interactive navigation menu created entirely with HTML and CSS, without JavaScript.",
      image: photography,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/arpitsri9662-collab/Photography.git",
      webapp: "https://arpitsri9662-collab.github.io/Photography/",
    },
    {
      id: 1,
      title: "Quora-Posts",
      description:
        "A responsive Quora-inspired CRUD web application built with Node.js, Express.js, EJS, and Method Override. Users can create, view, edit, and delete posts through a clean, intuitive interface. The project demonstrates RESTful routing, server-side rendering, UUID-based unique IDs, and basic CRUD operations without a database.",
      image: quora,
      tags: ["Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "RESTFUL APIs"],
      github: "https://github.com/arpitsri9662-collab/Quora_Posts.git",
      webapp: "https://quora-posts-eta.vercel.app/posts",
    },
    {
      id: 2,
      title: "Simon Says Game",
      description:
       "Simon Says Game is a fun memory-based web game built with HTML, CSS, and JavaScript. Players repeat an increasingly complex sequence of colors to advance through levels. The project demonstrates DOM manipulation, event handling, random sequence generation, game logic, and responsive UI design using core front-end technologies.",
      image : simon,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/arpitsri9662-collab/Simon_Game.git",
      webapp: "https://arpitsri9662-collab.github.io/Simon_Game/",
    },
    {
      id: 3,
      title: "Spotify Clone",
      description:
        "This project is a responsive Spotify Web Player Clone developed using HTML5 and CSS3. It recreates the modern interface of Spotify with a sidebar, sticky navigation, playlist cards, and a music player section. The project focuses on clean UI design, responsive layouts, and effective use of CSS Flexbox. It was built to strengthen frontend development.",
      image: spotify,
      tags: ["HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/arpitsri9662-collab/Spotify-Clone.git",
      webapp: "https://arpitsri9662-collab.github.io/Spotify-Clone/",
    },
    {
      id: 4,
      title: "Todo Listing App",
      description:
        "A simple and efficient Todo App to help you manage daily tasks easily. Add and delete tasks with a clean and minimal interface. Stay organized, track your progress, and boost productivity by keeping all your important tasks in one place. Built for smooth and fast task management experience.",
      image: todo,
      tags: ["JavaScript","HTML", "CSS"],
      github: "https://github.com/arpitsri9662-collab/Todo_List.git",
      webapp: " https://arpitsri9662-collab.github.io/Todo_List/",
    },
    {
      id: 5,
      title: "Wanderlust",
      description:
        "A full-stack Airbnb-inspired travel accommodation booking platform built with Node.js, Express.js, MongoDB, EJS, Passport.js, Cloudinary, and Mapbox, featuring user authentication, property listings, reviews, image uploads, and interactive maps.",
      image: wanderlust,
      tags: ["HTML", "CSS", "JavaScript", "Nodejs", "ExpressJs", "MongoDB", "Cloudinary", "EJS", "PassportJs", "Bootstrap", "Render"],
      github: "https://github.com/arpitsri9662-collab/Wanderlust.git",
      webapp: "https://wanderlust-rz6g.onrender.com/listings",
    },
      {
      id: 2,
      title: "Whatsapp_Chats",
      description:
       "A WhatsApp-inspired Chat CRUD web application built with Node.js, Express.js, MongoDB, Mongoose, and EJS. It allows users to create, view, edit, and delete chat messages through a clean and responsive interface. The project demonstrates RESTful routing, server-side rendering, MongoDB integration, form handling, and full CRUD functionality.",
      image : whatsapp_chats,
      tags: ["HTML", "CSS", "JavaScript","Mongo Atlas", "CRUD", "EJS", "ExpressJs", "NodeJs", "Render"],
      github: "https://github.com/arpitsri9662-collab/Whatsapp_Chats.git",
      webapp: "https://whatsapp-chats.onrender.com",
    },
  ];  