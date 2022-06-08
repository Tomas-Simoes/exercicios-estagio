/*The allowed array methods to this exercise are: 
map, filter, reducer and find.

1- build an array of objects that contains all this inventory 
information. it must have only one entry for each product. 

If the product on the inventory array is unique it must
double the quantity of the product
*/

// const sums = accounts.reduce(
//   (sums, cur) => {
//     // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//     sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
//     return sums;
//   },
//   {
//     deposits: 0,
//     withdrawals: 0,
//   }
// );
// console.log(sums);

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

const inventoryCompleted = inventory.reduce((itens, cur, index) => {
  const duplicatedIndex = itens.findIndex((object) => {
    return object.name === cur;
  });

  duplicatedIndex + 1
    ? (itens[duplicatedIndex].quantity += quantity[index])
    : itens.push({ name: cur, quantity: quantity[index] });

  return itens;
}, []);

console.log(inventoryCompleted);

//TODO If the product on the inventory array is unique it must double the quantity of the product
