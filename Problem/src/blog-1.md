title :  Union and Intersection Type
introduction : Union and Intersection types are two kind of types which are used in typeScript , they are popular in type script to show and coustomise type .

Union : Union type are used to explain two or more type those are identify either one type or others types, we show "|" this sign to use Union type;
for example:

type Person1={
    name:string;
    age:number;
    contactInfo:string
}

type Person2 ={
    id:number;
    profession:string;
    email:string
}

const person=(personData1:Person1 | Person2)=>{
    return personData1
}

const personInfo1:Person1={
    name:'tawhid',
    age:27,
    contactInfo:01234848545,
}

const personInfo2:Person2 ={
    id:1234,
    profession:'web developer',
    email:'tawhid@gmail.com,
}

person(personInfo1)
person(personInfo2)

Intersection: Intersection is a method to show condition of type script to maintanance two or more type in one variable. it is explain that those type you use all type will declare in variable, to expose intersection "&" sign is used. 
for example:

type Laptop ={
    name:string;
    release:number;
    price:number
}
type Computer ={
    ram:string;
    rom:string;
    monitor:number
}
const FullComputer=(computerData:Laptop & Computer){
    return computerData
}

FullComputer({
    name:'MSI',
    release:2024,
    price:65000,
    ram:'16GB'
    rom:'512GB'
    monitor:14
}
)

conclusion:
Union types are used to understand  either one type or others type will use to expose type , on the other hand , intersection types are used to understand both types which are declared . one words, Union and Intersection are used to expose different work one another.   


