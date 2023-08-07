const logotext = "AJAY";
const meta = {
    title: "Ajay Patil",
    description: "",
};

const introdata = {
    title: "I’m Ajay Patil",
    animated: {
        first: "I love coding",
        second: "I love solving DSA problems",
        third: "I'm passionate about MERN stack development",
    },
    description: "Coder, Problem Solver, Web-Developer and an Attentive Learner.",
    your_img_url: require("./assets/images/home.jpeg"),

    // https://images.unsplash.com/photo-1514790193030-c89d266d5a9d
};

const dataabout = {
    title: "What do I do ?!",
    aboutme: "I am immersing myself in Data Structures & Algorithms, consistently enhancing my ability to tackle intricate coding challenges. Concurrently, I am deeply engaged in MERN Stack Development, blending frontend and backend intricacies seamlessly. Complementing this, I am also delving into both Relational and Non-Relational Databases, while expanding my horizons into Cloud Computing for comprehensive expertise in crafting cutting-edge applications.",
};
const worktimeline = [{
        jobtitle: "DSA",
        where: "Solved more than 300 DSA problems. Currently working on Graphs and DP.",
        date: "",
    },
    {
        jobtitle: "MERN-Stack",
        where: "Have an hands on experience of HTML, CSS, JavaScript, Node, Express, MongoDB. Currently working on React skills.",
        date: "",
    },
   
];

const skills=[{
    skill: "Languages:",
    list: "C++, JavaScript, Python",
    space:"",
   
},
{
    skill: "Front-End:",
    list: "HTML, CSS, Tailwind CSS, Bootstrap, React",
    space:"",
},
{
    skill: "Back-End:",
    list: "Node.js, Express.js",
    space:"",
},
{
    skill: "Databases:",
    list: "MySQL, MongoDB",
    space:"",
},
{
    skill: "Dev-Tools:",
    list: "Git, GitHub, Postman, Thunder Client, VS Code",
    space:"",
},
{   skill: "Other:",
    list: "Problem Solving, Decision Making, Time Management, Adaptability, Collaboration, Leadership",
    space:"",
},]




const achievements = [
    {
        title: "Coding and DSA:",
        description: "Solved more than 300 problems on platforms like LeetCode, GFG, etc.",
        links: [
            {
              name: "LeetCode",
              url: "https://www.leetcode.com/ajayp_1717",
            },
            {
              name: "GFG",
              url: "https://www.geeksforgeeks.org/ajaypict",
            },
          ],
    },
    {
        title: "Certifications:",
        description: "Problem Solving Using Computational Thinking Certificate by University of Michigan",
        links: [
            {
                name: "Link",
                url: "https://www.coursera.org/account/accomplishments/certificate/KJH47NZADX2M",
        },
        
        ],
    },
    
];

const dataportfolio = [{
        img: require("./assets/images/CuteLink.png"),
        title: "CuteLink API",
        description: "API to create short URLs, built using Node, Express and MongoDB.",
        link: "https://github.com/ajayp1717/CuteLink-API",
    },
    {
        img: require("./assets/images/StockGaze.png"),
        title:"StockGaze",
        description: "Stock market web application to get brief data of your stocks. Built using React, Axios, RealStonksAPI.",
        link: "https://github.com/ajayp1717/StockGaze",
    },
    {
        img: require("./assets/images/dvsam.jpeg"),
        title:"DVSAM",
        description: "Restaurant recommender system, built using HTML,CSS, Django.",
        link: "https://github.com/ajayp1717/Restauarant-Recommender-System",
       
    },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    
];

const contactConfig = {
    YOUR_EMAIL: "ajaypatil.connect@gmail.com",
    YOUR_FONE: "+91-7098871717",
    description: "Open to exciting opportunities! Whether it's joining forces on a project, collaborating for innovative solutions, or simply connecting in the digital realm, let's explore the possibilities together.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "#",
    YOUR_TEMPLATE_ID: "#",
    YOUR_USER_ID: "#",
};

const socialprofils = {
    github: "https://github.com/ajayp1717",
    linkedin: "https://linkedin.com/in/ajayp1717",
    leetcode: "https://www.leetcode.com/ajayp_1717",
    GFG: "https://auth.geeksforgeeks.org/user/ajaypict",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    achievements,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
