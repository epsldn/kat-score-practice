/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

1. Function myForEach takes in an array "array" and function "cb"
2. Looking at every element in the array
    3. Going to pass every element in array into the callback
*******************************************************************************/

let myForEach = function (array, cb) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        cb(element, index, array)
    }
};

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myForEach;
