"use strict";
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
const numberArray = [1, 2, 3, 4, 5];
function sumArray(numberArray) {
    const result = numberArray.reduce((totalNumber, number) => totalNumber + number, 0);
    //    console.log(result)
}
sumArray(numberArray);
