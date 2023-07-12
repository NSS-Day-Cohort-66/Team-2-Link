const materials = [
  "Hylian Rice",
  "Big Hearty Truffle",
  "Tabantha Wheat",
  "Raw Prime Meat",
  "Hateno Cheese",
  "Bird Egg",
];
const meals = [];

/*
    We need to add more meals depending on ingredients

    See what what ingredients result in what meal => conditionally determine what ingredients give what meal
        Need to check ingredients that are given against what is expected and provide the correct meal.

    
*/

// TODO: Need to implement the last ingredient/meal and discuss the else if more...

const cook = (firstIngredient, secondIngredient) => {
  if (
    firstIngredient === "Hylian Rice" &&
    secondIngredient === "Big Hearty Truffle"
  ) {
    meals.push("Mushroom Rice Balls");
  }
  if (firstIngredient === "Hateno Cheese" && secondIngredient === "Bird Egg") {
    meals.push("Cheesy Omelette");
  }
  if (
    firstIngredient === "Tabantha Wheat" &&
    secondIngredient === "Hateno Cheese"
  ) {
    meals.push("Cheesy Hylian Pizza");
  }
};

// const cook = (firstIngredient, secondIngredient) => {
//   if (
//     firstIngredient === "Hylian Rice" &&
//     secondIngredient === "Big Hearty Truffle"
//   ) {
//     meals.push("Mushroom Rice Balls");
//   } else if (
//     firstIngredient === "Hateno Cheese" &&
//     secondIngredient === "Bird Egg"
//   ) {
//     meals.push("Cheesy Omelette");
//   } else if (
//     firstIngredient === "Tabantha Wheat" &&
//     secondIngredient === "Hateno Cheese"
//   ) {
//     meals.push("Cheesy Hylian Pizza");
//   }
// };

cook(materials[0], materials[1]);
cook(materials[2], materials[4]);
cook(materials[4], materials[5]);

console.log("MEALS:");
console.log("---------------");
for (const meal of meals) {
  console.log(meal);
}
