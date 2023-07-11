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

// TODO: We need to implement the above algorithm into the code below.

const cook = (firstIngredient, secondIngredient) => {
  if (
    firstIngredient === "Hylian Rice" &&
    secondIngredient === "Big Hearty Truffle"
  ) {
    meals.push("Mushroom Rice Balls");
  }
};

cook(materials[0], materials[1]);

console.log("MEALS:");
console.log("---------------");
for (const meal of meals) {
  console.log(meal);
}
