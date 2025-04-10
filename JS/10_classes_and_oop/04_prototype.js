//to understand prototype : 
// prototype is hidden property in js. is like chain to anothe object and this chain is used to share properties and methods across instaces of objects.
//() is method and {} is property

// let myName = "Chinmayee    "
// let myMe = "Tale    "

// console.log(myName.truelength); //undefined as truelength is not a property of string object

let myHeros = ["Thor", "Spidrman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidypower is ${this.spiderman}`);
    }

}
// heroPower.getSpiderPower()




//below is property adding to object and that property can accessed 
// Object.prototype.chinmayee = function(){
//     console.log(`Chinmayee is present in all Objects`);
// }

//below is injecting property in array and not in object
Array.prototype.heychinmaye = function(){
    console.log(`Chinmayee is present in all Arrays`);

}

// heroPower.chinmayee() //heroPower is an object and it can access the prototype method chinmayee
//everything goes through object usse superior prototype nai hota

// myHeros.chinmayee()
// myHeros.heychinmaye()
//myHeros is an array and it can access the prototype method chinmayee and heychinmaye

// // heroPower.heychinmayee() //but in this case here heychinmayee cannot be accessed as it is not present in object prototype but in array prototype






// ### Inheritance ###

// Inheritance is a mechanism in JavaScript that allows one object to inherit properties and methods from another object. This is achieved through the prototype chain, where an object can access properties and methods of its prototype and the prototypes of its prototypes, and so on.
// every test obbject has its own instance
//link karne ke liye prototype ka use hota hai

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    markVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //this is how we link the object to another object  Inherits from TeachingSupport
}

Teacher.__proto__ = User //this is how we link the object to another object // Teacher object can access properties of User Object //is portotyple Inheritance



//in modenrn syntax 
Object.setPrototypeOf(TeachingSupport, Teacher) //kis ki property kis me inject karni hai in parameter//diff way    of above

let anotherUserName = "ChaiAurCode    "

// String.prototype.truelength = function(){
//     console.log(`${this}`);
//     console.log(`${this.name}`);
//     console.log(`True Length is: ${this.trim().length}`); 
// }

// anotherUserName.truelength()
// "chinmayee".truelength()
// "iceTea".truelength()





//difference in function and this 
// this refers to the object that is currently calling the method. It is a context keyword, not a function.
// and A callback is a function that is passed as an argument to another function and is executed later, usually after some operation is completed.