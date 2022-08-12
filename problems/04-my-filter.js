/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array#filter.

Examples:

1. Write a function myFilter an array "array" and a function "cb"
2. Create an empty array.
2. Iterate through the array and pass all the truthy elements into a new array

*******************************************************************************/

let myFilter = (array, cb) => {
    let newArr = []
    array.forEach((element) => {
        if (cb(element)) {
            newArr.push(element);
        }
    });
    return newArr
};

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0; //true or false
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myFilter;
