const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//? Exercises Level 1

//? Exercise 1, 2, 3
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
const [fin, est, sw, den, nor] = countries;
const { width, height, area, perimeter } = rectangle;

//? Exercises Level 2

//? Exercise 1
for (const { nameStudent, scores, skills, age } of users) {
  //? Exercise 2
  if (skills.length < 2) console.log(nameStudent);
}

//? Exercises Level 3

//? Exercise 1 (i don't know where is the countries obj)

//? Exercise 2
const [name2, skills, [jsScore, reactScore]] = student;
console.log(name2, skills, jsScore, reactScore);

//? Exercise 3
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const objStudent = [];

const convertArrayToObject = (arrayConvert) => {
  for (const [name, skills, scores] of arrayConvert) {
    objStudent.push({ name, skills, scores });
  }
};

convertArrayToObject(students);
//console.log(students);

//? Exercise 4

const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const studentCopy = { ...student };
studentCopy.skills.frontEnd.push({ skills: "Bootstrap", level: 8 });
studentCopy.skills.backEnd.push({ skills: "Express", level: 9 });
studentCopy.skills.dataBase.push({ skills: "SQL", level: 8 });
studentCopy.skills.dataScience.push({ skills: "Bootstrap" });

console.log(student);
console.log(studentCopy);

//? Here I misunderstood the exercise and I thought that I needed
//? to convert the objStudent into the format of the exercise 4

//? I don't know if this is the best way to do it though
let newStudent = [];

for (const {
  name,
  skills: [skill1, skill2, skill3, skill4],
  scores: [scores1, scores2, scores3, scores4],
} of objStudent) {
  newStudent.push({
    name: name,
    skills: {
      frontEnd: [
        {
          skill: skill1,
          level: scores1,
        },
        {
          skill: skill2,
          level: scores2,
        },
        {
          skill: skill3,
          level: scores3,
        },
        {
          skill: skill4,
          level: scores4,
        },
      ],
    },
  });
}

//console.log(objStudent);
//console.log(newStudent);

/* 
  [
    {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
    }
   ]
*/
