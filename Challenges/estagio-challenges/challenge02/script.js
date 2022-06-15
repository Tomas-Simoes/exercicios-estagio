//without accessing the index complete the following code to make it functional

const coords = [0, 2]; // this are the lat and long coordinates
const [lat, long] = coords;

console.log(`The lat value is: ${lat}`); //show here only the lat
console.log(`The long value is: ${long}`); //show here only the lat

//Copy the following array to another array, and change any value on that new array without changing the original array

const arr = [1, 2];
const newArr = [3, ...arr];

//using to arr spread operator create a final array that is in the following format [1,5,6,2]
const a = [1, 2];
const b = [3, 4, 5, 6];

const [value1, value2] = a;
const [, , ...value3] = b;

const arr2 = [value1, ...value3, value2];

//having this object find the fastest way to create an new object just changing the value of the property name

const person = {
  name: "Ana",
  age: 18,
  nacionality: "Portugal",
};

const person2 = { ...person, name: "joana" };

console.log(person);
console.log(person2);
// uncomment and complete the code in order to print the two messages correctly

const func = ([, second, third]) => {
  console.log(`the second value is ${second}`);
  console.log(`the third value is ${third}`);
};

const testArr = [1, 2, 3];

func(testArr);
