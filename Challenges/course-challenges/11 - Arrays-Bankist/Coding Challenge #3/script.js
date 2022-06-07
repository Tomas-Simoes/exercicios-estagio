"use script";

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

? Previous Challenge code example


*/

const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map(
    (age) => (age <= 2 ? 2 * age : 16 + age * 4)
    // ! With if()
    // {
    // if (age <= 2) return 2 * age;
    // else return 16 + age * 4;
    // }
  );

  const adultAges = humanAges.filter((age) => age > 18);

  let avgAges = adultAges.reduce((acc, age) => acc + age, 0);
  avgAges /= adultAges.length;

  return Math.trunc(avgAges);
};

const calcAverageHumanAge2 = (ages) => {
  const avgAges = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return Math.trunc(avgAges);
};

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
