// ES6 
//everything is syntactical sugar

// class User { //can add properties and function in class
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){ //is method
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword()); //password is not encrypted as we are not calling the method in constructor function
// console.log(chai.changeUsername()); //will print chai in uppercase


//###behind the scene###

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

