export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React / NextJs</li>
        <li>JavaScript / TypeScript</li>
        <li>HTML5, CSS3, Sass, Bootstrap, TailwindCSS</li>
        <li>Python</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>React Native</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>BSc Applied Computer & Technology</li>
        <li>United States International University, Africa</li>
        <li>2016-2020</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Front End Developer Career Path - Scrimba</li>
        <li>Complete React Developer (w Redux) - ZeroToMastery</li>
        <li>JavaScript Algorithms and Data Structures - FreeCodeCamp</li>
      </ul>
    ),
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "GameHub",
    desc: "React App using ChakraUI and RAWGAPI to search and view your favourite games",
    image: "/images/gamehub.png",
    tags: ["React", "ChakraUI", "RAWG API"],
    gitUrl: "https://github.com/arbaaz-77/gamehub",
    liveUrl: "https://gamehub-lac.vercel.app/",
  },
  {
    id: 2,
    title: "PhotoBooth",
    desc: "Photobooth allows users to sign in using Google auth, upload images, view other images as well as download and comment on them",
    image: "/images/photobooth.png",
    tags: ["React", "Tailwind", "Sanity"],
    gitUrl: "https://github.com/arbaaz-77/photobooth",
    liveUrl: "https://photobooth-arbaaz.netlify.app/",
  },
  {
    id: 3,
    title: "Kings Gym",
    desc: "Fitness App consisting of GIFS to showcase various exercises.",
    image: "/images/gym.png",
    tags: ["React", "MaterialUI", "API"],
    gitUrl: "https://github.com/arbaaz-77/kings-gym",
    liveUrl: "https://kings-gym.vercel.app/",
  },
  {
    id: 4,
    title: "Cool Whip",
    desc: "Quiz App with difficulty and category selection",
    image: "/images/quiz.png",
    tags: ["React", "CSS", "API"],
    gitUrl: "https://github.com/arbaaz-77/Quiz-app",
    liveUrl: "https://quizapp-arbaaz.netlify.app/",
  },
  {
    id: 5,
    title: "GitHub Profile finder",
    desc: "Use of Github API to find and view profiles. Used React Context and Router",
    image: "/images/gitfinder.png",
    tags: ["React", "Context", "Router", "API"],
    gitUrl: "https://github.com/arbaaz-77/gitprofile-finder",
    liveUrl: "https://gitprofile-finder.vercel.app/",
  },
  {
    id: 6,
    title: "Elecar",
    desc: "Fully responsive landing page for Elecar",
    image: "/images/elecar.png",
    tags: ["HTML", "CSS", "JavaScript"],
    gitUrl: "https://github.com/arbaaz-77/elecar",
    liveUrl: "https://arbaaz-77.github.io/elecar/",
  },
];
