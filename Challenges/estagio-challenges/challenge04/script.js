/*The allowed array methods to this exercise are: 
map, filter, reducer and find.

1- build an array of objects that contains all this inventory 
information. it must have only one entry for each product. 

If the product on the inventory array is unique it must
double the quantity of the product
*/

const inventory = [
  "grapes",
  "bananas",
  "peaches",
  "bananas",
  "apples",
  "apples",
  "bananas",
];

const quantity = [2, 5, 3, 4, 6, 1, 9];

//? Gets the unique value from the inventory[] array
const uniqueValue = inventory.reduce((acc, cur, index, arr) =>
  acc.includes(cur) ? cur : acc
);

//? Creates the new obj array
let newInventory = [];

inventory.forEach((cur, index, arr) => {
  const duplicatedObj = newInventory.find((e) => e.name === cur);

  if (!duplicatedObj) {
    newInventory.push({ name: cur, quantity: quantity[index] });
  } else {
    duplicatedObj.quantity += quantity[index];
  }
});

//? Duplicates the quantity property of the unique value
newInventory.forEach((cur, index, arr) => {
  if (cur.name === uniqueValue) {
    cur.quantity *= 2;
  }
});

//? Other solution
let data = inventory
  .filter((elem, i, arr) => arr.indexOf(elem) === i)
  .map(function (elem, mapi) {
    const multiplier = inventory.find((unique, findex) => {
      return unique === elem && findex != mapi;
    })
      ? 1
      : 2;

    return {
      fruit: elem,
      stock: quantity.reduce((acc, stock, idx) => {
        if (inventory[idx] === elem && stock) {
          return acc + quantity[idx] * multiplier;
        } else {
          return acc;
        }
      }, 0),
    };
  });

console.log(data);
console.log(newInventory);
