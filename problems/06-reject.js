/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

1. Write a function called reject that takes in an array "array" and a function "cb"
2. Create new Array
3. Iterate through our OG array
4. Check each element with cb, if false, push to new array
2. return a new array
*******************************************************************************/

let reject = function (array, cb) {
    let newArr = [];
    array.forEach(element => {
        if (cb(element) === false) {
            newArr.push(element);
        }
    });
    
    return newArr;
};


let isEven = function (n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function (s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
