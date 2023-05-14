// Question : Consider three integer values , find out the minimum value among the given input values.
// example x=10,y=20,z=6 . output : 6

let x = 10;
let y = 20;
let z = 3;

if (x < y && x < z) {
  console.log(x);
} else if (y < x && y < z) {
  console.log(y);
} else {
  console.log(z);
}
