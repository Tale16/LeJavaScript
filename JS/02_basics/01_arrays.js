// ************ Array ***********

// array is an object
// array has [] 
// [] contains elements which can be strings, numbers,boolean, etc.
// array is datatype
//collection of multiple items in single variable 
// JS variables are resizable 
// arrays indexing starts from 0
// JS array copy operations creates shallow copies (object is a copy whose properties shares same reference)
const myArray = [0, 1, 2, 3, 4, 5]
const myHero = ["shaktiman", "naagraj"]

// another way of declaring array
const myArr2 = new Array(0,1,2,3,4)
// console.log(myArr2[1]); 

// Array methods //

// we have added elements in previous var
// myArray.push(6)
// // removes last element
// (myArray.pop())
// this has shifted elemensts forward and has added array at the start
// time consuming
// myArray.unshift(9)
// //myArray.shift()
// results in true/false if element is present 
// console.log(myArray.includes(9))
// // if element is not present then results in '-1'
// console.log(myArray.indexOf(9))

// // adds all array into a string
const newArray = myArray.join()

// // type of array has changed of newArray
console.log( myArray);
console.log(typeof newArray);


// slice and splice

console.log("A ", myArray);

// doesnt include last range of input
const myn1 = myArray.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArray);
// array rmains same

// includes last range of input
// vimp // it manipulates the array
const myn2 = myArray.splice(1, 3)
// console.log(myn2);
// console.log("B ", myArray);

