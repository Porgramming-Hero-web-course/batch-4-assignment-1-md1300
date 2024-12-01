// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

// solve:

interface Profile{
    name:string;
    age:number;
    email:string;
}

const profile:Profile={
    name:'tawhid',
    age:27,
    email:'tawhid@gmail.com'
}
 function updateProfile (profile2:Profile,update2:Partial<Profile>){
    const result={...profile2 , ...update2}
    console.log(result)
 }

 updateProfile(profile,{age:25})

