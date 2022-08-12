/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

1. Write a function selectiveMap that accepts an array "array" and two callbacks "cb1" "cb2"
2. Create an empty array
3. Iterate through the array
3. push any elements that come back false from cb1 into the array
4. push any elements that come back true from cb1 and run them through cb2
5. Return the new array
*******************************************************************************/

let selectiveMap = function (array, cb1, cb2) {
    let newArr = [];

    array.forEach(function (element) {
        cb1(element) ? newArr.push(cb2(element)) : newArr.push(element);
    });

    return newArr
};


function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = selectiveMap;
