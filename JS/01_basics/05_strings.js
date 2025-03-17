const name = 'chinmayee'
const repoCount = 50

// not so ideal way of concandation
console.log(name + repoCount + " value")

// correct way of concandation
// in this we can add up methods on the go
console.log(`hello my name is ${name} and repo count is ${repoCount}`) 


const gameName = new String ('Chinmayee-G-baka')

// shows value of key
console.log(gameName[4]);

// shows object
console.log(gameName.__proto__);

// to show length 
console.log(gameName.length);

// to make value uppercase
// this doesnt change original value 
console.log(gameName.toUpperCase());

// value of key at index
console.log(gameName[5]);
//or
console.log(gameName.charAt(5));

// index value
console.log(gameName.indexOf('y'));

// break down string and print till the key value
const newString = gameName.substring(0,4)
console.log(newString);

// break string from backward 
// accepts negative key value
const anotherString = gameName.slice(-10,7)
console.log(anotherString);

// to trim starting space and ending space
// if user unknowingly or knowingly add extra characters 
const newStringOne = "   chinmayee   "
console.log(newStringOne);
console.log(newStringOne.trim());

// to replace specific character or string 
const url = "https://chinmayee.com/chinmayee20%tale"
console.log(url.replace('20%','-'));

// ask questions
console.log(url.includes('chinmayee'));

// include
console.log(url.includes('baka'));

console.log(gameName.split('-'));
