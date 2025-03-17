// +++++++ CONTROL FLOW +++++++++

// usually complete code execites but it shouldn't be like that 
// - complete code should be execute on a conditional base
// -like when u log in or log out different code should be executed 

// *********** if *************

// if true is the condition the code will execute and if false is the condition in the code will not execute further in scope
// if(true){
// }
// if(false){
// }


// const isuserLoggedIn = true

// if (isuserLoggedIn){

// }

// operators of comparison: <(less than), >(greater than), <=(less than equal, checks 2 condition at once), >=(same as <=),
//  ==(equal), !=(not equal), ===(along with equal it check's type )

// if (2 == "2") {
//     // console.log("expected") 
// }

// loop is about asking question if condition given is true then it gets into the scope and follow if it doesn't it jump out of scope to and follow
// this results in true or false
// const temperature = 60

// if (temperature === 50){
//     // console.log("less than 50")
// }
// console.log("greater than 50")

// if else
// if else follow conditions where if condition is true then follow that scope or if not then follow else scope of condition

// else{
//     // console.log("greater than 50")
// }
// console.log("execute")

// example of scope
// const score = 200

// if (score > 100){
//     // if var is used then var is completely global and it will print this scopes output anyways which isnt correct
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// // console.log(`User power: ${power})



// +++++++++++ short hand notation +++++++++++ 
// //const balance = 1000
// // in this way we can execute code in single line where ';' is imp for execution and ',' is imp for seperation of execution of multiple line
// // not recomended : unreadable and immature code, not a good practise
// if (balance > 500) console.log("test"),
// console.log("test2")


// +++++++++++ Nesting +++++++++++
// to check multiple conditions
// const balance = 1000

// if (balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

// Multiple condition in one function
// &&: AND, || OR
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail =true

if (userLoggedIn && debitCard){
    console.log("Allow to borrow course")
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User is logged in");
    
}