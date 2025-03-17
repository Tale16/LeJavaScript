// objects //
// two ways of declaration of objects: literal, contructor 
// singleton in 04_object.js
// while accesing values we mostly use '.' but at some places we have to use '[]'

// object literals : syntax

// declaration of symbol is different


// define symbol
const mySym = Symbol("key1")

const userJs = {
    // name is also consider as a string 
    name: "chinmayee",
    "full name": "Chinmayee Tale",
    age: 22,
    // symbol in key    // use [] for symbol //said as symbol key
    [mySym]: "mykey1",
    location: "Pune",
    email: "chinmayee@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday", "sunday"]
}
// this is a correct way but not referable
// console.log(userJs.email);
// correct way of declaring object
// "" is use bcoz it act as a string 
// console.log(userJs["email"]);
// console.log(userJs["full name"]);
// declation of symbol is different
// 1. define symbol 
// 2. act that defined symbol as key 
// 3. print
// console.log(userJs[mySym]);


userJs.email = "chinmayee@chatgpt.com"
// freeze : second value doesnt get propoget and first value got freeze in key value 
// Object.freeze(userJs)
userJs.email = "chinmayee@microsoft.com"
// console.log(userJs);   



// functions are treated as a type one citizen type which means there is no discrimination in fucntion 
userJs.greeting = function(){
    console.log("Hello JS user");
}
// didnt execute but shows reference of funtion as output 
console.log(userJs.greeting);

userJs.greetingTwo = function(){
// this. : displays properties of funtion
    console.log(`Hello JS user, ${this.name}`);
}

console.log(userJs.greeting());
console.log(userJs.greetingTwo());

