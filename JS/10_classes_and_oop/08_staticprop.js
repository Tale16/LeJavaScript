class User {
    constructor(username){
       this.username = username 
    }

    logMe(){
        console.log(`username: ${this.username}`); //jaisehi user bane mujhe user ki unique id mile
    }

    static createId(){
        return `123`
    }
}

const chinmayee = new User("chinmayee")
console.log(chinmayee.createId())

//you dont want to give access to each object jo iss class ke sath instanceciate hua hai

class Teacher extends User {
    constructor(email)
}