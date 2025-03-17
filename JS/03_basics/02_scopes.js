// scope is consider as {} in funtion, if, else but in object {} is used as a object declaration
// in let and const it will show not define which is correct manner of declaration but var anyways print the result 
// in this case declared variables shouldnt be coming out of scope 
// whatever comes inside scope {} is called as block scope 
// whatever is outside of scope {} is called as global scope 
// global scopes value can be available in scope {} but inside scope value shouldnt go out of {}
// *once ur out of block scope or if else scope the value of variable will be always globally declared value which will save you from so many bugs too
// imp //when you run code in scope node it is different and scope in browser console is different
let a = 300
if (true){
let a = 10
const b = 20
// var c = 30 //faltu var
// console.log("INNER: ",a)
}
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);



// DOM (document Object Module) : how to manipulate html webpage through javascript



// ************************* Nested Scope ***************************

// child function can access parent function but parent function cant access parent function
// eg.: children can ask for ice cream from elders but elders cant ask for ice cream from children
function one(){
    const username = "Chinmayee"
    // 'two' can access from 'one' but 'one' cant access from 'two'
    // whatever is declare inside two that ends in {} scope
    function two(){
        const website = "youtube"
        // can access username from 'one' function
        console.log(username);
    }
    // this console.log is out of the scope so that it will show error
    console.log(website);
    // this doesnt execute as it is line by line execution
    two()
}

// one()






// ********example********

if (true){
    const username = "chinmayee"
    if (username === "chinmayee"){
        const website = " youtube"
        // console.log(username + website);
    }
    console.log(website);
}
console.log(username);


// +++++++++++++++++++++ interesting +++++++++++++++++++++

// here we have only declare function ...line:80
console.log(addone(5))
function addone(num){
    return num + 1
}
// here value got return not print
// addone(5)


console.log(addTwo(5))
// here 'addTwo' is also call as a expresion which is like a variable which can hold anything 
// but here we have declared as well as hold variable with 
const addTwo = function(num){
    return num + 2
}

// addTwo(5)