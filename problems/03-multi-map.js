/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

1. Write a function multiMap a value "value" a number "n" and a function "callback"
2. create a loop while the counter is <= number have the value cb that amount of times
2. return the new value after its gone thorugh the callback a certain number of times "n"
*******************************************************************************/

/*
1. make a function my */
let multiMap = (value, n, cb) => {
  for (let i = 1; i < n; i++) {
    value = cb(value)
  }
  return value
};

let result1 = multiMap(7, 2, function (n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function (n) {
  return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function (s) {
  return s + "!";
});
console.log(result3); // hi!!!!!

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
