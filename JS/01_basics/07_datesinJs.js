// dates represent a single moment in time in platform-indepentent formate
// date is an object

// let myDate = new Date()
// console.log(myDate);
// co-ordinate time representation
// console.log(myDate.toString());

// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate)

// let myCreatedDate = new Date(2003, 2, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2003, 2, 23, 5, 16);
// let myCreatedDate = new Date("03-14-2003");

// console.log(myCreatedDate.toLocaleString());

// time stamp from 1st Jan 1970 till now
// output will be in mili sec
const myTimeStamp = Date.now();
console.log(myTimeStamp);

// compare time from 1st Jan 1970 to mentioned date
// console.log(myCreatedDate.getTime());
// to get value in sec
// console.log(Math.floor(Date.now()/1000))

// imp
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getDate());

// console.log(`${newDate.getDate()} and the time day is ${newDate.getDay()}`)

// imp
// to define/customise more properties in one
newDate.toLocaleString('default',{
    weekday: "long"
})