/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Is the final array going to be smaller?
If its smaller.. are we taking things out met on conditions? Or are we returning one value?

1. Write a function count that takes in array "array" and a callback "cb"
2. Create a variable counter
3. reduce the array to find how many items are true
3. filer the array and return filter.length
2. Return the number of elements that return true
*******************************************************************************/

let count = function (array, cb) {
    return array.reduce(function (start, nextValue) {
        if (cb(nextValue)) {
            start++
            return start;
        } else {
            return start;
        }
    }, 0);

};


let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = count;
