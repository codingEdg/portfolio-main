/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Mehtab Ali",
  logo_name: "<Mehtab_Ali />",
  nickname: "Mehtab",
  full_name: "Mehtab Ali",
  subTitle: "React Developer, Node Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1j6RfWes-QPNsKXXPwWRy6v3lLzojzhB0/view?usp=sharing",
  mail: "mailto:mohd2mehtab@gmail.com",
};

/* Your Social Media Link */
const socialMediaLinks = {
  github: "https://github.com/codingEdg",
  linkedin: "https://www.linkedin.com/in/mehtab-ali9/",
  gmail: "mohd2mehtab@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/MehtabAli99",
  instagram: " ",
};

// skills
const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "logos-sass",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "tailwind-css",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#5c79df",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#29B0EE",
          },
        },

        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Certified AWS Developer Associate and Cloud Practioner",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps on AWS",
        "⚡ Deploying mernstack projects on cloud",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision projects",
        "⚡ Practice in deeplearning.ai and Stanford Online",
        "⚡ Experience with 5+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Mangalayatan University",
      subtitle: "Bachelors in Computer Application",
      logo_path: "dal.png",
      alt_name: "MU",
      duration: "2010 - 2014",
      descriptions: [
        "⚡ Engineered immersive user interfaces using HTML, CSS, and JavaScript, blending creativity with technical expertise to captivate audiences and drive engagement.",
        "⚡ Embraced the power of React and Next.js to develop high-performance web applications, delivering seamless user experiences across various devices and screen sizes.",
        "⚡ Orchestrated state management with Redux, ensuring data consistency and enabling efficient communication between components in complex frontend architectures.",
        "⚡ Integrated server-side logic with Node.js and Express, leveraging RESTful APIs to facilitate seamless interaction between frontend and backend systems.",
        "⚡ Adopted TypeScript to enhance code quality and developer productivity, harnessing its static typing and advanced tooling to build scalable and maintainable applications.",
        "⚡ Designed visually stunning interfaces with Material-UI and Tailwind CSS, adhering to design principles and accessibility standards to create inclusive user experiences.",
        "⚡ Collaborated closely with cross-functional teams to drive innovation and deliver impactful solutions, fostering a culture of collaboration, learning, and continuous improvement.",
      ],

      website_link: "https://www.mangalayatan.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "AWS Certified Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed an internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Frontend Developer",
          company: "FinEdu Fintech | StoxPathshala",
          company_url: "https://stoxpathshala.com/home",
          logo_path: "quicko.png",
          duration: "March 2023 - Ongoing",
          location: "work from home",
          description:
            "FinEdu Fintech is an online stock planning, preparation  platform for individuals & businesses.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "Wrighter Writing Solutions",
          company_url: " ",
          logo_path: "wrighter.jpg",
          duration: "September 2023",
          location: "",
          description: "Develop a website using HTML CSS and javascript.",
          color: "#56A4D3",
        },
        {
          title: "Front-End Developer",
          company: "VJ TechServe",
          company_url: " ",
          logo_path: "vjt.png",
          duration: "March 2023",
          location: "",
          description: "Develop a portfolio website using ReactJS",
          color: "#800000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Summer of Code Mentor",
    //       company: "Sugar Labs / GSoC",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "Summer of 2017 / 18 / 20",
    //       location: " ",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Google Code-In Mentor",
    //       company: "Sugar Labs / GSoC",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "Winter of 2017 / 18 / 19",
    //       location: " ",
    //       description:
    //         "Day to day resposibilites of this mentorship was to help out children aged 13-17 get started with programming and open-source, review their work and approve them.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Board Member at Codeuino",
    //       company: " ",
    //       company_url: " ",
    //       logo_path: "codeuino.jpg",
    //       duration: "2018 - 2019",
    //       location: " ",
    //       description: "Previous Board during early days of Codeuino",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "BluWings Club",
    //       company: " ",
    //       company_url: " ",
    //       logo_path: "b.png",
    //       duration: "2018 - On Going",
    //       location: " ",
    //       description:
    //         "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
    //       color: "#D83B01",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create website using React and NextJS projects along with backend of NodeJS. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@mohd2mehtab",
    avatar_image_path: "blogs_image.svg",
  },
};
// add more project later
const projects = {
  data: [
    {
      // Imaginify
      name: "Imaginify",
      url: "https://imaginify-theta-beryl.vercel.app/",
      description: "An Dall-e -like application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },

        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      // subscription with stripe
      name: "Subscription and payment app",
      url: "https://stripe-subscription-payment.netlify.app/",
      description: "A subscription application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "stripe",
          iconifyClass: "logos-stripe",
        },
      ],
    },
    {
      // netflix clone
      name: "Video Chat App",
      url: "https://video-chat-app-theta-beryl.vercel.app/",
      description: "An video chat application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Socket.IO",
          iconifyClass: "devicon-socketdotio",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Tailwind CSS",
          iconifyClass: "devicon-tailwind-css",
        },
      ],
    },
    {
      // netflix clone
      name: "Netflix-clone",
      url: "https://the-netflix-fun.netlify.app/",
      description: "An Netflix-like application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
      ],
    },

    {
      // tic tac toe game

      name: "Tic Tac Toe Game",
      url: "https://stellular-sprinkles-70107d.netlify.app/",
      description:
        "Classic Tic Tac Toe game implemented with HTML, CSS, and JavaScript, deployed on Netlify.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "css",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      // portfolio app

      name: "Portfolio",
      url: "https://methab-portfolio-theta-beryl.vercel.app/",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
