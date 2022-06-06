"use strict";

const names = ["João", "Maria", "Andreia", "Hugo", "Ana"];
const grades = [10, 12, 8, 16, 6];
const persons = [];
const positives = [];

let failed = 0;
let numberOfStudents = 0;

const BuildPersonsObject = () => {
  for (let i = 0; i < names.length; i++) {
    persons.push({
      firstName: names[i],
      grade: grades[i],
    });

    grades[i] >= 10 ? positives.push(names[i]) : failed++;

    if (names[i].startsWith("A", 0)) numberOfStudents++;
  }
};

const checkGrade = (name, grade) => {
  if (grade < 10)
    console.log(`${name} had ${grade}, so it was a negative result`);
  else if (grade < 13)
    console.log(`${name} had ${grade}, so it is a ok result`);
  else if (grade >= 13 && grade < 16)
    console.log(`${name} had ${grade}, so it was a good result`);
  else if (grade >= 16 && grade < 18)
    console.log(`${name} had ${grade}, so it is a very good result`);
  else if (grade >= 18 && grade < 20)
    console.log(`${name} had ${grade}, so it is an excelent result`);
};

checkGrade("Martim", Math.trunc(Math.random * 21));

BuildPersonsObject();
console.log(persons);
console.log("Positives: " + positives);
console.log("Number of Students Failed:" + failed);
console.log(
  "Number of Stundents starting the name w/ letter A: " + numberOfStudents
);
