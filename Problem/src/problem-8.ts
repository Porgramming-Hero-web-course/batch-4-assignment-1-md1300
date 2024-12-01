// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// solve :

class Person {
    name: string;
    age: number;
    email: string
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

}

const person1 = <T, K extends keyof T>(value: T, key: K): boolean => {
    if (value[key]) {
        // console.log('this is true')
        return true
    }
    else {
        // console.log('this is false')
        return false
    }
}
const person: Person = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};

 console.log(person1(person, 'email'))
