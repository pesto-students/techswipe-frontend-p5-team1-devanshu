import { faker } from "@faker-js/faker";

export const users = [
  {
    "first name": "Lucrèce",
    name: "Cattermoul",
    email: "gcattermoul0@yolasite.com",
    url: "https://xsgames.co/randomusers/avatar.php?g=female",
    gender: "M",
    age: 1,
    interest: ["Gaming", "Dancing & Singing", "Language"],
    bio: "bio of the user",
    company: "Google",
    role: "Software Tester",
    techStack: ["Java", "PHP", "Javascript"],
  },
  {
    "first name": "Célestine",
    name: "Sedgemond",
    email: "csedgemond1@slate.com",
    url: "https://xsgames.co/randomusers/avatar.php?g=male",
    gender: "M",
    age: 2,
    interest: ["Gaming", "Dancing & Singing", "Language"],
    bio: "bio of the user",
    company: "Google",
    role: "Software Tester",
    techStack: ["Java", "PHP", "Javascript"],
  },
  {
    "first name": "Maïwenn",
    name: "Edie",
    email: "nedie2@privacy.gov.au",
    url: "https://picsum.photos/200",

    gender: "F",
    age: 3,
    interest: ["Gaming", "Dancing & Singing", "Language"],
    bio: "bio of the user",
    company: "Google",
    role: "Software Tester",
    techStack: ["Java", "PHP", "Javascript"],
  },
  {
    "first name": "Laurélie",
    name: "Dysert",
    email: "tdysert3@constantcontact.com",
    url: "https://picsum.photos/201",
    gender: "M",
    age: 4,
    interest: ["Gaming", "Dancing & Singing", "Language"],
    bio: "bio of the user",
    company: "Google",
    role: "Software Tester",
    techStack: ["Java", "PHP", "Javascript"],
  },
  {
    "first name": "Salomé",
    name: "Marquand",
    email: "lmarquand4@samsung.com",
    url: "https://picsum.photos/202",
    gender: "M",
    age: 5,
    interest: ["Gaming", "Dancing & Singing", "Language"],
    bio: "bio of the user",
    company: "Google",
    role: "Software Tester",
    techStack: ["Java", "PHP", "Javascript"],
  },
  {
    "first name": "Marie-ève",
    name: "McCumskay",
    email: "tmccumskay5@ebay.co.uk",
    url: "https://picsum.photos/203",
    gender: "F",
    age: 6,
    interest: ["Gaming", "Dancing & Singing", "Language"],
    bio: "bio of the user",
    company: "Google",
    role: "Software Tester",
    techStack: ["Java", "PHP", "Javascript"],
  },
  {
    "first name": "Kù",
    name: "Larmouth",
    email: "klarmouth6@nytimes.com",
    url: "https://picsum.photos/204",
    gender: "F",
    age: 7,
    interest: ["Gaming", "Dancing & Singing", "Language"],
    bio: "bio of the user",
    company: "Google",
    role: "Software Tester",
    techStack: ["Java", "PHP", "Javascript"],
  },
  {
    "first name": "Gwenaëlle",
    name: "Jervis",
    email: "fjervis7@yahoo.co.jp",
    url: "https://picsum.photos/205",
    gender: "M",
    age: 8,
    interest: ["Gaming", "Dancing & Singing", "Language"],
    bio: "bio of the user",
    company: "Google",
    role: "Software Tester",
    techStack: ["Java", "PHP", "Javascript"],
  },
];

export const mages = [
  {
    image: "https://picsum.photos/218",
  },
  {
    image: "https://picsum.photos/219",
  },
  {
    image: "https://picsum.photos/220",
  },
  {
    image: "https://picsum.photos/221",
  },
  {
    image: "https://picsum.photos/222",
  },
];

export const allConversationsList = [
  {
    conversationId: faker.datatype.uuid(),
    fromUser: {
      id: "",
      image: "https://picsum.photos/218",
      username: "sridhar",
    },
    toUser: {
      id: "640b0402c6215f423d7cbfec",
      image: "https://picsum.photos/219",
      username: "reegan",
    },
  },
  {
    conversationId: faker.datatype.uuid(),

    fromUser: {
      id: "",
      image: "",
      username: "sridhar",
    },
    toUser: {
      id: "640b0402c6215f423d7cbfed",
      image: "https://picsum.photos/220",
      username: "dibya",
    },
  },
  {
    conversationId: faker.datatype.uuid(),
    fromUser: {
      id: "",
      image: "",
      username: "sridhar",
    },
    toUser: {
      id: "640b0402c6215f423d7cbfee",
      image: "https://picsum.photos/221",
      username: "hari",
    },
  },
  {
    conversationId: faker.datatype.uuid(),
    fromUser: {
      id: "",
      image: "",
      username: "sridhar",
    },
    toUser: {
      id: "640b0402c6215f423d7cbfef",
      image: "https://picsum.photos/221",
      username: "sree",
    },
  },
  {
    conversationId: faker.datatype.uuid(),
    fromUser: {
      id: "",
      image: "",
      username: "sridhar",
    },
    toUser: {
      id: "640b0402c6215f423d7cbff0",
      image: "https://picsum.photos/221",
      username: "ravikrish",
    },
  },
];
