"use strict";
/*
1 – On the html create a div with the id of persons
2 – Define 4 array variables that will provide data to the html later
- 2 arrays for storing person names, one for male and the other for female
-2 arrays for storing each person ages
3- Merge all that information in one single variable
4 – Create, on code, two child divs to be added inside the persons div. One to be filled with
names of adults with age bigger or equal to 18 and the other for children names.

Notes:
In point 4 The iteration of data cannot be made using the 4 initial arrays, instead you must use
the variable you created in point 3
Built this exercise in the most efficient possible way
*/
// Data array
const males = ["John", "Carl", "Justin"];
const females = ["Carla", "Ester", "Hope"];
const malesAge = [13, 64, 23];
const femalesAge = [45, 26, 17];
// Divs elements
const adultsDiv = document.createElement("div");
const childrenDiv = document.createElement("div");
const personsDiv = document.getElementById("persons");
let allPersons = [];
function writePersons(males, malesAge, females, femalesAge) {
    males.forEach((male, index) => {
        allPersons.push({ name: male, age: malesAge[index] });
    });
    females.forEach((female, index) => {
        allPersons.push({ name: female, age: femalesAge[index] });
    });
    allPersons.forEach((person) => {
        if (person.age >= 18)
            adultsDiv.innerHTML += ` ${person.name}`;
        else
            childrenDiv.innerHTML += ` ${person.name}`;
    });
    personsDiv === null || personsDiv === void 0 ? void 0 : personsDiv.append(adultsDiv);
    personsDiv === null || personsDiv === void 0 ? void 0 : personsDiv.append(childrenDiv);
}
writePersons(males, malesAge, females, femalesAge);
