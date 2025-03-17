const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)

// as expected this doesnt merge but add array into array which is problemetic
// console.log(marvel_heros);
// to get ip
// console.log(marvel_heros[3][2]);


// concat combines two or more arrays.
//  This method returns a new array without modifying any existing arrays
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// another way of concating arrays
// concate spread operator 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// check argument is array
console.log(Array.isArray("Chinmayee"));
// converts the string into array
console.log(Array.from("Chinmayee"));
// this gives empty string and is difficult to covert array
console.log(Array.from({name:"Chinmayee"})); //interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
