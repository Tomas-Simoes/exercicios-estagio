"use strict";

const checkPerson = function (person) {
  if (person.age >= 18 && person.hasDriversLicense) {
    console.log(
      `${person.firstName} ${
        person.nationality === "Portuguese" ? "has" : "doesnt have"
      } a portuguese drivers license`
    );
  } else {
    console.log(`${person.firstName} isn't able to drive`);
  }
};

const checkAge = function (person) {
  if (person.age < 10) {
    console.log(
      `${person.firstName}'s age is less then 10 years old (${
        person.age
      }) and the difference until 20 years old is ${20 - person.age}`
    );
  } else if (person.age >= 10 && person.age < 20) {
    console.log(
      `${person.firstName}'s age is between 10 and 20 years old (${
        person.age
      }) and the difference until 20 years old is ${20 - person.age}`
    );
  } else if (person.age >= 35) {
    console.log(
      `${person.firstName}'s age is more then 35 years old (${person.age})`
    );
  }
};
//Persons

const persons = [
  {
    firstName: "José",
    age: 42,
    hasDriversLicense: true,
    nationality: "Portuguese",
  },
  {
    firstName: "Mike",
    age: 28,
    hasDriversLicense: true,
    nationality: "English",
  },
  {
    firstName: "Maria",
    age: 21,
    hasDriversLicense: false,
    nationality: "Portuguese",
  },
  {
    firstName: "Manolo",
    age: 17,
    hasDriversLicense: true,
    nationality: "Spanish",
  },
  {
    firstName: "Hugo",
    age: 13,
    hasDriversLicense: false,
    nationality: "Portuguese",
  },
];

for (let i = 0; i < persons.length; i++) {
  checkPerson(persons[i]);
  checkAge(persons[i]);

  console.log("-------------");
}
