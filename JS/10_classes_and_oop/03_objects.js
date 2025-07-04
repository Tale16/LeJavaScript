//to understand object and new keyword
function multipleBy5(num){
    this.num = num //this.num will store in reference
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(5)); 
console.log(multipleBy5.power); // this will give the value of the power property of the function
console.log(multipleBy5.prototype); //will set by-default contex in {} //this prototype will give methods as well as same properties as object //is used when function is used as constructor with new

function createUser(username, score){
    this.username = username
    this.score = score
}

// createUser.prototype.increment = function(){
//     this.score++ // this. matlab jis...jisne bhi bulaya hai uska kam karo current context ka

// }
createUser.prototype.printMe = function(){
    console.log(`price score is ${this.score}`);
}

const chai = new createUser("chai", 25)//will give error of (Cannot set properties of undefined) as we hvn't inject any value in chai object // chai ko humne bataya nai ki ye additional properties aayi hai aur ye kam 'new keyword'karta hai
const tea = createUser("tea", 250)

chai.printMe() //syntatycal sgar add karneki jaroorat nai hai (.prototype) //when from function properties are getting transfer tab apne use bataya nahi ki additional properties aa rahi hai // pprintMe : methode which is getting accessed



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/