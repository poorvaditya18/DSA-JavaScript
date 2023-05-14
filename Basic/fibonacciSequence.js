// suppose we want fibonacci sequence upto 10 numbers.
// output will be : 0,1 , 1 , 2 ,3  , 5 ,8 , 13 , 21 , 34.
// fib(n) = fib(n-1) + fib(n-2);

let num1 = 0;
let num2 = 1;
let fibSeq = [num1, num2];
while (fibSeq.length < 10) {
  let nextNum = num1 + num2;
  fibSeq.push(nextNum);
  num1 = num2;
  num2 = nextNum;
}
