/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

1. Write a funciton myEvery that will take in an array "array" and a function "cb"
2. create a condional to test the element in the callback
    3. if false, return false
4. return true;
3. return wether all the elements in array are true when put into the cb
*******************************************************************************/

let myEvery = function (array, cb) {
    let isTrue = true
    array.forEach(function(element){
       if (!cb (element)) isTrue = false;
    });
    return isTrue
};


let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function (string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myEvery;
