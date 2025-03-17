// in this case true value is consider from string

// const userEmail = "chinmayee@18" 
// const userEmail = ""  // empty string: consider as false 
const userEmail =  [] //empty array: consider as true value

if (userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
}


// ----------- Falsy Value ---------

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN : these values are consider as a falsy value

// ---------- Truthy Value ----------
// "0", 'false', "", " ", [], {}, function (){} 
// empty strings, array, object are truthy value

// Check Array
if (userEmail){
    console.log("Array is empty");
}

// Check object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}


// ********** Nullish Coalescing Operator (??)
// : works on only 2 key words : null and undefined
// wile executing values if one of the value is null or undefined then it tends to give defined value
// checks safety of null value bcause if null creates a problem in code 
// sometimes fuction executed values from third party,firebase, appright which gives you null and to avoid this situation we executes other function
let val1;
//  val1 = 5 ?? 10
//  val1 = null ?? 10
//  val1 = undefined ?? 15
// first value prints which is coming after null
 val1 = null ?? 10 ?? 15



 console.log(val1);


//  *********** Terniary Operator ***********
// syntax: concition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

