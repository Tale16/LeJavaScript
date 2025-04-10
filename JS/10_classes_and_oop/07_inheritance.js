class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // super keyword will refer to extend
    constructor(username, email, password){
        super(username) //rather than doing call reference and this passing current context apply 'super' //super is used to access the parent class constructor and methods
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const chai = new Teacher("chai", "chai@google.com", "1234")

chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

// console.log(chai === masalaChai); //false // chai is a teacher and masalaChai is a user so they are not same
// console.log(chai === Teacher);
// console.log(chai instanceof Teacher); //true // chai is an instance of teacher
// console.log(chai instanceof User); //true // chai is an instance of user as well