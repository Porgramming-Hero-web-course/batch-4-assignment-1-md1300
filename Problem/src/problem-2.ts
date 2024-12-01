// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// solve:
{
const number:number[] = [2, 2, 3, 4, 7, 5, 8, 7, 4, 6, 2]

    const number2 = (num: number[]) :number[] => {
        const result = num.filter((value, index) => num.indexOf(value) === index)
        return result
    }

    const result2 = number2(number)

       console.log(result2)

}
