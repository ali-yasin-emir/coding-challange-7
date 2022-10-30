`use strict`;

// BMI = mass / height ** 2

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI(), john.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI ${mark.bmi} is higher than John's ${john.bmi}`);
} else if (john.bmi < mark.bmi)
  console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi}).`);

// for loop keeps running while condition is TRUE
/* parantez içindeki ilk değer, 
alttaki ifadenin kaç kez yazılacağını, ikinci değer kaça kadar devam edeceğini, üçüncü değer kaçar kaçar artacağını gösterir) */

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

//

// jonas[5] does NOT exist

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// for (let i = 0; i < 5; i++) {
//   console.log(jonas[i]);
// }

const types = [];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  types[i] = typeof jonas[i];
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

// continue and break

console.log("---- ONLY STRINGS ----");
for (let i = 0; i < years.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("---- BREAK WITH NUMBER ----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

// 0, 1, ..., 4
// 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
