// Object literals : creating object using {}

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got usr details from database"); // this is used to refer to the current instance of the class // refers current function
//         //  console.log(`Username: ${this.username}`);
//         // console.log(this); // this will give value of object user{...}
//     }

// } 


// console.log(user.username);
// console.log(user.getUserDetails()); // this will call the function and return the value of the function
// console.log(this); //value of "this" ..{}


// ### contructor functions ###

// ####
// const promiseOne = new Promise() //new is an constructor function : from one object literal we can make multiple instance (copy)
// const date = new Date() //new makes new context
// ####

function User(username, loginCount, isLoggedIn){
    this.username = username; //left side is variable and right side is a passing value from function
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn; 

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; //passed on an object //even if ur not passing return then also the output will be implicitly define and  will give same output

}

const userOne = new User("Chinmayee", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)//will overwrite value on userOne //new avoids overwritting values// this will not work as expected because it is not an object literal //will avoid mess
// console.log(userOne); // this will give the value of the object
// console.log(userTwo.constructor); //constructor property is reference about itself

//### NEW KEYWORD ### 
// whenevr u use new keyword an empty object / paranthesis (instance) generates 
//step1: an empty object is created and assigned to this keyword
//stp2: contructure function is called with this keyword (packs arguments into the object)
// step3: this injects in argument
// step4: this is returned to the caller (return this)

