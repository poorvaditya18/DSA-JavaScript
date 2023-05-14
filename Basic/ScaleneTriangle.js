// Ques. given the side lengtj of a triangle in the form of 3 integer . check if the given triangle is equilateral , scalene , isoceles.
// Assume given input will always  form the triangle
let a = 10,
  b = 20,
  c = 30;

if (a == b && a == c && b == c) {
  console.log("Equilateral");
} else if (a != b && b != c && a != c) {
  console.log("Scalene");
} else {
  console.log("Isoceles");
}

// Another way -->

if (a == b && a == c && b == c) {
  console.log("Equilateral");
} else if (a == b || a == c || b == c) {
  console.log("Isoceles");
} else {
  console.log("Scalene");
}
