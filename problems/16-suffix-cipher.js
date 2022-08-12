/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

// filter method reduces the total array length
// for each gives us undefined push up
// reduce one value
// map? gives you an array the same length as the original array

1. Write a functino suffixCipher that accepts a sentance and object as parameters
2. Keep the same number of words
3. Split sentance up
4. run it through map
    5. check every key in object
        6. if words ends with key value, return word
    6. return word.
7. Money.
*******************************************************************************/

let suffixCipher = function (sentence, object) {
    let words = sentence.split(" ");

    let result = words.map((word) => {
        for (let key in object){
            if (word.endsWith([key])) return object[key](word)
        }
        return word
    })

    return result.join(" ");
};

let cipher1 = {
    ly: function (word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function (word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function (word) {
        return word.toUpperCase();
    },
    s: function (word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
