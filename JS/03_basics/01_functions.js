// JavaScript function is a block of code designed to perform a particular task
// function is wrapping code into a packadge and we can call it anywhere


// Syntax
// function key word: function , function name: sayMyName, function syntax: (), rest is function
function sayMyName(){
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("E");
    console.log("E");

}
// reference
// sayMyName

// execution
sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
function addTwoNumbers(number1, number2){
// once you return in function then funcion will not work further

let result = number1 + number2
console.log("chinmayee")
// result inside function - line:40
return result

}
// console doesnt return output and return is a type
addTwoNumbers(3, 5)

// result outside of function
const result = addTwoNumbers(3, 6)

console.log("Result: ", result);


// now func cant be undefined coz there is a min value "Sam" ....line 65...

function loginUserMessage(username = "Sam") {
  // if(username === undefined){

  // ! : not symbole
//  "" is consider as an empty string 
    if(!username){

        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`

}

console.log(loginUserMessage("Chinmayee"))
// this shows undefine output

// line 49: and value from here will over write
console.log(loginUserMessage())




// **************** LOGIC BUILDING ***************

// ex: shopping cart with the number of items adding price of each item into it 
// '...' array
// function calculateCartPrice(...num1){

// in this value one will goes to val1 and value 2 will go to val2 and rest to the array
function calculateCartPrice(val1, val2, ...num1){

    return num1
}
// adding multiple items with the diff price 
console.log(calculateCartPrice(200, 400, 500, 900));

const user = {
    username: "chinmayee",
    price: 200
}
function handledObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handledObject(user);
handledObject({
    usernmae: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    // here we return mentioned value
    return getArray[1]
}

// both way it waorks same even if its variable mentioned or value mentoned
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
