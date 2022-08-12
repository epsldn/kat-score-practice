/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.

1. Function mySome takes in array "array" and a fuinctin "cb"
2. Iterate through the array
    3. pass the element and index into the callback
        4. If cb(element) return true
    5. return false
*******************************************************************************/

let mySome = function (array, cb) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (cb(element, index)) return true;
    }
    
    return false;
};

let result1 = mySome([5, 1, 7, 9], function (ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function (ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function (ele) {
    return ele.length === 4;
});
console.log(result3);   // true
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySome;
