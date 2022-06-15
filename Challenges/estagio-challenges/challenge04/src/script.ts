/*
Mary's mother ask her to go to the supermarket shopping and gave her the following 
shopping list:
Carrots, Meat, Fish , Eggs, Rice, Sugar. For paying Mary received 3 distinct banknotes

1 – Check if Mary can buy all the groceries or not. As an extra you can mention the 
groceries that she couldn't buy

2 - Check what are the banknotes that she is going to deliver, and the money 
she will receive

3 – Consider the promotion of the Eggs having a 10% discount on the price

4 – In case Mary bought everything, her mother told her she could receive 5% of 
the remaining money. Calculate the money that Mary received
*/

interface product {
  name: string;
  price: number;

  discount?: number;
}

const shoppingList: product[] = [
  {
    name: "Carrots",
    price: 10,

    discount: 0.1,
  },
  {
    name: "Meat",
    price: 12,
  },
  {
    name: "Fish",
    price: 5,
  },
  {
    name: "Eggs",
    price: 12,
  },
  {
    name: "Rice",
    price: 7,
  },
  {
    name: "Sugar",
    price: 2,
  },
];

const banknotes = [20, 10, 5];

function checkGroceries(list: product[], money: number[]) {
  const totalMoney = money.reduce(function (acc, cur) {
    return (acc += cur);
  }, 0);

  const totalToPay = list.reduce(function (acc, cur, index) {
    if (cur.discount) list[index].price = cur.price - cur.price * cur.discount;

    return (acc += cur.price);
  }, 0);

  if (totalMoney >= totalToPay) {
    const change = totalMoney - totalToPay;

    console.log(
      `She bought everything on the list and has ${change} change and got ${
        change * 0.5
      } for herself`
    );
  } else {
    let productPrices: number = 0;
    let finalProduct = 0;

    for (const [findex, fproduct] of Object.entries(list)) {
      productPrices += fproduct.price;
      if (productPrices > totalMoney) {
        finalProduct = +findex;
        break;
      }
    }

    console.log(
      `She couldn't buy everything on the list. The products left to buy were: `
    );

    for (const productLeft of list.splice(finalProduct, list.length)) {
      console.log(productLeft.name);
    }
  }
}

checkGroceries(shoppingList, banknotes);

console.log(`==========`);

checkGroceries(shoppingList, [50, 10, 1]);
