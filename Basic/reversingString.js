// let us reverse the given input string
let inputString = "hello";
let reversedString = "";
let idx = inputString.length - 1;
while (idx > 0) {
  reversedString += inputString[idx];
  idx -= 1;
}
console.log(reversedString);
