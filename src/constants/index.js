import {
  dsa,
  hack,
  github1,
  linux,
  clang,
  canva,
  sql,
  cpp,
  ds,
  github,
  sih,
  trophy,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  rnm,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  startify,
  download_icon,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "C++ Programmer",
    icon: trophy,
  },
  {
    title: "MERN-Stack Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: python,
  },
];
const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "MERN",
    icon: reactjs,
  },
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "SQL",
    icon: sql,
  },

  {
    name: "C-language",
    icon: clang,
  },

  {
    name: "canva",
    icon: canva,
  },
];
const experiences = [
  {
    title: "1st Year",
    company_name: "JIIT",
    icon: dsa,
    iconBg: "#383E56",
    date: "Nov-2022",
    points: [
      "🎓 Admitted to Jaypee Institute of Information Technology",
      "📚 Started first year of studies",
      "🐍 Learned C language.",
    ],
  },
  {
    title: "2nd Year",
    company_name: "JIIT",
    icon: hack,
    iconBg: "#E6DEDD",
    date: "August-2023",
    points: [
      "📖 Entered second year at Jaypee Institute of Information Technology",
      "💻 Began learning DSA and started engaging in hackathons",
    ],
  },
  {
    title: "Web Developer",
    company_name: "JIIT",
    icon: html,
    iconBg: "#383E56",
    date: "September-2023",
    points: [
      "💻 Engaged in web development, learning various technology stacks including HTML, CSS, JavaScript along with MERN stack",
      ,
    ],
  },
  {
    title: "Competitive-Programming",
    company_name: "LeetCode,Geeks for geeks,CodeChef",
    icon: trophy,
    iconBg: "#E6DEDD",
    date: "January-February-2024",
    points: [
      "🌟 Started practicing on LeetCode, Geeks for geeks, and HackerRank",
      "🏋️‍♂️ Maintained a continuous streak on all platforms",
      "💻 Engaged in development using React,Node.js,Tailwind CSS, and other related technologies.",
    ],
  },
  {
    title: "Currently",
    company_name: "CP+Development",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Present-Date",
    points: [
      "🏆 Continued exploration of web development",
      "🛠️ Practiced building projects using the acquired web development skills.",
      "🔍 Further honed skills in web development",
      "🚀 Worked on advanced projects to solidify understanding and expertise in web technologies.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I had the pleasure of working alongside Adarsh Amit on the 'Game Rocket and Meteors' project,his collaborative nature and commitment to excellence makes him a valuable asset to any team, and I wholeheartedly recommend him for future projects requiring top-notch C++ development skills.",
    name: "Nirajan Kumar Verma",
    designation: "B.Tech in CSE ",
    company: " JIIT",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  },
  {
    testimonial:
      "Working with Adarsh on my project has been an absolute pleasure. His expertise and dedication significantly contributed to the success of our endeavor. Adarsh's commitment to excellence, prompt responses, and innovative problem-solving skills truly set him apart.",
    name: "Abhijeet Kumar",
    designation: "B.Tech+M.Tech in CSE ",
    company: " JIIT",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  },
  {
    testimonial:
      "Adarsh played a pivotal role in our project's success. His expertise, dedication, and collaborative approach were truly commendable. I confidently endorse Adarsh for his outstanding contributions and teamwork.",
    name: "Viyom Shukla",
    designation: "B.Tech+M.Tech in CSE ",
    company: " JIIT",
    image:
      "https://media.licdn.com/dms/image/D5603AQGzPPBvXmMikA/profile-displayphoto-shrink_100_100/0/1718819725263?e=1724284800&v=beta&t=lOP_vxNlZXeL-tUdAKUGifaxENCm_G7dc0fUgaFm7TE",
  },
  // {
  //   testimonial:
  //     "I've had the pleasure of witnessing firsthand the exceptional skills of Adarsh. His dedication, creativity, and attention to detail set him apart in his field. He consistently delivers outstanding results, surpassing expectations every time. With his expertise and unwavering commitment, I have no doubt that he will continue to excel and make significant contributions in whatever he pursues.",
  //   name: "Hardik Kumar Ranjan",
  //   designation: "B.Tech in CSE ",
  //   company: " JIIT",
  //   image: "",
  // },
];
const projects = [
  {
    name: "Savoury-Sense",
    description:
      "Savoury Sense is an AI-powered culinary app that transforms food images into personalized, step-by-step recipes enriched with mood-based suggestions, multilingual voice support, and sentiment-driven recommendations.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: rnm,
    source_code_link: "https://github.com/vaishnavi899/RecipeAI",
  },
  {
    name: "Outfitter",
    description:
      "Personal Stylist is a web-based fashion assistant that classifies outfits and delivers personalized clothing recommendations through image similarity and user style quizzes.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
    ],
    image: startify,
    source_code_link: "https://github.com/vaishnavi899/PERSONAL-STYLIST",
  },
  {
    name: "Social Network Graph Analysis Tool",
    description:
      "Developed a social network analysis tool to manage users, groups, and events, enabling real-time interaction visualization and efficient simulation of user behavior.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Data structures",
        color: "green-text-gradient",
      },
      {
        name: "Algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: sih,
    source_code_link: "https://github.com/vaishnavi899/Social-Network-Graph-Analysis-Tool",
  },
];
export { services, technologies, experiences, testimonials, projects };
