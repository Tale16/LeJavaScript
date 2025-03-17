const user = {
    username: "chinmayee",
    price: 999,

    welcomeMessage: function(){
//this. is a current context: which is use to call in between specific scope{}
// iss code ke andar jitne bhi variable ahe unsko access karne ke liye we use {this. }
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}
// till here the carrying same context as above
// user.welcomeMessage()
// // here context got changed
// user.username = "sam"
// user.welcomeMessage()

// imp // here (this) return empty object {}
// imp // but in browser it will show widow object as it a global object
// console.log(this);


// function chai(){
//     let username = "chinmayee"
// //     // this will print global values
//     console.log(this);
// // this will return undefine as this will work in objects only
//     console.log(this.username);

// }
// chai()

// const chai = function (){
//     let username = "chinmayee"
//     console.log(this.username);

// }
// chai()

const chai = () => {
    let username = "chinmayee"
    // this will show same result as above
    // console.log(this.username);
    // console.log(this);

}
// chai()


// how to declare arrow := () => {}
// +++++++++++++ explicit return : where you have to give return key value +++++++++++++
    // basic arrow function 
    // const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }





    // ++++++++ implisit return := one line statement +++++++
    // const addTwo = (num1, num2) => num1 + num2
    // if we wrap into {} we have to give return keyword but () we dont have to
    // const addTwo = (num1, num2) => (num1 + num2)

    // when you want to return object you have to return it in ()
    // note: when u add paranthesis() i automatically creates an block
    const addTwo = (num1, num2) => ({username: "chinmayee"})


    
    console.log(addTwo(3,4))


    const myArray = [2, 5, 3, 7, 8]