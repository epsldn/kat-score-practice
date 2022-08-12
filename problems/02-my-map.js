/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

1. Create a function myMap that takes in an array "array" and a function "cb"
2. make a new array to accept the new elements
3. iterate through each element
    4. for each element, pass the element into the callback function
    5. push the passed element to the new array

*******************************************************************************/
let myMap = (array, cb) => {
    let newArr = []
    array.forEach((element) => {
        newArr.push(cb(element))
    });

return newArr

};



// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myMap;
