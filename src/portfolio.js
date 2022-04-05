/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rushikesh Suryawanshi",
  title: "Hi all, I'm Rushikesh",
  subTitle: emoji(
    "A passionate Android Developer 🚀 having experience in building Native Android applications with Kotlin. Currently learning DevOps and Web"
  ),
  resumeLink: "https://github.com/rushikeshsuryawanshi/resume/blob/main/Rushikesh_Suryawanshi.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rushikeshsuryawanshi",
  linkedin: "http://www.linkedin.com/in/rushikeshsuryawanshi",
  gmail: "suryawanshirushikesh90@gmail.com",
  twitter: "https://twitter.com/ihrishii",
  instagram: "https://www.instagram.com/rushikeshsuryawanshii/",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "NATIVE ANDROID DEVELOPER, TRYING TO LEARN DEVOPS AND WEB",
  skills: [
    emoji(
      "⚡ Develop Native Android Applications in Kotlin"
    ),
    emoji("⚡ Integration with Firebase and other Libraries"),
    emoji("⚡ Learning DevOps and Full Stack Web")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [{
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "google-play",
      fontAwesomeClassname: "fab fa-google-play"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [{
    schoolName: "GESCOE, Nashik (SPPU)",
    logo: require("./assets/images/clg-logo.png"),
    subHeader: "Bachelor's in Computer Science",
    duration: "June 2019 - April 2023"
  }]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [{
      Stack: "Android Kotlin", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Development",
      progressPercentage: "60%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [{
      role: "Android Developer Intern",
      company: "Eyecan",
      companylogo: require("./assets/images/eyecan-logo.png"),
      date: "Feb 2022 – Present",
      descBullets: [
        "Responsible for Developing Eyecan Android Application",
        "Migrating from Java to Kotlin",
        "Adding Features and Bug Solving",
        "Optimizing App"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Coding Ninjas",
      companylogo: require("./assets/images/codingNinjas-logo.png"),
      date: "Oct 2021 – Dec 2021",
      descBullets: [
        "Clearing Student doubts in Java Problems",
        "Problem Solving",
        "Mentoring Students"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [{
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [{
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [{
        name: "Visit Website",
        url: "http://nextu.se/"
      }]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [{
      title: "Android Development",
      subtitle: "Completed Android Development Course with Coding Ninjas.",
      image: require("./assets/images/codingNinjas-logo.png"),
      footerLink: [{
        name: "Certification",
        url: "http://certificate.codingninjas.com/verify/697a9d27e7599e08"
      }]
    },
    {
      title: "Java DSA",
      subtitle: "Completed Java DSA Course with Coding Ninjas.",
      image: require("./assets/images/codingNinjas-logo.png"),
      footerLink: [{
        name: "Certification",
        url: "http://certificate.codingninjas.com/verify/8552fa02056ece03"
      }]
    },

    {
      title: "Introduction to Java",
      subtitle: "Completed Java Course with Coding Ninjas.",
      image: require("./assets/images/codingNinjas-logo.png"),
      footerLink: [{
        name: "Certification",
        url: "http://certificate.codingninjas.com/verify/41e3a9c9d7b0961d"
      }]
    },
    {
      title: "CS50x Introduction",
      subtitle: "Introduction to Computer Science by CS50 | Harvard University",
      image: require("./assets/images/harvardLogo.png"),
      footerLink: [{
        name: "Certification",
        url: "https://cs50.harvard.edu/certificates/6664d13a-e947-4bf3-b216-eb00b7dd6aa1"
      }]
    },
    {
      title: "Python Data Structures",
      subtitle: "Python Data Structures by University of Michigan via Coursera",
      image: require("./assets/images/coursera-logo.png"),
      footerLink: [{
        name: "Certification",
        url: "http://coursera.org/verify/WMMVVDJ78BRR"
      }]
    },
    {
      title: "Python Introduction",
      subtitle: "Python Introduction by University of Michigan via Coursera",
      image: require("./assets/images/coursera-logo.png"),
      footerLink: [{
        name: "Certification",
        url: "http://coursera.org/verify/YHSH2MR4DHBX"
      }]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [{
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9272277141",
  email_address: "suryawanshirushikesh90@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ihrishii", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};