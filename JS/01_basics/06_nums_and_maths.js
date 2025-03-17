// automatically define as number type
const  score = 400 
console.log(score);

// but this one is specifically cast as an number (define in new object which is number type)  
const balance = new Number(100)
console.log(balance);

// show number of characters 
console.log(balance.toString().length);
console.log(balance.toFixed(3));


const otherNumber = 1223.8776
console.log(otherNumber.toPrecision(3));

// Converts a number to a string by using the current or specified locale.
const hundred = 10000000
console.log(hundred.toLocaleString('en-In'));

// *******************************Maths************************************

// object with so many properties 
// {} shows that its not empty but filled with so many other properties
console.log(Math);

// changes negative sign to positive
console.log(Math.abs(-4));

// works with decimal 
// mostly used
console.log(Math.round(5.6));
// chosses higher point (round of = 5)
// not imp
console.log(Math.ceil(4.2));
// chooses lower point (round of = 4)
// not imp
 console.log(Math.floor(4.2));

// for min and max
console.log(Math.min(4,8,3,6));

console.log(Math.max(4,8,3,6));

// values will in between 0-1 
console.log(Math.random());

// this has shifted 1 point further
console.log(Math.random()*10);

// to avoid 0 interger before point. 
console.log(Math.random()*10 + 1);

// to avoid bodmas rule add () ((result)+1) (BODMAS is an acronym that helps you remember the order of operations in math.
//  It stands for Brackets, Orders, Division and Multiplication, Addition and Subtraction.
//  division and multiplication must be done before addition and subtraction in any mathematical example. And if there are brackets (or parentheses) and orders (of powers or roots), these must be done first of all)
console.log((Math.random()*10) + 1);
// round off
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
// imp // method for min max
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// for square root      
console.log(Math.sqrt(64));

// for power . pow(base, power).   
console.log(Math.pow(2,3));
