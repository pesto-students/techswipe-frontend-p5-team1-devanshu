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
  Java: "",
  Go: "",
  Javascript: "",
  React: "",
  Angular: "",
  Python: "",
  Nodejs: "",
  C: "",
  "C++": "",
  PHP: "",
  Larvel: "",
  Ruby: "",
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
