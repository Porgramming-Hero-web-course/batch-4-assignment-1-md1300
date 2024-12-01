// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// solve :
{
const name = "I love typescript";
    const name2 = "typescript";

    function getName(name: string, name2: string):number {

        const result = name.split(' ').filter(value => value === name2)
        // console.log(result.length)
        return result.length

        
    }
    getName(name, name2)

}