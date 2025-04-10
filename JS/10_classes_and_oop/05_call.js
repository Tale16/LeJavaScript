function SetUsername(username){
    //complex DB calls
    this.username = username; //this.username is set in this function but we want it in createUser function
    console.log("called")
}

function createUser(username,email, password){
    SetUsername.call(this, username) // holds an reference //context passing 
    //applying 'this' as a parameters and will have samayan of current context of setUsername function

    // this.username = username //would have work //par ye call ho hi nahi raha hai from above
    this.email = email
    this.password = password
    //
}

const chai = new createUser("chai", "chai@fb.com", "1234")
console.log(chai);