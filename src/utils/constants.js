const BACKEND_URL = import.meta.env.VITE_BACKEND_API;
export const githubAPI = `${BACKEND_URL}/auth/github`;
export const linkedInAPI = `${BACKEND_URL}/auth/linkedin`;

export const options = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Others", label: "Others" },
];

export const developerOptions = [
  { value: "All", label: "Anyone" },
  { value: "Full-Stack Developer", label: "Full Stack Developer" },
  { value: "Frontend Developer", label: "Frontend Developer" },
  { value: "Backend Developer", label: "Backend Developer" },
  { value: "Devops Engineer", label: "Devops Engineer" },
  { value: "Software Tester", label: "Software Tester" },
];
export const companyRoles = [
  { value: "Full-Stack Developer", label: "Full Stack Developer" },
  { value: "Frontend Developer", label: "Frontend Developer" },
  { value: "Backend Developer", label: "Backend Developer" },
  { value: "Devops Engineer", label: "Devops Engineer" },
  { value: "Software Tester", label: "Software Tester" },
];

export const workExperiences = [
  { value: 0, label: "Fresher" },
  { value: 1, label: "1 Year" },
  { value: 2, label: "2 Years" },
  { value: 3, label: "3 Years" },
  { value: 4, label: "4 Years" },
  { value: 5, label: "5 Years" },
  { value: 6, label: "6 Years" },
  { value: 7, label: "7 Years" },
  { value: 8, label: "8 Years" },
  { value: 9, label: "9 Years" },
  { value: 10, label: "10+ Years" },
];

export const techStacks = [
  "Java",
  "Go",
  "Javascript",
  "React",
  "Angular",
  "Python",
  "Nodejs",
  "C",
  "C++",
  "PHP",
  "Larvel",
  "Ruby",
];

export const techStackIcons = {
  Java: "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092054/tech%20stack%20icons/java-4-logo-svgrepo-com_qf3twj.svg",
  Go: "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092326/tech%20stack%20icons/Go_Logo_Blue_tv45a6.png",
  Javascript:
    "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092052/tech%20stack%20icons/javascript-svgrepo-com_kamh18.svg",
  React:
    "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092054/tech%20stack%20icons/react-svgrepo-com_y7erz9.svg",
  Angular:
    "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092052/tech%20stack%20icons/angular-svgrepo-com_i2f0h1.svg",
  Python:
    "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092052/tech%20stack%20icons/python-svgrepo-com_eyplsz.svg",
  Nodejs:
    "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092052/tech%20stack%20icons/nodejs-svgrepo-com_sshvgp.svg",
  C: "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092327/tech%20stack%20icons/clanguage_xfnxil.png",
  "C++":
    "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092327/tech%20stack%20icons/cplus_pyu089.png",
  PHP: "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092053/tech%20stack%20icons/php2-svgrepo-com_wbiz3a.svg",
  Larvel:
    "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092329/tech%20stack%20icons/larvel_exwner.png",
  Ruby: "https://res.cloudinary.com/dfzxo5erv/image/upload/v1678092052/tech%20stack%20icons/ruby-svgrepo-com_wo3v9x.svg",
};

export const userInterests = [
  "Gaming",
  "Dancing & Singing",
  "Language",
  "Movie",
  "Book & Novel",
  "Architecture",
  "Photography",
  "Fashion",
  "Writing",
  "Nature & Plant",
  "Painting",
  "Football",
  "Animals",
  "People & society",
  "Gym & Fitness",
  "Food & Drink",
  "Travel & Places",
  "Art & literature",
];

export const questions = [
  {
    id: 1,
    name: "what is your favorite type of language?",
    answers: ["Functional", "Objective"],
  },
  {
    id: 2,

    name: "Are you unix lover or windows?",
    answers: ["Unix", "Windows"],
  },
  {
    id: 3,

    name: "Would you rather be a freelancer or work for a company?",
    answers: ["Freelance", "Company"],
  },
  {
    id: 4,

    name: "Would you rather code with a team or work solo?",
    answers: ["Team", "Solo"],
  },
  {
    id: 5,
    name: "Would you rather debug code with or without a rubber duck?",
    answers: ["Rubber duck", "No Rubber duck"],
  },
];
