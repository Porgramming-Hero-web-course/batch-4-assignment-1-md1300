// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// solve :

type Book = {
    title: string;
    author: string;
    publishYear: number;
}

const myBook: Book = {
    title: 'advantance of learning ',
    author: 'tawhid',
    publishYear: 2034,
}

// console.log(myBook.author)

const getProperty = <T, K extends keyof T>(value: T, key: K): T[K] => {
    return value[key]
}

const result = getProperty(myBook, 'publishYear');
console.log(result)
