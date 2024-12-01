// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const numberArray: number[] = [1, 2, 3, 4, 5];
    function sumArray(numberArray: number[]) {
        const result = numberArray.reduce((totalNumber, number) => totalNumber + number, 0)
        console.log(result)
        return result
    }

    sumArray(numberArray)