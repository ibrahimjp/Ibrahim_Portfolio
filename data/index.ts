export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Solved More Than 450 Problem on Leetcode",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Build This Project Using Next.js , Tailwind CSS and Aceternity UI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ai Interview Preparation",
    des: "Practice smarter, not harder — AI Interview Prep is a powerful platform that simulates Google-style interviews using generative AI, evaluates your spoken answers in real time, and provides instant, structured feedback to help you master DSA, system design, and web development.",
    img: "/ai_interview (2).png",
    iconLists: [
      "/gemini.webp",
      "/next.svg",
      "/re.svg",
      "/tail.svg",
      "/nodejs.png",
    ],
    link: "https://aiinterviewprep-delta.vercel.app/",
  },
  {
    id: 2,
    title: "Hotel Renting Website",
    des: "Discover and book your perfect stay with ease — a sleek, user-friendly hotel renting platform built for seamless travel planning",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/boot.png", "/nodejs.png"],
    link: "https://hotel-renting-website-project.onrender.com/listings",
  },
  {
    id: 3,
    title: "Expense Management",
    des: "Take control of your finances with ease. Track, manage, and analyze your expenses effortlessly—all in one place",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/boot.png", "/nodejs.png"],
    link: "https://expense-managment-system-280m.onrender.com/expenses",
  },
];

export const testimonials = [
  {
    quote:
      "I have continuously strived to elevate my skills and push boundaries in the tech domain. My accomplishments include building a robust AI Interview Preparation platform that leverages generative AI to simulate Google-style interviews, providing real-time feedback and analysis on DSA, system design, and web development. Additionally",
    img: "ibrahim1.jpg",
  },
  {
    quote:
      "I developed a comprehensive AI-powered Interview Preparation platform that mimics real-world Google-style interviews. This project leverages generative AI to simulate interview questions, evaluate spoken answers in real-time, and provide instant, structured feedback on DSA, system design, and web development topics. It enables users to practice effectively, receive constructive feedback, and refine their problem-solving and communication skills, making it a powerful tool for aspiring software engineers.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "ibrahim3.png",
  },
  {
    quote:
      "I have successfully tackled over 450 problems on LeetCode, focusing on key data structures, algorithms, and advanced problem-solving techniques. This achievement underscores my dedication to mastering complex coding challenges, from dynamic programming and graph traversal to intricate recursion and binary search problems. It not only sharpens my coding abilities but also prepares me to handle algorithmic challenges effectively in competitive programming and technical interviews.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "ibrahim4.png",
  },
  {
    quote:
      "I built a sleek, user-friendly Hotel Renting platform designed to simplify travel planning. This project integrates React.js, Tailwind CSS, and Node.js to provide a seamless booking experience, allowing users to search, filter, and book accommodations with ease. The platform prioritizes intuitive design and a responsive interface, ensuring a smooth user experience across devices. This project showcases my ability to develop full-stack applications with a strong focus on user-centric design.",
    title: "Director of AlphaStream Technologies",
    img: "ibrahim2.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ibrahimjp",
  },
  {
    id: 2,
    img: "/leetcode.png",
    link: "https://leetcode.com/u/Ebrahim7/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ibrahim-jp-b4433a306/",
  },
];
