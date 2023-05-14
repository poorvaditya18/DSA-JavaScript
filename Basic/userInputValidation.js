// untill you enter valid string loop will ask you to enter you name
let userInput;
while (!userInput) {
  console.log(userInput);
  userInput = prompt("enter your name: ");
}
console.log("hello, " + userInput);
