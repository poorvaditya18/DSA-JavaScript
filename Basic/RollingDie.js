// Ques: We want to roll the die until the target number is rolled. Each roll is logged into console and total number of rolls is tracked.

let target = 6;
let countRolls = 0;
while (true) {
  let roll = Math.floor(Math.random() * 6) + 1;
  countRolls++;
  console.log("Rolls #" + countRolls + ":" + roll);
  if (roll === target) {
    console.log("Target Number is rolled");
    break;
  }
}
