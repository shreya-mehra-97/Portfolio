import {  
    
    portfolio, mockmate, rentflix
     
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
    
  
  
  
  const projects = [
     
     
    {
      name: "Personal Portfolio",
      description:
        "Developed a responsive personal portfolio using ReactJS and Tailwind CSS, featuring a contact form with email validation via EmailJS and smooth animations powered by Framer Motion",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "emailjs",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://personalportfolio-eqjb.onrender.com",
    },
    {
  name: "Mockmate",
  description:
    "MockMate is a web-based platform that simulates real-time job interviews using artificial intelligence. It analyzes user responses through NLP and speech-to-text technologies to provide detailed feedback and performance evaluation. Built with Next.js, Node.js, PostgreSQL/MongoDB, and OpenAI Whisper, the system offers personalized interview practice, automated scoring, and improvement suggestions, helping users enhance their interview skills effectively.",
  tags: [
    { name: "reactjs", color: "blue-text-gradient" },
    { name: "nodejs", color: "yellow-text-gradient" },
    { name: "express", color: "pink-text-gradient" },
    { name: "mongodb", color: "green-text-gradient" },
   , // if used for images
  ],
  image: mockmate,
  source_code_link: "https://mock-mate-eosin.vercel.app/", // 🔁 Replace with your actual hosted link
},
{
  name: "Rentflix",
  description:"Rentflix is a full-stack movie rental web app built using the MERN Stack. It allows users to browse, rent, and stream movies with an intuitive and responsive interface. The platform focuses on delivering a smooth user experience with dynamic content and modern UI design.",
  tags: [
    { name: "nextjs", color: "blue-text-gradient" },
    { name: "reactjs", color: "green-text-gradient" },
    { name: "mongodb", color: "green-text-gradient" },
  ],
  image: rentflix, // ✅ Replace this with your image variable like `import { texmage } from "../assets";`
  source_code_link: "https://rentflix.vercel.app/home", // 🔁 Replace with your actual deployed link
}


    
  ];
  
  export { projects };
